import { h, Component } from "preact"
import "./timeline.scss"
import BmwSVG from "./bmw.svg"
import { nextFrame } from "improved/dist/browser"
import easing from "./easing"
import {
  TIMELINE_VIEWBOX_HEIGHT,
  TIMELINE_VIEWBOX_WIDTH,
  TIMELINE_PADDING_X,
  TIMELINE_BASELINE_Y_OFFSET
} from "./timeline.constants"
import KeyCode from "../utils/keycode"

const SPEED_DECAY = 0.001

const actionMapping =
  [
    "🛑(🔇)",
    "🌴(🏄🏄)",   // Beach --> Bechboys
    "🌇(🔥🌞)",          // City --> Summer In The City
    "🌄(👩‍🎤🐟)",          // Mountain --> Helene Fisher
    "🌅(🎹⚡)",          // Lake --> House
    "🌲(💀🎸)"           // Forest --> Death Metal
  ]

class TimelineStop {
  constructor(
    public min: number,
    public emoji: string,
    public emotion?: number,
    public plannedAction?: number
  ) { }
}
interface ITimelineState {
  startX: number
  targetX: number
  t: number
  stops: TimelineStop[]
  startStopButtonPressed: boolean
}

export default class Timeline extends Component<{}, ITimelineState> {
  // private keys: IKeyFrame[] = [{xStart: 0, xEnd: 1000}]
  // public state: ITimelineState = { keys: [{ xStart: 0, xEnd: 1000 }] }
  public state: ITimelineState = {
    startX: -200,
    targetX: -200,
    t: 0,
    stops: [],
    startStopButtonPressed: false
  }

  private animationStep: number = 0
  private isAnimating: boolean = false
  private minutesToSVG(xInMinutes: number) {
    return (xInMinutes / 60) * TIMELINE_VIEWBOX_WIDTH
  }

  public setMeta(xInMinutes: number, emotion?: number, plannedAction?: number) {
    const newStops = this.state.stops
    let index = newStops.findIndex(s => s.min === xInMinutes)

    if (index === -1) {
      index = newStops.push(new TimelineStop(xInMinutes, "📍")) - 1
    }

    emotion && (newStops[index].emotion = emotion)
    plannedAction && (newStops[index].plannedAction = plannedAction)

    this.setState({ stops: newStops })
  }

  public componentDidMount() {
    window.addEventListener("keydown", evt => {
      switch (evt.keyCode) {
        case KeyCode.Space:
          if (this.state.startStopButtonPressed)
            this.mockAnimation(this.animationStep++)
          else
            this.onStartButtonPressed()
          break
      }
    })

    this.animateMe(0)
  }

  private mockAnimation(step: number) {
    console.log(`mockAnimation = ${step}`)
    setTimeout(() => {
      this.moveTo(15 * step)
    }, 0)

    setTimeout(() => {
      this.setMeta(15 * step)
    }, 0

    setTimeout(() => {
        this.setMeta(15 * step, Math.random(), step + 1)
      }, 2000)
  }

  public moveTo(xInMinutes: number) {
    this.setState({ startX: this.state.targetX, targetX: this.minutesToSVG(xInMinutes), t: 0 })
    this.isAnimating = true
  }

  private onStartButtonPressed() {
    this.setState({ startStopButtonPressed: true })

    setTimeout(() => {
      this.setState({ stops: [new TimelineStop(0, "🏡")] })
    }, 0)

    setTimeout(() => {
      const newStops = this.state.stops
      newStops.push(new TimelineStop(60, "🏁"))
      this.setState({ stops: newStops })
    }, 1000)

    setTimeout(() => {
      this.moveTo(0)
    }, 2000)
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

  public render({ }, { targetX, startX, t, stops, startStopButtonPressed }: ITimelineState) {
    const delta = targetX - startX
    const bmwXPosition = startX + easing.easeInOutCubic(t) * delta
    const roadPath = `M${-TIMELINE_PADDING_X} ${100 + TIMELINE_BASELINE_Y_OFFSET} L${TIMELINE_VIEWBOX_WIDTH + TIMELINE_PADDING_X} ${100 + TIMELINE_BASELINE_Y_OFFSET} Z`

    const EMOTION_THRESHOLD_SAD = 0.3333
    const EMOTION_THRESHOLD_NEUTRAL = 0.6666
    return (
      <div class="timeline">
        {!startStopButtonPressed && (
          <img class="starstopbutton" src="./assets/startstopbutton.png" onClick={() => this.onStartButtonPressed()} />
        )}
        {startStopButtonPressed && (<svg
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
              const emojiPosition = (isBig ? 56 : 73) + TIMELINE_BASELINE_Y_OFFSET
              return (<g>
                <text x={x} y={emojiPosition} class={`timestop-top ${isBig ? "grow" : ""}`}>{stop.emoji}</text>

                {
                  stop.emotion && (
                    <text
                      x={x}
                      y={150 + TIMELINE_BASELINE_Y_OFFSET}
                      class={`timestop-bottom`}>

                      {(stop.emotion < EMOTION_THRESHOLD_SAD && "😕") ||
                        (stop.emotion < EMOTION_THRESHOLD_NEUTRAL && "😐") ||
                        "😊"}
                    </text>
                  )
                }

                {
                  stop.plannedAction && (
                    <text x={x} y={200 + TIMELINE_BASELINE_Y_OFFSET} class={`timestop-bottom`}>{actionMapping[stop.plannedAction]}</text>
                  )
                }
              </g>)
            })
          }

        </svg>)}
      </div>
    )
  }
}
