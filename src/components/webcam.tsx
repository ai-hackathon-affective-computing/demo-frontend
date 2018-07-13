import { h, Component } from "preact"
import "./webcam.scss"

interface IWebcamProps {
    class?: string
}

export default class Webcam extends Component<IWebcamProps> {
    public videoStream?: MediaStream // usermedia stream
    private video?: HTMLVideoElement // video html element

    private setupVideoRecorder() {
        const onSuccess: NavigatorUserMediaSuccessCallback = stream => {
            this.videoStream = new MediaStream(stream)
            this.video = document.querySelector("video") as HTMLVideoElement
            this.video.srcObject = this.videoStream
            this.video.onloadedmetadata = () => {
                this.video!.play()
            }
        }

        // request user permission
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(onSuccess)
            .catch(e => console.log(e))
    }

    public componentDidMount() {
        this.setupVideoRecorder()
    }

    public render() {
        return (
            <div class={this.props.class}>
                <video width="450" height="450"></video>
            </div>
        )
    }
}
