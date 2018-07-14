import { h, Component } from "preact"
import "./timeline.scss"
import BmwSVG from "./bmw.svg"
import { nextFrame } from "improved/dist/browser"
import easing from "./easing"
import {
  TIMELINE_VIEWBOX_HEIGHT,
  TIMELINE_VIEWBOX_WIDTH,
  TIMELINE_PADDING_X
} from "./timeline.constants"

const SPEED_DECAY = 0.001

enum PlannedAction {
  MUSIC_NO = "🔇",
  MUSIC_A = "🎷",
  MUSIC_B = "🎹",
  ROUTE_NO = "🛑",
  ROUTE_A = "🏕",
  ROUTE_BEACH = "🏖"
}

class TimelineStop {
  constructor(
    public min: number,
    public emoji?: string,
    public emotion?: number,
    public plannedAction?: PlannedAction
  ) {}
}
interface ITimelineState {
  startX: number
  targetX: number
  t: number

  stops: TimelineStop[]
}

export default class Timeline extends Component<{}, ITimelineState> {
  // private keys: IKeyFrame[] = [{xStart: 0, xEnd: 1000}]
  // public state: ITimelineState = { keys: [{ xStart: 0, xEnd: 1000 }] }
  public state: ITimelineState = {
    startX: 0,
    targetX: 0,
    t: 0,
    stops: [
      new TimelineStop(0, "🏡", 0.25, PlannedAction.MUSIC_A),
      new TimelineStop(60, "📍"),
      new TimelineStop(15)
    ]
  }
  private isAnimating: boolean = false
  private minutesToSVG(xInMinutes: number) {
    return (xInMinutes / 60) * TIMELINE_VIEWBOX_WIDTH
  }

  public componentDidMount() {
    this.animateMe(0)

    setTimeout(() => {
      this.moveTo(this.minutesToSVG(15))
    }, 1000)

    setTimeout(() => {
      this.moveTo(this.minutesToSVG(45))
    }, 3000)
  }

  public moveTo(xInMinutes: number) {
    this.setState({ startX: this.state.targetX, targetX: xInMinutes, t: 0 })
    this.isAnimating = true
  }

  public async animateMe(previous: number) {
    const dt = await nextFrame()
    const delta = dt - previous

    if (this.isAnimating) {
      let newT = this.state.t + delta * SPEED_DECAY
      if (newT >= 1.0) {
        newT = 1.0
        this.isAnimating = false
      }
      this.setState({ t: newT })
    }
    this.animateMe(dt)
  }

  public render({}, { targetX, startX, t, stops }: ITimelineState) {
    const delta = targetX - startX
    const x = startX + easing.easeInOutCubic(t) * delta
    return (
      <div class="timeline">
        <svg
          class="timeline-svg"
          viewBox={`${-TIMELINE_PADDING_X} 0 ${TIMELINE_VIEWBOX_WIDTH +
            2 * TIMELINE_PADDING_X} ${TIMELINE_VIEWBOX_HEIGHT}`}
        >
          <path d="M0 100 L1000 100 Z" class="svg-street" />
          <path d="M0 100 L1000 100 Z" class="svg-street-dash" />

          <BmwSVG x={x} />

          {stops.map(stop => {
            const x = this.minutesToSVG(stop.min)
            return stop.emoji ? (
              <text x={x} y="100" class={`grow small`}>
                {stop.emoji}
              </text>
            ) : (
              <circle cx={x} cy="100" r="15" class="svg-stops" />
            )
          })}

          {stops.map(stop => {
            if (stop.emotion === undefined) return
            const x = this.minutesToSVG(stop.min)

            return (
              <text x={x} y="150" class={`small`}>
                {(stop.emotion < 0.33333 && "😊") ||
                  (stop.emotion < 0.66666 && "😐") ||
                  "☹"}
              </text>
            )
          })}

          {stops.map(stop => {
            if (stop.plannedAction) {
              const x = this.minutesToSVG(stop.min)

              return (
                <text x={x} y="200" class={`small`}>
                  {stop.plannedAction}
                </text>
              )
            }
          })}
        </svg>
      </div>
    )
  }
}
