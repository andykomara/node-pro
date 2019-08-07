// // function dupe(uniq){
// //     var uniquearray=[];
// //  for(i=0;i<uniq.length;i++)
// //  {
// //      if(uniquearray.indexOf(arra[i])===-1){
// //          uniquearray.push(arra[i]);
// //      }
// //  }

// // return uniquearray;
// // }
// // var arra=[1,2,2,3,3,4,4,4,4,5,6];
// // var res=dupe(arra);
// // console.log(res);

// // -----------------------------------------------------
//  JavaScript objects cannot have duplicate keys. The keys must all be unique. 
//Each browser have his own rules about the order in objects bebause technically, order is unspecified.so in chrome browser 
//it is getting arranged in ascending order
function removeDuplicates(num) {
    var x,
        len=num.length,
        out=[],
        obj={};
    for (x=0; x<len; x++) {
       
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
  result = removeDuplicates(Mynum);
  console.log(result);

//   Using a new ES6 feature called Map. A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.

// var myObject = new Map();
// myObject.set('z', 1);
// myObject.set('@', 2);
// myObject.set('b', 3);
// for (var [key, value] of myObject) {
//   console.log(key, value);
// ...
// z 1
// @ 2
// b 3


 