import { get, put } from "improved/dist/ajax"

const lambdaURL =
  "https://ngstvf71w5.execute-api.eu-west-1.amazonaws.com/dev/camera/"

export default class {
  // tslint:disable-next-line:no-any
  public static async write(
    key: string,
    value: Blob | undefined
  ): Promise<boolean> {
    console.log(`Setting in S3: ${key}:${value ? value.toString() : ""}`)
    try {
      const bucketURL = await get(lambdaURL)
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
