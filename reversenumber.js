//usage
//reverse function 
// function reverseString( str ){
//     str = str.split(''); //split the entered string 
//     str = str.reverse(); //reverse the order 
//     str = str.join(''); //then join the reverse order array values
//     return str;
// }
// var result =reverseString("12345");

// document.write(result);

// -----------------------------

// function reverse_a_number(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverse_a_number(32243));

// ------------------------------------------------

//for number

// var a, b = 0;
//     a = parseInt(prompt("Enter number to reverse: "));
//     //The idea is to continually divide 'a' (resulting quotients) by 10;
//     //then multiply the remainders 'b' by 10, adding them to each
//     //other until there is no remainder left (i.e. b = zero).
//     while(a > 0)
//     {      
//         b = b * 10
//         b = b + parseInt(a % 10)
//         a = parseInt(a / 10)
//     }
//     document.write("Reversed number: ", b)

//     // --------------------------------------------------------
// var rev=function(a){    
//     var  b = 0;
//     while(a > 0)
//     {      
//         b = b * 10
//         b = b + (a % 10)
//         a = parseInt(a / 10)
//     }
//     return b;
// }
// var res=rev(12345);
// document.write(res);
// ----------------------------------------------------------
// For reverse string

// function reverse(s) {
//     var o = '';
//     for (var i = s.length - 1; i >= 0; i--)
//       o += s[i];
//     return o;
//     }
//     reverse("Hello");

function reverseString(str){
    let stringRev ="";
    for(let i= str.length-1; i>=1; i--){
        stringRev = stringRev + str[i];
        
    }
    return stringRev;
}
alert(reverseString("Hello"));