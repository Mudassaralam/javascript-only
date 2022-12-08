// Given a string, reverse each word in the sentence

// var string = "Welcome to this Javascript Guide!";

// function reverseBySeperator(string,separator){
//     return string.split(separator).reverse().join(separator);
// }

// var reverseEntireSentence = reverseBySeperator(string, "");

// console.log(reverseEntireSentence)

//check palindrome

// function checkPalindrome(string){
//     const arrayValues = string.split('');

//     const reverseArrayValues = arrayValues.reverse();

//     const reverseString = reverseArrayValues.join('');

//     if(string == reverseString){
//         console.log('It is palindrome')
//     }else{
//         console.log('it is not palindrom')
//     }
// }

// checkPalindrome('rider')

// var twoSum = function(nums, target) {

//     let result = [];

//     for(let i = 0; i<nums.length;i++){
//         for(let j = 0;j<nums.length; j++){
//             if(i!==j){
//                 if(nums[i] + nums[j] == target){
//                     result = [nums.indexOf(nums[i]),nums.indexOf(nums[j])]
//                 }
//             }
//         }
//     }
// // }
// console.log(result)
// return result;
// };

// twoSum([3,3],6)

// JavaScript program to combine the numbers of a given array into an array containing all combinations.

// let arry1 = [1, 2, 3, 4];

// // const powerSet = arr=>arr.reduce((a,v)=>a.concat(a.map(r=>[v].concat(r))),[[]])

// const powerSet = (arr)=>{
//   return  arr.reduce((acc,curr)=>acc.concat(acc.map(r=>[curr].concat(r))),[[]])
// }

// console.log(powerSet(arry1));

// Write a JavaScript program to extract out the values at the specified indexes from a specified array.

// let arry1 = [1, 2, 3, 4];

// const pullAtIndex = (arr,pullArr)=>{
//     let removed = [];
// let pulled = arr =>arr.map((v,i)=>console.log(v+''+i))
//    arr.map((v,i)=>(pullArr.includes(i)?removed.push(v):v)).filter((v,i)=>!pullArr.includes(i));

//    arr.length = 0;

//    pulled.forEach(v=>arr.push(v))
//    console.log(removed)
// return removed

// }

// console.log(pullAtIndex(arry1,[0,3]))

//Generate random hex colors

// const randomHexColor = ()=>{
//     let n = (Math.random()*0xffff * 1000000).toString(16)
//     return '#'+n.slice(0,6)
// }
// console.log(randomHexColor())

// Write a JavaScript program to remove specified elements from the left of a given array of elements.
const arr = [1, 2, 3, 4, 5, 6]
function removeFromLeft(arr, strt, end) {
  return arr.splice(strt, end);
}
console.log(removeFromLeft(arr, 2,3));
console.log('orignal arr',arr)