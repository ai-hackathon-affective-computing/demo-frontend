import { h, Component } from "preact"
import "./spotify.scss"

const uri = "spotify:album:2GV8iJIzB2Eu8m1FKxYh8u"

interface ISpotifyProps {
  uri?: string
}

export default class Spotify extends Component<ISpotifyProps, {}> {
  public render() {
    return <div />
    /*return <div class="spotify">
       <iframe
        id= {"spotify-widget"}
        title="Spotify"
        className="SpotifyPlayer"
        src={`https://embed.spotify.com/?uri=${uri}`}
        width={400}
        height={400}
        frameBorder="0"
        // @ts-ignore
        allow="encrypted-media"
        allowtransparency="true"
      />
    </div>*/
  }
}
