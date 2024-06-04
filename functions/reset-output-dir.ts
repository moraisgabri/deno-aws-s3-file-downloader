import { DIRNAME } from "../utils/constants.ts";

export const resetOutputDir = (outputDirName: string) => {
  Deno.mkdirSync(`${DIRNAME}/../${outputDirName}`, { recursive: true });
  Deno.removeSync(`${DIRNAME}/../${outputDirName}`, { recursive: true });
  Deno.mkdirSync(`${DIRNAME}/../${outputDirName}`, { recursive: true });
};
