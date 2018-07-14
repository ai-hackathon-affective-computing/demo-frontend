import { h, Component } from "preact"
import "./cockpit.scss"
import Webcam from "./webcam"

interface ICockpitProps {
  uploadFrameInterval: number
}
export default class Cockpit extends Component<ICockpitProps> {
  public render({ uploadFrameInterval }: ICockpitProps) {
    return (
      <div class="cockpit">
        <img class="overlap cockpit-image" src="./assets/cockpit-mirror.png" />
        <Webcam
          uploadFrameInterval={uploadFrameInterval}
          imageDimensions={{ width: 640, height: 480 }}
          class="overlap cockpit-video"
        />
      </div>
    )
  }
}
