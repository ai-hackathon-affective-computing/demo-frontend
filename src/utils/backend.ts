import { stringify } from "query-string"
import { get, put } from "improved/dist/ajax"
import { IActionState } from "./types"

const lambdaBaseURL =
  "https://l1zp6t6k1j.execute-api.eu-west-1.amazonaws.com/dev"

export default class Backend {
  public static lastPersonId: number

  public static async getNextAction(state: IActionState) {
    const entireState = {
      ...state,
      personId: Backend.lastPersonId
    }

    const qs = stringify(entireState)
    const url = `${lambdaBaseURL}/next_action?${qs}`
    return get(url)
  }

  public static async putS3(
    key: string,
    value: Blob | undefined
  ): Promise<boolean> {
    // console.log(`Setting in S3: ${key}:${value ? value.toString() : "###"}`)
    try {
      const { uploadUrl, personId } = await get(`${lambdaBaseURL}/camera/`)

      // shame
      Backend.lastPersonId = personId

      //console.log(`bucketURL: ${JSON.stringify(bucketURL)}`)
      const result = await put(
        uploadUrl, value ? value : {}, false, {
        "Content-Type": "image/png",
        "x-amz-acl": "public-read"
      })
      //console.log(result)
      return Boolean(result)
    } catch (e) {
      return false
    }
  }
}
