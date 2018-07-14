import { h, Component } from "preact"
import "./bmw.svg.scss"
import {
  TIMELINE_VIEWBOX_HEIGHT,
  TIMELINE_VIEWBOX_WIDTH
} from "./timeline.constants"

const BMW_VIEWBOX_WIDTH = 734.33
const BMW_VIEWBOX_HEIGHT = 629
const scale = 0.2
const invertedScale = 1.0 / scale
// tslint:disable:no-magic-numbers
const globalTransformString = `translate(
    ${BMW_VIEWBOX_WIDTH * 0.5 * scale}
    ${(TIMELINE_VIEWBOX_HEIGHT ) * 0.5 - BMW_VIEWBOX_HEIGHT * 0.5 * scale})
    scale(-${scale},${scale})`
// tslint:enable:no-magic-numbers

interface IBMWProps {
  x: number
}

const bmwSVG = (props: IBMWProps) => (
  <g class="bmw-svg" transform={globalTransformString}>
    <g transform={`translate(-${props.x * invertedScale} 0)`}>
      {/* <rect width={BMW_VIEWBOX_WIDTH} height={BMW_VIEWBOX_HEIGHT} style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" /> */}
      <path
        d="M714.39 307.93c5.25-.36 4.31-27.63 4.31-27.63l-5.94-1.7-38 4.69a3.61 3.61 0 0 0-3.16 3.67l.07 2.76a6.51 6.51 0 0 0 4.64 6.08l36 10.88z"
        strokeMiterlimit="10"
        stroke="#252626"
        fill="#801811"
      />
      <path
        d="M15 311.27s16.12-22.91 130.22-34.36l64.47-6.37s4.67 3 21.21 4.67c0 0 68.72-45.39 87-50.9 0 0 11-3.39 3.39-5.09 0 0 16.54-13.15 84.83-13.57s97.14 3 97.14 3 3.26-8.16 24.19-4.48a2.26 2.26 0 0 1 1.7 1.38c1 2.36 3.4 7.63 6.34 8.61 3.82 1.27 10.18 2.55 10.18 2.55s-2.12 4.24 1.28 5.09 73 27.14 91.62 36c0 0 7.21 3 10.6.42l44.54 7.21 18.62 1.73a8.6 8.6 0 0 1 6.54 4.06 5.75 5.75 0 0 1 .76 4l-.89 5.07-2.14-.78a11.36 11.36 0 0 0-5.2-.6l-36.14 4.25a4.49 4.49 0 0 0-3.94 5l.24 2.12a6.8 6.8 0 0 0 4.82 5.73l36 10.68a5 5 0 0 1 3.34 3.35l.87 3a10.59 10.59 0 0 0 1.48 3.11l7.38 10.63a14.65 14.65 0 0 1 2.57 7.1l.72 8.43a2 2 0 0 1-1.69 2.11c-1.34.16-3.26 1.22-5.31 5.08a106 106 0 0 0-9.75 29.69l-71.66 13.33a1 1 0 0 1-1.23-1c0-.82.05-2 0-3.51-.18-16.38-5.28-69-63.3-69 0 0-61.67-1.84-59.15 75.21 0 1.35.11 2.72.19 4.11l-94.16.42-243.48 1.7s.29-2.52.36-6.68c.32-18.91-5.24-75-61.24-76.4 0 0-69-2.9-60.23 77.56.18 1.66.4 3.36.65 5.1l-21.63-1.28s-17.82-1.27-31-8.9L5.67 383l1.69-39.5 4.25-5.5 4.24-8.49a8.73 8.73 0 0 0 8.06 4.25s26.29-4.68 44.09-17.4L63.78 310l-22.48-1.7-22.48 5.09s-6.37 1.27-3.82-2.12z"
        fill="#fff"
        strokeMiterlimit="10"
        stroke="#252626"
      />
      <path
        className="cls-4"
        d="M179.58 385.92l44.53-.43 170.52-3 91.29-3.1a17 17 0 0 0 13.64-7.68L566 270.12m-163.32 4.7s-17.91 16.66-8.05 107.71"
      />
      <path
        className="cls-4"
        d="M224.11 385.49c-4.55-53-2.51-76.44-.39-86.52a20 20 0 0 1 5.79-10.33l7.75-6.22m83.99-63.2s-33.4 12.62-94.48 51.22l-15.06.95"
      />
      <path
        d="M11.61 337.7s-.22-16.77.21-20.34 2.12-4.61 2.12-4.61 3 1.75 4.88.63c0 0-1.49 1.26-3 15.94z"
        fill="#4e4d4d"
        strokeMiterlimit="10"
        stroke="#252626"
      />
      <path
        className="cls-6"
        d="M23.27 356.44c-2.27-1.51-6-.79-9.61.42l2.4 25c10.18 4.45 14.21 3.6 14.21 3.6-1.7-20.33-3.18-26.46-7-29.02z"
      />
      <path className="cls-4" d="M7.36 343.5l.85 15.5s3-1.29 5.45-2.12" />
      <path
        className="cls-7"
        d="M26.59 360.89c-2.12 0-17.32-.42-17.32-.42l.64-2.33s9.19-3.61 12.44-2.13a8.46 8.46 0 0 1 4.24 4.88"
      />
      <path
        className="cls-4"
        d="M5.88 387.83c0-.64 1.06-11.88 9.33-10.61m-9.12 12.52l20.79-.22s3.6.22 3.39-4"
      />
      <path
        d="M58 394.82c-8.77-80.46 60.23-77.56 60.23-77.56 56 1.43 61.56 57.49 61.24 76.4l-19.45 8.17-88.22-4.67s-9.33-1.49-13.36.42zm458.6-.71c-2.52-77.05 59.15-75.21 59.15-75.21 58 0 63.12 52.62 63.3 69v3.51l-3.74-2.52-12.9-.89-90.91 8.2-6.65-1.84z"
        fill="#010202"
        stroke="#252626"
        strokeMiterlimit="10"
      />
      <path
        className="cls-7"
        d="M183.37 353.44l20.11 23.7a5.51 5.51 0 0 0 4.3 1.94l10.82-.23-22.5-22.51a14.88 14.88 0 0 0-11.21-4.34h-.91a.85.85 0 0 0-.61 1.44z"
      />
      <path className="cls-4" d="M545.63 216.68s61.51 20.36 103.5 41.56" />
      <circle className="cls-9" cx="576.6" cy="374.59" r="4" />
      <circle className="cls-7" cx="576.6" cy="374.59" r="51.23" />
      <circle className="cls-7" cx="576.6" cy="374.59" r="40.72" />
      <path
        className="cls-10"
        d="M576.6 333.86a40.73 40.73 0 1 0 40.72 40.73 40.73 40.73 0 0 0-40.72-40.73zm37 27.75l.51 1.54a.71.71 0 0 1-.41.88l-5.61 2.14c-1.86.81-4.06 1.66-6.47 2.46-7 2.34-13 3.36-13.38 2.28s5-3.87 12.08-6.21c2.4-.8 4.67-1.44 6.65-1.9l5.77-1.64a.69.69 0 0 1 .87.45zm-10.34-15.23l1.74 1.78a48.29 48.29 0 0 1 5.67 7.88l1.13 2.21a.5.5 0 0 1-.31.73c-2.84.66-14.46 3.53-21.3 7.66-7.88 4.75-7.19 3.36-7.19 3.36s-1.58.21 5.44-5.76c6.08-5.17 12.51-15.28 14-17.76a.48.48 0 0 1 .83-.1zm-4.42-4l1.31 1a.71.71 0 0 1 .17 1l-3.34 5c-1 1.74-2.35 3.71-3.85 5.75-4.38 6-8.67 10.27-9.6 9.6s1.88-6.07 6.26-12.05c1.5-2 3-3.88 4.33-5.39l3.76-4.69a.7.7 0 0 1 .97-.19zm-18.91 16.77c1.81-7.79 1-19.73.71-22.63a.5.5 0 0 1 .6-.52l2.45.4a47.69 47.69 0 0 1 9.25 3l2.23 1.1a.5.5 0 0 1 .18.77c-1.89 2.22-9.52 11.44-12.57 18.83-1 2.41-1.73 4-2.27 5.07a2.38 2.38 0 1 1-1.69-.44c.18-1.19.51-2.94 1.12-5.55zm.66 15.41a4 4 0 1 1-4-4 4 4 0 0 1 4.01 4.03zm-5.77-32.91l.26-6a.69.69 0 0 1 .7-.67h1.62a.69.69 0 0 1 .7.67l.26 6c.19 2 .3 4.38.3 6.91 0 7.41-.93 13.42-2.07 13.42s-2.07-6-2.07-13.42c.01-2.5.12-4.86.31-6.88zM558 340.49l2.23-1.1a47.38 47.38 0 0 1 9.24-3l2.46-.4a.49.49 0 0 1 .59.52c-.25 2.9-1.1 14.84.72 22.63 2.08 9 .94 7.86.94 7.86s-.29 1.56-3.8-7c-3-7.39-10.68-16.61-12.56-18.83a.49.49 0 0 1 .18-.68zm-5 2.88l1.31-1a.7.7 0 0 1 1 .13l3.76 4.69c1.34 1.51 2.83 3.35 4.32 5.39 4.38 6 7.19 11.37 6.26 12.05s-5.22-3.62-9.6-9.6c-1.49-2-2.8-4-3.84-5.75l-3.34-5a.71.71 0 0 1 .13-.91zm-11.68 14.88l1.13-2.21a48.29 48.29 0 0 1 5.67-7.88l1.74-1.78a.49.49 0 0 1 .79.06c1.53 2.48 7.95 12.59 14 17.76 2 1.68 3.27 2.88 4.11 3.72a2.45 2.45 0 0 1 .77-.4 2.38 2.38 0 1 1-1.61 3 2.21 2.21 0 0 1-.06-1.05c-1.07-.52-2.64-1.39-5-2.78-6.84-4.13-18.46-7-21.3-7.66a.5.5 0 0 1-.2-.78zm-2.29 4.9l.52-1.54a.69.69 0 0 1 .86-.45l5.77 1.64c2 .46 4.25 1.1 6.65 1.9 7 2.34 12.44 5.12 12.08 6.21s-6.36.06-13.39-2.28c-2.4-.8-4.6-1.65-6.46-2.46l-5.57-2.17a.71.71 0 0 1-.42-.85zm-.6 18.82l-.38-2.46a47.64 47.64 0 0 1 0-9.7l.37-2.46a.49.49 0 0 1 .67-.41c2.7 1.11 13.82 5.55 21.78 6.18 9.18.73 7.78 1.48 7.78 1.48s1.4.75-7.77 1.52c-8 .66-19.07 5.13-21.76 6.26a.49.49 0 0 1-.65-.38zm1.12 5.27l-.52-1.53a.7.7 0 0 1 .42-.88l5.61-2.14c1.86-.82 4.06-1.67 6.46-2.47 7-2.34 13-3.36 13.39-2.27s-5.05 3.86-12.08 6.2c-2.4.8-4.67 1.44-6.65 1.9l-5.77 1.65a.7.7 0 0 1-.82-.46zm10.68 15.9l-1.76-1.75a47.89 47.89 0 0 1-5.77-7.81l-1.16-2.2a.49.49 0 0 1 .3-.73c2.83-.7 14.41-3.72 21.2-7.93 2.25-1.4 3.79-2.27 4.86-2.81a2.1 2.1 0 0 1-.09-.61 2.38 2.38 0 1 1 2.37 2.38 2.32 2.32 0 0 1-1.25-.37c-.83.86-2.12 2.08-4.11 3.82-6 5.25-12.31 15.44-13.8 17.94a.49.49 0 0 1-.75.07zm4.08 3.3l-1.31-1a.71.71 0 0 1-.17-1l3.34-5c1-1.74 2.35-3.71 3.84-5.75 4.38-6 8.68-10.27 9.6-9.59s-1.88 6.06-6.26 12c-1.49 2-3 3.88-4.32 5.4l-3.76 4.68a.69.69 0 0 1-.92.26zM573.25 390c-1.8 7.79-.94 19.73-.69 22.63a.49.49 0 0 1-.59.52l-2.46-.39a48.26 48.26 0 0 1-9.24-2.95L558 408.7a.49.49 0 0 1-.19-.76c1.89-2.23 9.51-11.46 12.55-18.85 3.5-8.51 3.79-6.95 3.79-6.95s1.18-1.14-.9 7.86zm5.12 17.17l-.26 6a.7.7 0 0 1-.7.68h-1.62a.7.7 0 0 1-.7-.68l-.26-6c-.19-2-.3-4.38-.3-6.91 0-7.41.92-13.41 2.07-13.41s2.07 6 2.07 13.41c0 2.53-.11 4.89-.3 6.91zm16.77 1.53l-2.23 1.11a48.58 48.58 0 0 1-9.25 2.95l-2.46.39a.49.49 0 0 1-.59-.52c.25-2.9 1.11-14.84-.69-22.63-.6-2.58-.93-4.32-1.1-5.5a2.4 2.4 0 1 1 1.67-.51c.55 1.06 1.29 2.67 2.29 5.1 3 7.39 10.65 16.62 12.54 18.85a.49.49 0 0 1-.18.76zm5-3.22l-1.31 1a.69.69 0 0 1-1-.13l-3.76-4.68c-1.35-1.52-2.83-3.36-4.33-5.4-4.38-6-7.18-11.37-6.26-12s5.22 3.62 9.6 9.59c1.5 2 2.81 4 3.85 5.75l3.34 5a.71.71 0 0 1-.11.87zm11.43-14.1l-1.16 2.2a47.31 47.31 0 0 1-5.77 7.81l-1.76 1.75a.48.48 0 0 1-.78-.07c-1.5-2.5-7.79-12.69-13.81-17.94-6.94-6.06-5.36-5.83-5.36-5.83s-.68-1.44 7.14 3.42c6.79 4.21 18.37 7.23 21.2 7.93a.49.49 0 0 1 .32.73zm2.53-5.67l-.51 1.53a.71.71 0 0 1-.86.46l-5.73-1.65c-2-.46-4.25-1.1-6.65-1.9-7-2.34-12.44-5.12-12.08-6.2s6.35-.07 13.38 2.27c2.41.8 4.61 1.65 6.47 2.47l5.61 2.14a.7.7 0 0 1 .39.88zm.58-3.74a.49.49 0 0 1-.67.41c-2.69-1.13-13.79-5.6-21.76-6.26-2.63-.22-4.39-.44-5.57-.64a2.38 2.38 0 1 1 0-1.75c1.18-.2 2.93-.4 5.53-.61 8-.63 19.09-5.07 21.78-6.18a.49.49 0 0 1 .67.41l.37 2.46a46.94 46.94 0 0 1 0 9.7z"
      />
      <path
        d="M239.8 281.53c6.95-5.36 22.38-16.94 35.53-24.56l35.8-21 .08-.06c.27-.21 27.63-20.65 106.22-20.65 79 0 114.33 11.45 114.68 11.57h.12c10.9 2.68 39.73 11.88 42.11 22.17l.07.31c0 .78-.48 4.95-9.27 19.31l-162.51 4.68z"
        fill="#f2f2f1"
      />
      <path
        className="cls-7"
        d="M417.43 216.75c78.64 0 113.86 11.38 114.21 11.49h.23c14.81 3.64 39 12.57 41 21.05v.11c-.07.79-.86 4.92-8.62 17.7l-161.69 4.65h-.07l-158 8c7.85-5.93 20.51-15.13 31.55-21.53l35.71-21 .17-.1.14-.11c.07-.06 6.81-5.14 23.08-10.16 27.25-8.41 59.75-10.18 82.23-10.18m0-3c-80.23 0-107.14 21-107.14 21l-35.71 21c-17.8 10.31-39.44 27.6-39.44 27.6l167.54-8.45 163.38-4.7c11.68-18.93 9.81-21.43 9.81-21.43-3.1-13.46-43.22-23.29-43.22-23.29s-34.93-11.65-115.15-11.65z"
      />
      <circle className="cls-9" cx="117.44" cy="374.59" r="4" />
      <circle className="cls-7" cx="117.44" cy="374.59" r="51.23" />
      <circle className="cls-7" cx="117.44" cy="374.59" r="40.72" />
      <path
        className="cls-10"
        d="M117.44 333.86a40.73 40.73 0 1 0 40.73 40.73 40.73 40.73 0 0 0-40.73-40.73zm37 27.75l.51 1.54a.71.71 0 0 1-.42.88l-5.61 2.14c-1.86.81-4.06 1.66-6.46 2.46-7 2.34-13 3.36-13.38 2.28s5-3.87 12.07-6.21c2.4-.8 4.68-1.44 6.65-1.9l5.77-1.64a.7.7 0 0 1 .89.45zm-10.35-15.23l1.75 1.78a47.64 47.64 0 0 1 5.66 7.88l1.13 2.21a.49.49 0 0 1-.3.73c-2.84.66-14.47 3.53-21.31 7.66-7.89 4.75-7.19 3.32-7.19 3.32s-1.57.21 5.44-5.76c6.09-5.17 12.51-15.28 14-17.76a.48.48 0 0 1 .84-.06zm-4.41-4l1.3 1a.7.7 0 0 1 .17 1l-3.34 5c-1 1.74-2.34 3.71-3.84 5.75-4.38 6-8.68 10.27-9.6 9.6s1.88-6.07 6.26-12.05c1.49-2 3-3.88 4.32-5.39l3.76-4.69a.72.72 0 0 1 .99-.19zm-18.92 16.77c1.81-7.79 1-19.73.72-22.63a.49.49 0 0 1 .59-.52l2.46.4a47.6 47.6 0 0 1 9.24 3l2.23 1.1a.5.5 0 0 1 .18.77c-1.89 2.22-9.52 11.44-12.56 18.83-1 2.41-1.73 4-2.28 5.07a2.37 2.37 0 1 1-1.69-.44c.19-1.19.52-2.94 1.13-5.55zm.66 15.41a4 4 0 1 1-4-4 4 4 0 0 1 4.02 4.03zm-5.77-32.91l.26-6a.71.71 0 0 1 .7-.67h1.62a.71.71 0 0 1 .71.67l.26 6c.18 2 .29 4.38.29 6.91 0 7.41-.92 13.42-2.07 13.42s-2.07-6-2.07-13.42c.02-2.5.13-4.86.32-6.88zm-16.83-1.19l2.23-1.1a47.6 47.6 0 0 1 9.24-3l2.46-.4a.49.49 0 0 1 .59.52c-.24 2.9-1.09 14.84.72 22.63 2.09 9 .94 7.86.94 7.86s-.28 1.56-3.8-7c-3-7.39-10.67-16.61-12.56-18.83a.5.5 0 0 1 .2-.65zm-5 2.88l1.31-1a.72.72 0 0 1 1 .13l3.75 4.69c1.35 1.51 2.83 3.35 4.33 5.39 4.38 6 7.18 11.37 6.26 12.05s-5.22-3.62-9.6-9.6c-1.5-2-2.81-4-3.85-5.75l-3.34-5a.71.71 0 0 1 .2-.88zm-11.61 14.91l1.13-2.25a47.64 47.64 0 0 1 5.66-7.84l1.75-1.78a.48.48 0 0 1 .78.06c1.53 2.48 8 12.59 14 17.76 2 1.68 3.27 2.88 4.11 3.72a2.56 2.56 0 0 1 .77-.4 2.38 2.38 0 1 1-1.61 3 2.5 2.5 0 0 1-.06-1.05c-1.07-.52-2.64-1.39-5-2.78-6.84-4.13-18.47-7-21.31-7.66a.49.49 0 0 1-.22-.78zm-2.29 4.9l.51-1.54a.69.69 0 0 1 .86-.45l5.77 1.64c2 .46 4.25 1.1 6.66 1.9 7 2.34 12.43 5.12 12.07 6.21s-6.35.06-13.38-2.28c-2.4-.8-4.61-1.65-6.47-2.46l-5.6-2.17a.7.7 0 0 1-.42-.85zM79.31 382l-.38-2.46a47.64 47.64 0 0 1 0-9.7l.37-2.46a.48.48 0 0 1 .67-.41c2.69 1.11 13.81 5.55 21.78 6.18 9.18.73 7.78 1.48 7.78 1.48s1.4.75-7.78 1.52c-8 .66-19.06 5.13-21.75 6.26a.5.5 0 0 1-.69-.41zm1.12 5.27l-.51-1.53a.7.7 0 0 1 .42-.88l5.6-2.14c1.86-.82 4.07-1.67 6.47-2.47 7-2.34 13-3.36 13.38-2.27s-5 3.86-12.07 6.2c-2.41.8-4.68 1.44-6.66 1.9l-5.77 1.65a.71.71 0 0 1-.86-.49zm10.69 15.9l-1.77-1.75a48.48 48.48 0 0 1-5.77-7.81l-1.16-2.2a.5.5 0 0 1 .3-.73c2.83-.7 14.42-3.72 21.2-7.93 2.25-1.4 3.8-2.27 4.86-2.81a2.5 2.5 0 0 1-.09-.61 2.4 2.4 0 1 1 1.12 2c-.82.86-2.11 2.08-4.1 3.82-6 5.25-12.31 15.44-13.81 17.94a.48.48 0 0 1-.78.05zm4.07 3.3l-1.31-1a.71.71 0 0 1-.17-1l3.34-5c1-1.74 2.35-3.71 3.85-5.75 4.38-6 8.68-10.27 9.6-9.59s-1.88 6.06-6.26 12c-1.5 2-3 3.88-4.33 5.4l-3.75 4.68a.71.71 0 0 1-.97.23zM114.1 390c-1.81 7.79-.94 19.73-.69 22.63a.5.5 0 0 1-.6.52l-2.45-.39a48.13 48.13 0 0 1-9.25-2.95l-2.23-1.11a.48.48 0 0 1-.18-.76c1.88-2.23 9.5-11.46 12.54-18.85 3.5-8.51 3.79-6.95 3.79-6.95s1.15-1.14-.93 7.86zm5.12 17.17l-.26 6a.71.71 0 0 1-.71.68h-1.62a.71.71 0 0 1-.7-.68l-.26-6c-.19-2-.3-4.38-.3-6.91 0-7.41.93-13.41 2.07-13.41s2.07 6 2.07 13.41c0 2.53-.11 4.89-.29 6.91zM136 408.7l-2.23 1.11a48.13 48.13 0 0 1-9.25 2.95l-2.45.39a.5.5 0 0 1-.6-.52c.25-2.9 1.12-14.84-.69-22.63-.59-2.58-.92-4.32-1.09-5.5a2.39 2.39 0 1 1 1.67-.51c.54 1.06 1.28 2.67 2.28 5.1 3 7.39 10.66 16.62 12.54 18.85a.48.48 0 0 1-.18.76zm5-3.22l-1.3 1a.71.71 0 0 1-1-.13l-3.7-4.72a76.559 76.559 0 0 1-4.32-5.4c-4.38-6-7.19-11.37-6.26-12s5.22 3.62 9.6 9.59c1.5 2 2.8 4 3.84 5.75l3.34 5a.7.7 0 0 1-.2.91zm11.44-14.1l-1.16 2.2a48.48 48.48 0 0 1-5.77 7.81l-1.77 1.75a.48.48 0 0 1-.78-.07c-1.5-2.5-7.79-12.69-13.81-17.94-6.93-6.06-5.36-5.83-5.36-5.83s-.68-1.44 7.15 3.42c6.78 4.21 18.37 7.23 21.2 7.93a.5.5 0 0 1 .3.73zm2.53-5.67l-.51 1.53a.71.71 0 0 1-.87.46l-5.77-1.65c-2-.46-4.25-1.1-6.65-1.9-7-2.34-12.44-5.12-12.07-6.2s6.35-.07 13.38 2.27c2.4.8 4.6 1.65 6.46 2.47l5.61 2.14a.7.7 0 0 1 .45.88zm.58-3.74a.5.5 0 0 1-.68.41c-2.69-1.13-13.79-5.6-21.75-6.26-2.64-.22-4.4-.44-5.57-.64a2.38 2.38 0 1 1 0-1.75c1.17-.2 2.92-.4 5.52-.61 8-.63 19.09-5.07 21.78-6.18a.48.48 0 0 1 .67.41l.37 2.46a47.64 47.64 0 0 1 0 9.7z"
      />
      <path
        className="cls-4"
        d="M605.5 324.93l77.71-12a15.84 15.84 0 0 0 8.56-4.08 13.44 13.44 0 0 0 4-7.07"
      />
      <path
        d="M18.82 313.38c-1.28.42-3 15.94-3 15.94 1 4.47 8.06 4.43 8.06 4.43C39.46 333 68 316.36 68 316.36L63.78 310l-22.48-1.7z"
        fill="#fff"
        strokeMiterlimit="10"
        stroke="#252626"
      />
      <path
        className="cls-4"
        d="M517.86 371.92l-19.15.68M18.18 318.48c1.27 0 8.91-1.49 8.91-1.49s3.26 2.22 6.19 14.58m-3-15.64s5.29-1.06 6.14-1.06h19.94"
      />
      <path
        className="cls-7"
        d="M272.81 277s-.16 3.26.94 3.21l-33.09 1.55 20.78-16.34 25.45-.63c0 .62.08 1.19.11 1.74a9 9 0 0 1-7.59 9.44l-6.6 1-11.43 1.79c-2.62-2.78 1.33-4 1.33-4"
      />
      <path className="cls-4" d="M36.65 330.62l-.23-15.75" />
      <path
        className="cls-1"
        d="M263.11 274.21c-.14-.81-.42-2.47-.69-4.45a10.29 10.29 0 0 1 6-10.81l6.08-1.49h1.36c4.57 0 7.72 1 9.37 3.05a5.47 5.47 0 0 1 1.21 3.86l-20.66 1.39a1.55 1.55 0 0 0 .11 3.1h.11l14.11-1.09c-1.51 1.23-5.75 3.64-17 6.44z"
      />
      <path
        className="cls-7"
        d="M275.87 257.94c4.31 0 7.41 1 8.95 2.84a5 5 0 0 1 1.14 3.1l-20.21 1.36a2.05 2.05 0 0 0 .14 4.1h.11l12.19-.93c-2.22 1.26-6.53 3.13-14.72 5.19-.15-.89-.37-2.29-.6-3.9a9.81 9.81 0 0 1 5.63-10.25l6-1.47h1.35m0-1h-1.49l-6.16 1.52a10.76 10.76 0 0 0-6.3 11.34c.4 2.84.79 5 .79 5 17.18-4.2 18.67-7.67 18.67-7.67L266 268.34h-.08a1.06 1.06 0 0 1-1.06-1 1 1 0 0 1 1-1.05l21.07-1.42s1.6-7.88-11-7.88z"
      />
      <path
        className="cls-4"
        d="M224.54 274.82c-2.26 1.24-12.83 6.05-12.83 6.05s-99.15-1.42-170.41 27.43"
      />
      <path
        className="cls-6"
        d="M387.14 274.71s19.94-57.34 20.22-59.87l21.77.28c0 1.68-9.47 58.39-9.47 58.39zm117.99-3.74l4.78-49.77 5.19.9-2.97 48.68-7 .19z"
      />
      <path
        className="cls-4"
        d="M503.22 208.62a158.58 158.58 0 0 1 32.23 5.51m-181.22 79.45c7-.57 26.73-2.46 26.73-2.46l.31.08c3.07.73 3.75 4.33 1.12 6l-.22.14-27.66.89a2.43 2.43 0 0 1-2.66-2.49 2.5 2.5 0 0 1 2.38-2.16z"
      />
      <path
        className="cls-4"
        d="M387.15 293.43c.23 3.54-8.22 7.5-18.93 7.7-11 .21-20.32-3.37-18.41-6.46 2.29-3.7 6.86-5.66 17.55-6.37s19.55 1.59 19.79 5.13z"
      />
      <path
        stroke="#fff"
        fill="none"
        strokeMiterlimit="10"
        d="M403.68 272.52l13.71-55.99"
      />
      <path
        className="cls-4"
        d="M506.93 287.64c7-.57 26.73-2.46 26.73-2.46l.31.08c3.07.74 3.75 4.33 1.12 6l-.22.14-27.65.89a2.42 2.42 0 0 1-2.66-2.49 2.49 2.49 0 0 1 2.37-2.16z"
      />
      <path
        className="cls-4"
        d="M539.85 287.49c.23 3.54-8.22 7.51-18.93 7.7-11 .21-20.32-3.37-18.41-6.46 2.29-3.7 6.86-5.66 17.55-6.37s19.55 1.64 19.79 5.13z"
      />
      <path
        className="cls-7"
        d="M515.52 224.1s41.14 8.13 51 18.27a5.94 5.94 0 0 1 1 6.67l-9.11 19.17 7.63-.42 7.64-17.18s1.65-16.76-58.16-26.51zM727 344.36c-1.34.16-3.26 1.22-5.31 5.08a106 106 0 0 0-9.75 29.69 10.24 10.24 0 0 0 8.86-5.13l2.15-3.75a23.83 23.83 0 0 0 3.17-11.88l1.06-2.55v-8.9l-.1-1.18.78-1.72a1.81 1.81 0 0 1-.86.34zm1.66-2.11l-.8 1.75a2 2 0 0 0 .8-1.75z"
      />
    </g>
  </g>
)

export default bmwSVG
