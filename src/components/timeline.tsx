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
  ROUTE_A = "🌄",
  ROUTE_BEACH = "🌇"
}

class TimelineStop {
  constructor(
    public min: number,
    public emoji?: string,
    public emotion?: number,
    public plannedAction?: PlannedAction
  ) { }
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
    startX: -200,
    targetX: -200,
    t: 0,
    stops: [
      new TimelineStop(0, "🏡"),
      // new TimelineStop(15, "📍"),
      // new TimelineStop(30, "📍"),
      // new TimelineStop(45, "📍"),
      new TimelineStop(60, "🏁")
    ]
  }
  private isAnimating: boolean = false
  private minutesToSVG(xInMinutes: number) {
    return (xInMinutes / 60) * TIMELINE_VIEWBOX_WIDTH
  }

  public setMeta(xInMinutes: number, emotion?: number, plannedAction?: PlannedAction) {
    const newStops = this.state.stops
    let index = newStops.findIndex(s => s.min === xInMinutes)

    if (index === -1) {
      index = newStops.push(new TimelineStop(xInMinutes, "📍")) - 1
    }

    emotion && (newStops[index].emotion = emotion)
    plannedAction && (newStops[index].plannedAction = plannedAction)

    this.setState({stops: newStops})
  }

  public componentDidMount() {
    this.animateMe(0)

    // TESTING
    setTimeout(() => {
      this.moveTo(0)
    }, 0)

    // setTimeout(() => {
    //   this.setMeta(15, undefined, PlannedAction.MUSIC_A)
    // }, 1000)

    // setTimeout(() => {
    //   this.moveTo(45)
    // }, 3000)
  }

  public moveTo(xInMinutes: number) {
    this.setState({ startX: this.state.targetX, targetX: this.minutesToSVG(xInMinutes), t: 0 })
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

  public render({ }, { targetX, startX, t, stops }: ITimelineState) {
    const delta = targetX - startX
    const bmwXPosition = startX + easing.easeInOutCubic(t) * delta
    const roadPath = `M${-TIMELINE_PADDING_X} 100 L${TIMELINE_VIEWBOX_WIDTH + TIMELINE_PADDING_X} 100 Z`

    const EMOTION_THRESHOLD_SAD = 0.3333
    const EMOTION_THRESHOLD_NEUTRAL = 0.6666
    return (
      <div class="timeline">
        <svg
          class="timeline-svg"
          viewBox={`${-TIMELINE_PADDING_X} 0 ${TIMELINE_VIEWBOX_WIDTH +
            2 * TIMELINE_PADDING_X} ${TIMELINE_VIEWBOX_HEIGHT}`}
        >
          <path d={roadPath} class="svg-street" />
          <path d={roadPath} class="svg-street-dash" />

          <BmwSVG x={bmwXPosition} />

          {
            stops.map(stop => {
              const x = this.minutesToSVG(stop.min)
              const isBig = Math.abs(bmwXPosition - x) < 50
              const emojiPosition = isBig ? 56 : 73
              return (<g> {stop.emoji ? (
                <text x={x} y={emojiPosition} class={`small ${isBig ? "grow" : ""}`}>{stop.emoji}</text>
              ) : (
                  <circle cx={x} cy="100" r="15" class={`svg-stops ${isBig ? "grow-svg" : ""}`} />
                )}

                {
                  stop.emotion && (
                    <text x={x} y="150" class={`small`}>
                      {(stop.emotion < EMOTION_THRESHOLD_SAD && "😕") ||
                        (stop.emotion < EMOTION_THRESHOLD_NEUTRAL && "😐") ||
                        "😊"}
                    </text>
                  )
                }

                {
                  stop.plannedAction && (
                    <text x={x} y="200" class={`small`}>{stop.plannedAction}</text>
                  )
                }
              </g>)
            })
          }

        </svg>
      </div>
    )
  }
}
