let fs   = require('fs');
let path = require('path');

let inputarr= process.argv.slice(2);
maindir=inputarr[0]; //web
console.log(maindir);

subdirectories=inputarr.slice(1); //javascript , mongo , react
console.log(subdirectories);

// create folder
let maindirpath=path.join(process.cwd(),maindir);
console.log('main folder  ', maindirpath);
if(!fs.existsSync(maindirpath)){
    fs.mkdirSync(maindirpath);
}

for(let i in subdirectories){
    let folder=path.join(maindirpath,subdirectories[i]);
    console.log('Folder path  ',folder);
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder);
    }

    for(let j=1;j<=3;j++){
        let module=path.join(folder,`Module${j}`);
        console.log('Module name',module);

        if(!fs.existsSync(module)){
            fs.mkdirSync(module);
        }
        
        let fileName=path.join(module,'content.md');
        fs.writeFileSync(fileName,'#Hello Everyone');
    }
}





