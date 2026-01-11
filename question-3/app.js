import os from "os";
import fs from "fs/promises";

async function runApp() {
  try {
    // Part-A OS Module

    console.log("Free Memory", os.freemem());
    console.log("Total CPU Cores", os.cpus().length);

    // Part-B File System Operations

    //1. Create data.txt
    await fs.writeFile("data.txt", 'Hello World');

    //2. Create Readme.md
    await fs.writeFile("Readme.md", "utf-8");

    //3. Read data.txt and print content
    const data = await fs.readFile("data.txt", "utf-8");

    //4. Append content to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");

    //5. Delete Readme.md
    await fs.unlink("Readme.md");

    console.log("All operations completed successfully");
  } catch (error) {
    console.log("Error", error.message)
  }
}
runApp();
