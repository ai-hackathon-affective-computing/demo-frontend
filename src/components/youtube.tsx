import { h, Component } from "preact"
// @ts-ignore
import YouTube from "react-youtube"
import "./youtube.scss"

interface IYoutubeProps {
  uri: string
}

export default class Youtube extends Component<IYoutubeProps> {

  public render({ uri }: IYoutubeProps) {
    // tslint:disable-next-line:no-any
    const opts: any = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    return (
      <div class="youtube">
      { uri &&
      <YouTube
          videoId="nGSOsEfJPO8"
          opts={opts}
          onReady={() => console.log("YT Ready")}
        />
      }
    </div>
    )
  }
}
