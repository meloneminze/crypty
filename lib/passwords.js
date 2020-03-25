const fs = require("fs");

function writeDB(db) {
  fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));
}

function readPasswords() {
  if (!fs.existsSync("./db.json")) {
    return {};
  }
  const passwordsJSON = fs.readFileSync("./db.json", "utf8");
  const allPasswords = JSON.parse(passwordsJSON);
  return allPasswords.passwords;
}

function writePasswords(passwords) {
  const updatedPasswords = {
    masterPassword: readMasterPassword(),
    passwords: passwords
  };
  fs.writeFileSync("./db.json", JSON.stringify(updatedPasswords, null, 2));
}

function readMasterPassword() {
  if (!fs.existsSync("./db.json")) {
    return null;
  }
  const passwordsJSON = fs.readFileSync("./db.json", "utf8");
  const allPasswords = JSON.parse(passwordsJSON);
  return allPasswords.masterPassword;
}

module.exports = {
  readPasswords,
  writePasswords,
  readMasterPassword,
  writeDB
};
