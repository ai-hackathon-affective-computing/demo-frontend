import { h, Component } from "preact"
import "./timeline.scss"
import BmwSVG, { IKeyFrame } from "./bmw.svg"
import { nextFrame } from "improved/dist/browser"
import EASING from "./easing";

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
            this.moveTo(1000)
        }, 1000)

        setTimeout(() => {
            this.moveTo(3000)
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
            let newT = this.state.t + delta * 0.001
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
        const x = this.state.startX + EASING.easeInOutCubic(this.state.t) * delta
        return (
            <div class="timeline">
                <svg class="timeline-svg" viewBox="0 0 1000 200">
                    <BmwSVG x={x}></BmwSVG>
                </svg>
            </div>
        )
    }
}
