import AWS from "npm:aws-sdk@2.858.0";
import "https://deno.land/x/dotenv/load.ts";

AWS.config.update({
  region: Deno.env.get("AWS_REGION"),
  accessKeyId: Deno.env.get("AWS_ACCESS_KEY_ID"),
  secretAccessKey: Deno.env.get("AWS_SECRET_ACCESS_KEY"),
});

export const s3: AWS.S3 = new AWS.S3();
