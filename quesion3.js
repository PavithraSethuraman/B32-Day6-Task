// Write a code to print the numbers in the array
// Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {//erroe i=1 and i--
 new_string += numsArr[i] 
}
console.log(new_string);


// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string1 = "";
for (var i = 0; i < 11; i++) {
 new_string1 += numsArr1[i]+","//error ,
 }
 
console.log(new_string1)


// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string3 = ""
for (var i = numsArr3.length-1; i >= 0; i--) {//error i=11,i>0
new_string3 += numsArr3[i]+" "
}
console.log(new_string3);


// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr4[i] %2 == 0 )
 {
 numsArr4[i] = "Even"//error odd without " "
 }0
}
console.log(numsArr4);


// Write a code to replace the array value — If the index is even, replace it with ‘even’.
// Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr5[i] %2 !== 0 )//error ==
 {
 numsArr5[i] = "even"
 }
}
console.log(numsArr5);


// Write a code to add all the numbers in the array
// Output: 66
var numsArr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <numsArr6.length; i++) {//error i<11
 
 sum += numsArr6[i]
}
console.log(sum);


// Write a code to add the even numbers only
// Output: 30
var numsArr7 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i <numsArr7.length; i++) {//error i<10
 if(numsArr7[i]%2 == 0)
 {
 sum1 += numsArr7[i]
}
}
console.log(sum1);


// Write a code to add the even numbers and subract the odd numbers
// Output: 94
var numsArr8 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2=100;
for (var i = 0; i <=10; i++) {
 if(numsArr8[i]%2 ==0)//error != and ,
 {
 sum2 += numsArr8[i]
 } 
else{
 sum2 -= numsArr8[i]
 }
}
console.log(sum2);


// Write a code to print inner arrays
// Output:
//Array(5) [ 1, 2, 3, 4, 5 ]
//Array(6) [ 6, 7, 8, 9, 10, 11 ]
var numsArr9 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i <numsArr9.length; i++); {
 console.log( numsArr9[0].length,numsArr9[0])
 console.log(numsArr9[1].length,numsArr9[1])
 }


// // ERROR//Write a code to print elements in the inner arrays
// // Output: 1234567891011
// var numsArr10 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all1="";
// function add(numsArr10){
//     var inner_array1=[]
// for (var i = 0; i < numsArr10.length; i++) {
//      inner_array1 =inner_array1.concat(numsArr10[i])
// }
//  for(var j = 0; j < inner_array1;j++ ){
//     str_all1 = str_all1+inner_array1[j]
//     return str_all1
//  }
//  }
//  const b=add(numsArr)
// console.log(b)


// // Write a code to replace the array value — If the index is even, replace it with ‘even’.
// var numsArr11 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all2=0;
// for (var i = 0; i < numsArr11.length; i++) {
//  var inner_array2 = numsArr11[i];
//  for(var j = 0 ; j < inner_array2.length;j++)
//       if(inner_array2[i] %2 == 0 )
//       {
//          numsArr11[i] = "even"
//        }
// }
// console.log(numsArr11);


// //Write a code to add elements in the inner arrays based on odd or even values
// var numsArr12 = [[1, 2, 3, 4, 5],
// [ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsAr12r.length-1; i++) {
//  var inner_array3 = numsArr12[i];
//  for(var j = 0 ; j < inner_array3.length;j++ ){
//  if(numsArr12[i]%2!=0)
//  {
//  sum_odd += numsArr12[i]
//  }
//  else
//  {
//  sum_even += numsArr12[i]
//  }
// }
// }

// console.log(sum_odd);
// console.log(sum_even);


//Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length; j < 0 ;j-- )
//      str_all +=inner_array[j]
// }
// console.log(str_all);