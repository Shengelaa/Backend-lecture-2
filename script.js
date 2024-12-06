const fs = require("fs/promises");
const path = require("path");

async function main() {
  //  await fs.writeFile("test/random.txt", "random text");

  console.log(__dirname, "dirname");
  console.log(__filename, "filename");

  const fullPath = path.join(__dirname, "test2");

  const user = "nika\n";

  console.log(fullPath);

  //?   await fs.appendFile(fullPath, user);

  //!   await fs.unlink(fullPath);

  // ! await fs.rmdir(fullPath);

  const dirs = await fs.readdir("test2");

  for (let key of dirs) {
    // const res = await fs.lstat(key);
    const testPath = path.join(__dirname, "test2", key);
    console.log(testPath);

    await fs.unlink(testPath);
    // console.log(res.isDirectory(), "response");
  }
  console.log(dirs, "dirs");

  await fs.rename("random.txt", "levan.txt");
}

main();
