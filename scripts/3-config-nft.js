import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x247232A742826D6578d5dfaF0F5aDaA8Ca7A1DFA", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Laughing Budha",
        description: "This NFT will give you access to HappyDAO!",
        image: readFileSync("scripts/assets/membership.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();