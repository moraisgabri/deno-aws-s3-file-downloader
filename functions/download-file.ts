import { createWriteStream } from "node:fs";
import { OUTPUT } from "../utils/constants.ts";
import { s3 } from "../utils/config.ts";
import { DIRNAME } from "../utils/constants.ts";
import { S3_BUCKET } from "../utils/constants.ts";

export function downloadFile(s3Path: string, fname: string): Promise<string> {
  const params = {
    Bucket: S3_BUCKET,
    Key: s3Path,
  };

  const localFilePath = `${DIRNAME}/../${OUTPUT}/${fname}`;

  const file = createWriteStream(localFilePath);

  return new Promise((resolve, reject) => {
    s3.getObject(params)
      .createReadStream()
      .on("end", () => resolve(localFilePath))
      .on("error", (err: Error) => {
        reject(err);
      })
      .pipe(file);
  });
}
