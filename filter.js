// const all_numbers = [1, 2, 3, 4];

// const even = all_numbers.filter(num=>num%2==0)

// const students = [
//     { name: 'Mursal', grade: 96 },
//     { name: 'Furqan', grade: 48 },
//     { name: 'Ahmed', grade: 99 },
//     { name: 'Anees', grade: 56 },
//     { name: 'Burhan', grade: 90 }
// ];

// const getGrads = students.filter(students=>students.grade>=90);

// console.log(getGrads)

// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
// ];

// let bigCities = [];

// for(let i = 0;i<cities.length;i++){
//     if(cities[i].population>3000000){
//         bigCities.push(cities[i])
//     }
// }
// console.log('for loop',bigCities);

// let bigCitiesPopu = cities.filter(city=>city.population>3000000).map(city=>console.log('city name',city.name,'city population',city.population))

// console.log('filter method',bigCitiesPopu)

// let newArr = [1, 2, 2, 3, 4, 4, 5];

// let uniqueArr = [...new Set(newArr)]
// console.log(uniqueArr)

// Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays.

// const xProd = (a,b)=>a.reduce((acc,x)=>acc.concat(b.map(y=>[x,y])),[])

// const xProd = (first,second)=>first.reduce((acc,x)=>acc.concat(second.map(y=>[x,y])),[])

// console.log(xProd([1,2,3],[4,5,6]))

//Random Number in Range

// const randomInRange = (min,max)=>{
//     let Num = Math.random()*(max-min)+min;
//     return Num
// }
// randomInRange();

// console.log(randomInRange(1,5))

// Write a JavaScript program to initialize an array containing the numbers in the specified range where start and end are inclusive with their common difference step.

// const initializeRangeArray = (end,start=0,step=1)=>{
//   let newArr =   Array.from({length:Math.ceil((end+1-start)/step)}).map((v,i)=>i*step+start);
//   return newArr
// }

// console.log(initializeRangeArray(7,5));

//  function abc(){
//   console.log('0 second')
//   setTimeout(()=>{
//     console.log('1 second')
//   },1000)

//  }

//  abc()

//Detect Device

// const detectDevice = ()=>{
//   /Android|webOs|iPhone|iPod|Blackberry|IEMobile|OperaMini/i.test(navigator.userAgent)?'Mobile':'Desktop';
// }

// console.log(detectDevice())

//Print Reverse Elements of an aary by function

// const forEachArr = (arr)=>{
//           arr.reverse().forEach(val=>console.log(val))

// }

// forEachArr([1,23,4,5,6,7])

// const obj =   {name: 'Los Angeles', population: 3792621}

// const forOwn = (obj)=>{
//   Object.values(obj).forEach(key=>console.log(key))
// }
// forOwn(obj)

// Write a JavaScript program to get the median of an array of numbers.

// const median = (arr)=>{
//   const mid = Math.floor(arr.length/2)
//   // const nums = [...arr].sort()

//   return arr.length%2 === 0? arr[mid]:(arr[mid-1]+arr[mid]/2)
// }

// console.log(median([8,43,12,1,2,3,5,6,7,67]))

//Regular Expression

// const regx = new RegExp(/^a...s$/);

// console.log(regx.test('alias'))

// const validatePhone = (num)=>{
//   const re = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/g;
//   let result = num.match(re);
//   if(result){
//     console.log('this is a valid number')
//   }else{
//     console.log('enter a valid formate')
//   }
// }

// validatePhone('923035625096')

// const factorial = (x)=>{
//   if(x===0){
//     return 1
//   }
//   return x *factorial(x-1)
// }
// console.log(factorial(4))

// const gcd = (a,b)=>{
//   if(!b)return a;
//   return gcd(b,a%b);

// }

// console.log(gcd(12,30))

//Array sum

//  Check even and Odd with 015 numbers

// for(let i =0; i<15;i++){
//   if(i===0){
//     console.log(`${i} is even`)
//   }else if(i%2===0){
//     console.log(`${i} is even`)
//   }else{
//     console.log(`${i} is odd`)

//   }
// }

// JavaScript FizzBuzz program

// for(let i = 0;i<=100;i++){
//   if(i%3===0 && i%5===0){
//     console.log(`${i} FizzBuzz`)
//   }else if(i%3===0){
//     console.log(`${i} Fizz`)
//   }else if(i%5===0){
//     console.log(`${i} Buzz`)
//   }else{
//     console.log(i)
//   }
// }
// let newArr = [1, 2, 3, 4, 5];

// const is_arr = (arr) => {
//   if (Array.isArray(arr)) {
//     console.log("input is in an array");
//     return true;
//   } else {
//     console.log("input is not an array");
//     return false;
//   }
// };

// console.log(is_arr(newArr));

//javascript function to clone an array

// const cloneArr = [...newArr]
// console.log(cloneArr)

// Write a JavaScript program which prints the elements of the following array.

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

// for(var i in a){
//   console.log('row '+ i);
//   for(var j in a[i]){
//     console.log(' ' + a[i][j])
//   }
// }

                    
