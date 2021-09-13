let fs=require('fs');
const { type } = require('os');
let path =require('path');
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    pictures: ['png','jpg','jpeg']
}

function organizeFn(srcpath){
    let entities=fs.readdirSync(srcpath); // all files of the path store in entity folder

    // create path for organized folder
    let organizeFolder =path.join(srcpath,'organizedFile');
    console.log(organizeFolder);

    //create folder using path
    if(!fs.existsSync(organizeFolder)){
        fs.mkdirSync(organizeFolder);
    }  

    for(let i in entities){
        let file = path.join(srcpath,entities[i]);
        // console.log(file);
        if(fs.lstatSync(file).isFile()){
            let type=checktype(file); //checking file type using its extension

            //make type folder

            let typefolder=path.join(organizeFolder,type);

            //check before creating folder exist or not
            if(!fs.existsSync(typefolder)){
                fs.mkdirSync(typefolder);
            }

            // copying file from src to destination
            let scr=path.join(srcpath,entities[i]);
            let dst=path.join(typefolder,entities[i]);
            
            fs.copyFileSync(scr,dst);
        }
        

    }
}

// check file type function
function checktype(file){
    for(let type in types){
        for(let ext of types[type]){
            if(path.extname(file).split('.')[1]==ext){
                return type;
            }

        }
    }
    return 'others';
}

module.exports={
    organizeFn: organizeFn,
}