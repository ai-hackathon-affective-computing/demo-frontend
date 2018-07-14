import { h, Component } from "preact"
import "preact/debug"
import "./app.scss"
import Cockpit from "./cockpit"
import Timeline from "./timeline"
import Spotify from "./spotify"
import { MusicState, RouteState, IActionState } from "../utils/types"

interface IAppState {
  uploadFrameInterval: number
  fetchActionsInterval: number
}
export default class App extends Component<{}, {}> {
  public state: IAppState = {
    uploadFrameInterval: 1e3,
    fetchActionsInterval: 10e3,
  }

  public componentDidMount() {
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
