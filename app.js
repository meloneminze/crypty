const [command] = process.argv.slice(2);
const { get, set, unset } = require("./lib/commands");

// function get() {
//   console.log("Called GET", key);
//   try {
//     const passwords = readPasswords();
//     console.log(key, passwords[key]);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function set() {
//   console.log("Called SET", key, value);
//   try {
//     const passwords = readPasswords();
//     passwords[key] = value;
//     writePasswords(passwords);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function unset() {
//   console.log("Called UNSET", key, value);
//   try {
//     const passwords = readPasswords();
//     delete passwords[key];
//     writePasswords(passwords);
//   } catch (error) {
//     console.error(error);
//   }
// }

if (command === "get") {
  get();
} else if (command === "set") {
  set();
} else if (command === "unset") {
  unset();
} else {
  console.error("Unknown command");
}
