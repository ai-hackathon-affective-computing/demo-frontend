import { h, Component } from "preact"
// @ts-ignore
import YouTube from "react-youtube"
import "./youtube.scss"

interface IYoutubeProps {
  index?: number
}

export default class Youtube extends Component<IYoutubeProps> {
  private uris: string[] = [
    "", // 0 nothing
    "apBWI6xrbLY", // 1 beach boys
    "U5bUmx-hk-c", // 2 summer in the city
    "haECT-SerHk", // 3 helene fischer
    "KvRVky0r7YM", // 4 house
    "nGSOsEfJPO8", // 5 black metal
    "", // 6
    "", // 7
    "", // 8
    "" // 9
  ]

  public render({ index }: IYoutubeProps) {
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
      { index &&
      <YouTube
          videoId={this.uris[index]}
          opts={opts}
          onReady={() => console.log(`YT Ready ${index}`)}
        />
      }
    </div>
    )
  }
}
