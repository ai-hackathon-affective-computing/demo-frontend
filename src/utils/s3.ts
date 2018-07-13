import { post, get } from "improved/dist/ajax"
const bucketURL = ""

export default class {
  // tslint:disable-next-line:no-any
  public static async write(key: string, value: Blob | undefined): Promise<boolean> {
    console.log(`Setting in S3: ${key}:${value ? value.toString() : ""}`)
    try {
      const result = await post(`${bucketURL}${key}`, value ? value : {}, false)
      console.log(result)
      return Boolean(result)
    } catch (e) {
      return false
    }
  }

  public static async read(key: string): Promise<Response> {
    return get(`${bucketURL}${key}`, {}, true)
  }
}
