import fs from "fs";
import { stringify } from "querystring";
import readline from "readline";

const File = "todo.json";

if (!fs.existsSync(File)) {
  fs.writeFileSync(File, JSON.stringify([]));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const loadTask = () => {
  const data = fs.readFileSync(File, "utf-8");
  return JSON.parse(data);
};

const saveTask = (tasks) => {
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

function handleMenu(option) {
  switch (option) {
    case "1":
      rl.question("Describe the task : ", (task) => {
        const tasks = loadTask();
        tasks.push({ task, done: false });
        saveTask(tasks);
        console.log("Task added successfully");
        showMenu();
      });
      break;

    case "2":
      const tasks = loadTask();
      if (tasks.length === 0) {
        console.log("No Task Found");
      } else {
        tasks.forEach((t, index) => {
          console.log(`${index + 1} ${t.task}`);
        });
      }

      showMenu();
      break;
    case "3":
      const alltasks = loadTask();
      if (alltasks.length === 0) {
        console.log("No Task Found");
        showMenu();
        return;
      }
      console.log("All task :");
      alltasks.forEach((t, index) => {
        console.log(`${index + 1} ${t.task}`);
      });
      rl.question("Enter the task to be deleted", (num) => {
        const index = parseInt(num) - 1;
        if (index >= 0 && index < alltasks.length) {
          alltasks.splice(index, 1);
          saveTask(alltasks);
          console.log("Task is deleted successfully");
        } else {
          console.log("Enter wrong task number ");
        }
        showMenu();
      });
      break;
    case "4":
      console.log("Exiting...");
      rl.close();
      break;
    default:
      console.log("Enter wrong option");
      showMenu();
  }
}
showMenu();
