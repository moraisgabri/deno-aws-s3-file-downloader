import { readFileSync } from "node:fs";
import { INPUT_S3_KEY, INPUT_FILE_NAME } from "./../utils/constants.ts";

interface Item {
  s3Key: string;
  fileName: string;
}

export const convertTsvToJson = (input: string): Item[] => {
  const items = readFileSync(input)
    .toString()
    .split("\n")
    .map((item) => {
      const [s3Key, fileName] = item.trim().split("\t");
      return fileName
        ? {
            [INPUT_S3_KEY]: s3Key,
            [INPUT_FILE_NAME]: fileName,
          }
        : null;
    })
    .filter((item) => item != null);

  items.shift();

  return items as Item[];
};
