let fs =require('fs');
let path=require('path');

let inputArr=process.argv.slice(2);
let inputDir=inputArr[0];

let allEntities=fs.readdirSync(inputDir);

//till here we have all the file in dir in an array
//console.log(allEntities);

let content="";

for(i in allEntities){
    let entityName=allEntities[i];
    console.log(entityName);

    let ename=path.join(inputDir,entityName);

    let stats=fs.lstatSync(ename);
    console.log(stats);

    let isfile=stats.isFile();

    if(isfile){
        let extname= path.extname(ename);
        if(extname=='.txt'){
            content+=fs.readFileSync(ename);
        }
    }
}
console.log(content);


fs.writeFileSync('E:/pepcoding/JAVASCRIPT/FileOrganizer/Prerequsite/Summary.txt',content);
