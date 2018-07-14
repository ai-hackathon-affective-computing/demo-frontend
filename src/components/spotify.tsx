import { h, Component } from "preact"

const uri = "spotify:album:2GV8iJIzB2Eu8m1FKxYh8u"

export default class Spotify extends Component<{}, {}> {
  public render() {
    return <div />
    // return <div>
    //    /*<iframe
    //     title="Spotify"
    //     className="SpotifyPlayer"
    //     src={`https://embed.spotify.com/?uri=${uri}`}
    //     width={400}
    //     height={400}
    //     frameBorder="0"
    //     allow="encrypted-media"
    //     allowtransparency="true"
    //   />
    // </div>
  }
}
