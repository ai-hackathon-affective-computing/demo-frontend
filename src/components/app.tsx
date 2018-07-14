import { h, Component } from "preact"
import "preact/debug"
import "./app.scss"
import Cockpit from "./cockpit"
import Timeline from "./timeline"
import Spotify from "./spotify"
import backend from "../utils/backend"
import { MusicState, RouteState, IActionState } from "../utils/types"

interface IAppState {
  uploadFrameInterval: number
  fetchActionsInterval: number
  actionState: IActionState
}
export default class App extends Component<{}, {}> {
  public state: IAppState = {
    uploadFrameInterval: 5e3,
    fetchActionsInterval: 10e3,
    actionState: {
      music: MusicState.None,
      step: 0, // index of current action in timeline
      route: RouteState.None
    }
  }

  public componentDidMount() {
    setInterval(async () => {
      // #TODO do something with that
      const nextAction = await backend.getNextAction(this.state.actionState)
      console.log(`Next Action: ${JSON.stringify(nextAction)}`)
    }, this.state.fetchActionsInterval)
  }

  public render({}, { uploadFrameInterval }: IAppState) {
    return (
      <div class="main-container">
        <Cockpit uploadFrameInterval={uploadFrameInterval} />
        <Timeline />
        <Spotify />
      </div>
    )
  }
}
