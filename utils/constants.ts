import * as path from "https://deno.land/std@0.138.0/path/mod.ts";
import "https://deno.land/x/dotenv/load.ts";
import process from "node:process";

export const DIRNAME = path.resolve(
  path.dirname(path.fromFileUrl(import.meta.url))
);

export const INPUT = `${DIRNAME}/../inputs/main.tsv`;
export const INPUT_RENAME = `${DIRNAME}/../inputs/rename.tsv`;
export const OUTPUT = "output";
export const S3_BUCKET = process.env.S3_BUCKET as string;
export const INPUT_S3_KEY = "s3Key";
export const INPUT_FILE_NAME = "fileName";
