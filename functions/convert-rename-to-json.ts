import { readFileSync } from "node:fs";

interface Item {
  s3Key: string;
  fileName: string;
}

export const convertRenameToJson = (items: Item[], input: string): Item[] => {
  const renameItems = readFileSync(input)
    .toString()
    .split("\n")
    .map((item) => {
      const [fileName, newName] = item.trim().split(",");
      return fileName
        ? {
            fileName,
            newName,
          }
        : null;
    })
    .filter((item) => item != null);

  renameItems.shift();

  items.forEach((item, index) => {
    const res = renameItems.find((renameItem) => {
      return renameItem?.fileName === item.fileName;
    });

    if (res?.newName) {
      items[index].fileName = res.newName + ".pdf";
    }
  });

  console.log({ items });

  return items;
};
