import { h, Component } from "preact"
import "./webcam.scss"
import backend from "../utils/backend"

const hiddenCanvasID = "hiddenCanvas"

interface IWebcamProps {
  class?: string
  uploadFrameInterval: number
  imageDimensions: { width: number; height: number }
}

interface IWebcamState {
  uploadFrameTimer: number
}

export default class Webcam extends Component<IWebcamProps, IWebcamState> {
  public videoStream?: MediaStream // usermedia stream
  private video?: HTMLVideoElement // video html element
  private canvas?: HTMLCanvasElement
  private ctx?: CanvasRenderingContext2D | null

  private async setupVideoRecorder() {
    // request user permission
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      this.videoStream = new MediaStream(stream)
      this.video = document.querySelector("video") as HTMLVideoElement
      this.video.srcObject = this.videoStream
      this.video.onloadedmetadata = async () => this.video!.play()
    } catch (e) {
      console.error(e)
    }
  }

  private err(s: string) {
    console.error(`${s} not available`)
    return false
  }

  private setupFrameUploader() {
    this.canvas = document.querySelector(
      `#${hiddenCanvasID}`
    ) as HTMLCanvasElement
    if (!this.canvas) return this.err("Canvas")
    this.ctx = this.canvas.getContext("2d")

    const uploadFrameTimer = setInterval(
      async () => this.takePicture(),
      this.props.uploadFrameInterval
    )
    this.setState({ uploadFrameTimer })
  }

  public componentDidMount() {
    this.setupVideoRecorder()
    this.setupFrameUploader()
  }

  public async takePicture(): Promise<boolean> {
    const { canvas, ctx, video } = this
    if (!canvas) return this.err("Canvas")
    if (!ctx) return this.err("2DContext")
    if (!video) return this.err("Video")

    const { width, height } = this.props.imageDimensions
    ctx.drawImage(video, 0, 0, width, height, 0, 0, width, height)

    const blob = await this.getBlob(canvas)
    if (!blob) return this.err("Canvas Blob")
    await backend.putS3(`photos/${Date.now()}`, blob)

    return true
  }

  private async getBlob(canvas: HTMLCanvasElement) {
    return new Promise<Blob | null>(res => canvas.toBlob(res))
  }

  public render(props: IWebcamProps) {
    const { width, height } = props.imageDimensions
    return (
      <div class={props.class}>
        <video width={width} height={height} />
        <canvas id={hiddenCanvasID} width={width} height={height} />
      </div>
    )
  }
}
