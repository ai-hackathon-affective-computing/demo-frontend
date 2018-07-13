import { h, Component } from "preact"
import "./app.scss"
import Cockpit from "./cockpit"
import Timeline from "./timeline"

export default class App extends Component<{}, {}> {
  public render() {
    return (
      <div class="main-container">
        <Cockpit></Cockpit>
        <Timeline></Timeline>
      </div>
    )
  }
}
