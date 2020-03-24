const [command, key] = process.argv.slice(2);
const { get, set, unset, reset } = require("./lib/commands");
const { askForPassword, askForMasterPassword } = require("./lib/questions");
const { readMasterPassword } = require("./lib/passwords");
const { verifyHash } = require("./lib/crypto");

async function run() {
  const answeredMasterPassword = await askForMasterPassword();
  if (command === "reset") {
    return reset(answeredMasterPassword);
  }

  const masterPassword = readMasterPassword();

  if (masterPassword === null) {
    console.error("Bitte führen Sie reset aus, um eine Datenbank anzulegen.");
    return;
  }

  if (!verifyHash(answeredMasterPassword, masterPassword)) {
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
