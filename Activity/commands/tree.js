let fs=require('fs');
let path=require('path');
const chalk = require('chalk');

function treeFn(srcpath){
    let basename=path.basename(srcpath);
    console.log(chalk.blueBright(basename));
    console.log(chalk.yellow("\n\t"+"└──"));
    let content =fs.readdirSync(srcpath);

    let allEntities="";
    for(let i in content){
        allEntities+="\n\r\t"+"├──"+content[i];
        //console.log(content[i]);
    }
    console.log(chalk.greenBright(allEntities));
}

module.exports={
    treeFn:treeFn,
}