const [key, value] = process.argv.slice(2);
const { encrypt, decrypt } = require("./crypto");
const { readPasswords, writePasswords } = require("./passwords");

function get() {
  console.log("Called GET", key);
  try {
    const passwords = readPasswords();
    const encryptedPassword = passwords[key];
    const password = decrypt(encryptedPassword);
    console.log(key, password);
  } catch (error) {
    console.error(error);
  }
}

function set() {
  console.log("Called SET", key, value);
  const encryptedValue = encrypt(value);
  try {
    const passwords = readPasswords();
    passwords[key] = encryptedValue;
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
