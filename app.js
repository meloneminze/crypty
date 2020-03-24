const [command, key] = process.argv.slice(2);
const { get, set, unset } = require("./lib/commands");
const { askForPassword, askForMasterPassword } = require("./lib/questions");
const { readMasterPassword } = require("./lib/passwords");

async function run() {
  const answeredMasterPassword = await askForMasterPassword();
  const masterPassword = readMasterPassword();

  if (answeredMasterPassword !== masterPassword) {
    console.error("Falsches Passwort");
    return;
  }
  if (command === "get") {
    get(key);
  } else if (command === "set") {
    const password = await askForPassword();
    set(key, password);
  } else if (command === "unset") {
    unset(key);
  } else {
    console.error("Unknown command");
  }
}
run();
