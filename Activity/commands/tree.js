let fs=require('fs');
let path=require('path');

function treeFn(srcpath){
    let basename=path.basename(srcpath);
    console.log(basename);
    console.log("\n\t"+"└──");
    let content =fs.readdirSync(srcpath);

    let allEntities="";
    for(let i in content){
        allEntities+="\n\r\t"+"├──"+content[i];
        //console.log(content[i]);
    }
    console.log(allEntities);
}

module.exports={
    treeFn:treeFn,
}