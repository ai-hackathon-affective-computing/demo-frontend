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
import backend from "../utils/backend"
import { MusicState, RouteState, IActionState } from "../utils/types"
import Webcam, { webcamSingleton } from "./webcam"
import Youtube from "./youtube"

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

const backendMapping =
  [
    { music: MusicState.None, route: RouteState.None },
    { music: MusicState.A, route: RouteState.A },
    { music: MusicState.A, route: RouteState.B },
    { music: MusicState.B, route: RouteState.A },
    { music: MusicState.B, route: RouteState.B },
    { music: MusicState.B, route: RouteState.B },

    { music: MusicState.None, route: RouteState.None },
  ]

let remainingActions = [
  1, 2, 3, 4, 5
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
  audioIndexToPlay?: number,
  actionState: IActionState
}

export default class Timeline extends Component<{}, ITimelineState> {
  // private keys: IKeyFrame[] = [{xStart: 0, xEnd: 1000}]
  // public state: ITimelineState = { keys: [{ xStart: 0, xEnd: 1000 }] }
  public state: ITimelineState = {
    startX: -200,
    targetX: -200,
    t: 0,
    stops: [],
    startStopButtonPressed: false,
    audioIndexToPlay: -1,
    actionState: {
      music: MusicState.None,
      step: 0, // index of current action in timeline
      route: RouteState.None
    }
  }

  private animationStep: number = 0
  private isBMWDriving: boolean = false
  private isAdvancing: boolean = false
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

    this.setState({ stops: newStops, audioIndexToPlay: plannedAction })
  }

  public componentDidMount() {

    window.addEventListener("keydown", evt => {
      switch (evt.keyCode) {
        case KeyCode.Space:
          if (this.state.startStopButtonPressed)
            this.advanceOneStep(this.animationStep)
          else
            this.onStartButtonPressed()
          break
      }
    })
    this.animateMe(0)
  }

  private async advanceOneStep(step: number) {
    if (step > 5 || this.isAdvancing)
      return

    this.isAdvancing = true

    setTimeout(() => {
      this.moveTo(12 * step)
    }, 0)

    if (step < 6) {
      setTimeout(() => {
        this.setMeta(12 * step)
      }, 0)
      if (step < 5) {
        const webCamResult = await webcamSingleton.takePicture()
      }
      const nextAction = await backend.getNextAction(this.state.actionState)
      if (step < 5) {
        if (remainingActions.indexOf(nextAction.action) === -1) {
          nextAction.action = remainingActions[Math.floor(Math.random() * remainingActions.length)]
        }
        remainingActions = remainingActions.filter(item => item !== nextAction.action)

        this.setMeta(12 * step, nextAction.env.happiness, nextAction.action)
      } else {
        this.setState({ audioIndexToPlay: 9 })
      }
      this.animationStep++
      this.isAdvancing = false

      const newActionState = this.state.actionState
      newActionState.step++
      newActionState.music = backendMapping[this.animationStep].music
      newActionState.route = backendMapping[this.animationStep].route
      this.setState({ actionState: newActionState })

    }
  }

  public moveTo(xInMinutes: number) {
    this.setState({ startX: this.state.targetX, targetX: this.minutesToSVG(xInMinutes), t: 0 })
    this.isBMWDriving = true
  }

  private triggerInitialAnimation() {
    this.isAdvancing = true

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
      this.isAdvancing = false
    }, 2000)
  }

  private onStartButtonPressed() {
    this.setState({ startStopButtonPressed: true })
    this.triggerInitialAnimation()
  }

  public async animateMe(previous: number) {
    const dt = await nextFrame()
    const delta = dt - previous

    if (this.isBMWDriving) {
      let newT = this.state.t + delta * SPEED_DECAY
      if (newT >= 1.0) {
        newT = 1.0
        this.isBMWDriving = false
      }
      this.setState({ t: newT })
    }
    this.animateMe(dt)
  }

  public render({ }, { targetX, startX, t, stops, startStopButtonPressed, audioIndexToPlay }: ITimelineState) {
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

        {
          startStopButtonPressed && audioIndexToPlay && audioIndexToPlay !== -1 && (
            // @ts-ignore
            <audio autoplay="true" src={`https://s3-eu-west-1.amazonaws.com/affective-computing/sounds/action_${audioIndexToPlay}.mp3`} />
          )
        }

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
                  (stop.emotion !== undefined) && (
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
                  (stop.plannedAction !== undefined) && (
                    <text x={x} y={200 + TIMELINE_BASELINE_Y_OFFSET} class={`timestop-bottom`}>{actionMapping[stop.plannedAction]}</text>
                  )
                }
              </g>)
            })
          }

        </svg>)}

        {
          <Youtube index={audioIndexToPlay}/>
        }
      </div>
    )
  }
}
