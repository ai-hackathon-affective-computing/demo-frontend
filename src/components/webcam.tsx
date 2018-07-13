import { h, Component } from "preact"
import "./webcam.scss"
import s3 from "../utils/s3"

const hiddenCanvasID = "hiddenCanvas"

// tslint:disable-next-line:no-magic-numbers
const imageDimensions = [ 512, 512 ]

interface IWebcamProps {
  class?: string
}

export default class Webcam extends Component<IWebcamProps> {
  public videoStream?: MediaStream // usermedia stream
  private video?: HTMLVideoElement // video html element
  private canvas?: HTMLCanvasElement

  private async setupVideoRecorder() {
    // request user permission
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      this.videoStream = new MediaStream(stream)
      this.video = document.querySelector("video") as HTMLVideoElement
      this.video.srcObject = this.videoStream
      this.video.onloadedmetadata = () => this.video!.play()
    } catch (e) {
      console.error(e)
    }
  }

  public componentDidMount() {
    this.setupVideoRecorder()
  }

  public async takePicture(): Promise<boolean> {
    const err = (s: string) => {
      console.error(`${s} not available`)
      return false
    }

    if (!this.videoStream) return err("video stream")
    if (!this.video) return err("video")

    this.canvas = document.querySelector(`#${hiddenCanvasID}`)as HTMLCanvasElement
    const { canvas } = this
    if (!canvas) return err("hidden canvas")

    const ctx = canvas.getContext("2d")
    if (!ctx) return err("canvas' 2DContext")

    const [ x, y ] = imageDimensions
    ctx.drawImage(this.video, 0, 0, x, y, 0, 0, x, y)
    const blob = await this.getBlob(canvas)

    if (!blob) return err("video frame blob")
    await s3.write(`photos/${Date.now()}`, blob)

    return true
  }

  private async getBlob(canvas: HTMLCanvasElement) {
    return new Promise<Blob | null>(res => canvas.toBlob(res))
  }

  public render(props: IWebcamProps) {
    return (
      <div class={props.class}>
        <video width="450" height="450"></video>
        <canvas id={hiddenCanvasID} />
      </div>
    )
  }
}
