const readline = require("readline");
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  function askPassword() {
    return new Promise((resolve) => {
          interface.question(`What's your password?`, password => {
              resolve(password);
            interface.close();
      })
    })
  }
exports.askPassword = askPassword; 