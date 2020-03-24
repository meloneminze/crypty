const readline = require("readline");



function askPassword() {
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
 
    return new Promise((resolve) => {
          interface.question(`What's your password?`, password => {
              resolve(password);
            interface.close();
      })
    })
  }
exports.askPassword = askPassword; 