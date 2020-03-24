const [command, key] = process.argv.slice(2);
const { get, set, unset } = require("./lib/commands");
const { askPassword } = require("./lib/questions");

async function run() {
  if (command === "get") {
    get(key);
  } else if (command === "set") {
    const password = await askPassword();
    set(key, password);
  } else if (command === "unset") {
    unset(key);
  } else {
    console.error("Unknown command");
  }
}
run();
