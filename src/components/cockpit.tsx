import { h, Component } from "preact"
import "./cockpit.scss"
import Webcam from "./webcam"
import backend from "../utils/backend"

interface ICockpitState {
  uploadFrameInterval: number
  fetchActionsInterval: number
}
export default class Cockpit extends Component<{}, ICockpitState> {
  public state: ICockpitState = {
    uploadFrameInterval: 5e3,
    fetchActionsInterval: 10e3
  }

  public componentDidMount() {
    setInterval(async () => {
      // #TODO do something with that
      const nextAction = await backend.getNextAction()
      console.log(`Next Action: ${JSON.stringify(nextAction)}`)
    }, this.state.fetchActionsInterval)
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
