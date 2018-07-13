import { h, Component } from "preact"
import "./cockpit.scss"
import Webcam from "./webcam"

export default class Cockpit extends Component<{}, {}> {
    public render() {
        return (
            <div class="cockpit">
                <img src="./assets/cockpit-mirror.png" class="cockpit-image">
                </img>
                <Webcam></Webcam>
            </div>
        )
    }
}
