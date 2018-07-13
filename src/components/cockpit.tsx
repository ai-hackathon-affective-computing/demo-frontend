import { h, Component } from "preact"
import "./cockpit.scss"
import Webcam from "./webcam"

export default class Cockpit extends Component<{}, {}> {
    public render() {
        return (
            <div class="cockpit">
                <img class="overlap cockpit-image" src="./assets/cockpit-mirror.png"  />
                <Webcam class="overlap cockpit-video"></Webcam>
            </div>
        )
    }
}
