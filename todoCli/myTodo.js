import fs from "fs";
import { stringify } from "querystring";
import readline from "readline";

const File = "todo.json";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const loadTask = () => {
  const data = fs.readFileSync(File, "utf-8");
  return JSON.parse(data);
};

const saveTask = (task) => {
  fs.writeFileSync(File, JSON.stringify(tasks, null, 2));
};

const showMenu = () => {
  console.log(
    "\n======================== TODO TASK =========================\n",
  );
  console.log("1 : Add task");
  console.log("2 : View task");
  console.log("3 : Delete task");
  console.log("4 : Exit");
  rl.question("Choose an option :", handleMenu);
};
