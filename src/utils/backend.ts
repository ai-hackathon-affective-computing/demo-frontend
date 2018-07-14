import { stringify } from "query-string"
import { get, put } from "improved/dist/ajax"

const lambdaBaseURL =
  "https://ngstvf71w5.execute-api.eu-west-1.amazonaws.com/dev"

export default class Backend {
  public static async getNextAction() {
    const qs = stringify({
      music_on: 1,
      step: 0
    })
    const url = `${lambdaBaseURL}/next_action?${qs}`
    return get(url)
  }

  public static async putS3(
    key: string,
    value: Blob | undefined
  ): Promise<boolean> {
    console.log(`Setting in S3: ${key}:${value ? value.toString() : ""}`)
    try {
      const bucketURL = await get(`${lambdaBaseURL}/camera/`)
      console.log(`bucketURL: ${JSON.stringify(bucketURL)}`)
      const result = await put(bucketURL.uploadUrl, value ? value : {}, false, {
        "Content-Type": "image/png",
        "x-amz-acl": "public-read"
      })
      console.log(result)
      return Boolean(result)
    } catch (e) {
      return false
    }
  }
}
