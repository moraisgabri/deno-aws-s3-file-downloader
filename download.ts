// @deno-types="npm:@types/node"
import "https://deno.land/x/dotenv/load.ts";
import { resetOutputDir } from "./functions/reset-output-dir.ts";
import { INPUT, OUTPUT } from "./utils/constants.ts";
import { convertTsvToJson } from "./functions/convert-tsv-to-json.ts";
import { downloadFile } from "./functions/download-file.ts";
import { sleep } from "./functions/sleep.ts";

resetOutputDir(OUTPUT);

const items = convertTsvToJson(INPUT);

for (let i = 0; i < items.length; i++) {
  const { s3Key, fileName } = items[i];
  await downloadFile(s3Key, fileName);
  console.log(`Downloaded ${fileName} [${i + 1}/${items.length}]`);
}

await sleep(3000);
