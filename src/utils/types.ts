export const enum MusicState {
  A = 1,
  B = 2,
  None = 0
}

export const enum RouteState {
  A = 1,
  B = 2,
  None = 0
}

export interface IActionState {
  music: MusicState
  step: number
  route: RouteState
}
