let str='Hakuna tata';
let a =10;

function foo(msg){
    return 'Hi i was made in owner.js' +msg
};

console.log('hello i was in owner.js');


//check what is module.js
//console.log(module);
//it is a obj containing various info. regarding current file in fiorm of key value pair
//module.exports=str;

// we call export in form of object
module.exports={
    var:a,
    string:str,
    fooFnc:foo
}