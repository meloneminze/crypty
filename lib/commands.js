const [key, value] = process.argv.slice(2);
const { readPasswords, writePasswords } = require("./passwords");

function get() {
  console.log("Called GET", key);
  try {
    const passwords = readPasswords();
    console.log(key, passwords[key]);
  } catch (error) {
    console.error(error);
  }
}

function set() {
  console.log("Called SET", key, value);
  try {
    const passwords = readPasswords();
    passwords[key] = value;
    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

function unset() {
  console.log("Called UNSET", key, value);
  try {
    const passwords = readPasswords();
    delete passwords[key];
    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  set,
  unset,
  get
};
