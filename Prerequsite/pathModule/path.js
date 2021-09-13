let path=require('path')
let fs=require('fs');

let inputarr=process.argv.slice(2);
// console.log(inputarr);

let filename= inputarr[0];
let content=inputarr[1];
// console.log('filename :',filename);
// console.log('content :',content);


//check current path (CWD= CURRENT WORKING DIRECTORY)
let currentpath=process.cwd();
console.log(currentpath);
//join sub folders in path
let joinedPath=path.join(currentpath,'abc','def.txt')
console.log(joinedPath);

//get the base file note of path
let file=path.basename('E:/pepcoding/JAVASCRIPT/FileOrganizer/Prerequsite/pathModule/path.js')
console.log(file);

//get the file type of file at given path
let extName=path.extname('E:/pepcoding/JAVASCRIPT/FileOrganizer/Prerequsite/pathModule/path.js')
console.log(extName);