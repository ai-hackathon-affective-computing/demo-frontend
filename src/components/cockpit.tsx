import { h, Component } from "preact"
import "./cockpit.scss"
import Webcam from "./webcam"

interface ICockpitState {
  uploadFrameInterval: number
  fetchActionsInterval: number
}
export default class Cockpit extends Component<{}, ICockpitState> {
  public state: ICockpitState = {
    uploadFrameInterval: 5e3,
    fetchActionsInterval: 10e3
  }

  public render({}, { uploadFrameInterval }: ICockpitState) {
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
