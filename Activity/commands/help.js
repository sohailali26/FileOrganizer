const chalk = require('chalk');
function helpFunction(){
    console.log(chalk.blue(`List of all commands
    1. node main.js tree <pathName>
    2. node main.js organize <pathName>
    3. node main.js help`));
}

module.exports={
    helpFn:helpFunction
}