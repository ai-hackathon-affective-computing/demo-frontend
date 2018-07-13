import { h, Component } from "preact"
import "./timeline.scss"
import BmwSVG from "./bmw.svg"
import { nextFrame } from "improved/dist/browser"
import easing from "./easing"
import { TIMELINE_VIEWBOX_HEIGHT, TIMELINE_VIEWBOX_WIDTH, TIMELINE_PADDING_X } from "./timeline.constants"

const SPEED_DECAY = 0.001

interface ITimelineState {
    startX: number
    targetX: number
    t: number
}

export default class Timeline extends Component<{}, ITimelineState> {

    // private keys: IKeyFrame[] = [{xStart: 0, xEnd: 1000}]
    // public state: ITimelineState = { keys: [{ xStart: 0, xEnd: 1000 }] }
    public state: ITimelineState = { startX: 0, targetX: 0, t: 0 }
    private isAnimating: boolean = false

    public componentDidMount() {
        this.animateMe(0)

        setTimeout(() => {
            this.moveTo(500)
        }, 1000)

        setTimeout(() => {
            this.moveTo(750)
        }, 3000)
    }

    public moveTo(x: number) {
        this.setState({ startX: this.state.targetX, targetX: x, t: 0 })
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

    public render() {
        const delta = this.state.targetX - this.state.startX
        const x = this.state.startX + easing.easeInOutCubic(this.state.t) * delta
        return (
            <div class="timeline">
                <svg class="timeline-svg" viewBox={`${-TIMELINE_PADDING_X} 0 ${TIMELINE_VIEWBOX_WIDTH + 2 * TIMELINE_PADDING_X} ${TIMELINE_VIEWBOX_HEIGHT}`}>
                    <path d="M0 100 L1000 100 Z" class="svg-street" />
                    <path d="M0 100 L1000 100 Z" class="svg-street-dash" />

                    <BmwSVG x={x}></BmwSVG>

                    <circle cx="0" cy="100" r="15" class="svg-stops" />
                    <circle cx="250" cy="100" r="15" class="svg-stops" />
                    <circle cx="500" cy="100" r="15" class="svg-stops" />
                    <circle cx="750" cy="100" r="15" class="svg-stops" />
                    <circle cx="1000" cy="100" r="15" class="svg-stops" />

                    <text x="0" y="100" class="small">🏡</text>
                    <text x="1000" y="100" class="small">📍</text>

                </svg>
            </div>
        )
    }
}
