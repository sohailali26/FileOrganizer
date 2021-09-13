//includeing fs module
let fs=require('fs'); 
let path=require('path');

//reading f1.txt file
let content=fs.readFileSync('f1.txt');

//printing file contet
console.log(content +"");


// //abc.txt will created if not available and write txt in that file
// fs.writeFileSync('abc.txt','timon n pumba');

// // append in abc file  
// fs.appendFileSync('abc.txt',' Hakumma tata');

// // //deleting abc.txt file
// // fs.unlinkSync('abc.txt');


// //directoies

// //to make folder
// // fs.mkdirSync('pathmodule');

// //todelete folder

// // fs.rmdirSync('pathmodule');

// //to chech if file exixt or not
// // let doesExist=fs.existsSync('fs.js');
// // console.log('fs.js file',doesExist);

// //statusobj of file/folder

// let statusobj=fs.lstatSync('f1.txt'); //this will find all the property of f1.txt
// console.log(statusobj);


// console.log(statusobj.isFile()); // chech if the f1.txt is a file
// console.log(statusobj.isDirectory()); // chech if the f1.txt is a file

// // will check all the directories in the given below path
// let path ='E:/pepcoding/JAVASCRIPT/FileOrganizer'
// let fileArr=fs.readdirSync(path);
// console.log(fileArr);


// copy file a to file b in same folder
let srcPath='E:/pepcoding/JAVASCRIPT/FileOrganizer/f1.txt';
let destpath='E:/pepcoding/JAVASCRIPT/FileOrganizer/f2.txt';

fs.copyFileSync(srcPath,destpath);

//copy f1.txt file of fs folder to folder dir and create the file if not available. 
let tobecopied=path.basename(srcPath);
let dest=path.join('E:/pepcoding/JAVASCRIPT/FileOrganizer/dir',tobecopied);
console.log(dest);
fs.copyFileSync(srcPath,dest)