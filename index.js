var os = require('os');
var fs = require('fs');

var obj = require('./mod');
obj.fun();
console.log(obj.names);

// console.log(os.arch());
//  console.log(os.platform());

//  fs.readFile("package.json",'utf8',function(err,data){
// if(err)
// console.log("Error in reading file");
// else
// console.log(data);
//  });
//  console.log("After File read");//first this will exexcute since it is async call there is promise concept 
