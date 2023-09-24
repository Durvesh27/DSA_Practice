// Q1:
// function removeNumber(nums, val) {
//   let filterArray = [];
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       filterArray.push(nums[i]);
//     } else {
//       count += 1;
//     }
//   }
//   return [{K:count},{array:filterArray}]
// }
// console.log(removeNumber([3, 2, 2, 3], 3));

// Q2 :
// function checkPalindrome(num) {
//   let array = num.toString();
//   if (array[0] === array[array.length - 1]) {
//     return true;
//   }
//   return false;
// }
// console.log(checkPalindrome(121));

// Q3:
// function sumArray(nums){
// let total=0;
// for(let i=0;i<nums.length;i++){
// total+=nums[i]
// }
// return total;
// }
// console.log(sumArray([1,2,3,4,5]))

// Q4:
// function checkPalindrome(str) {
//   if (str[0] === str[str.length - 1]) {
//     return true;
//   }
//   return false;
// }
// console.log(checkPalindrome("121"));

// Q5:
// function reverseArray(arr){
// let newArr=[]
// for(let i=arr.length-1;i>=0;i--){
// newArr.push(arr[i])
// }
// return newArr;
// }
// console.log(reverseArray([1,2,3]))

// Q6:
// function removeDuplicates(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//       newArr.push(arr[i])
//       }
//     }
//   }
//   return newArr;
// }
// console.log(removeDuplicates([1,2,2,5,6,5]));

// Q7:
// function calcFactorial(num){
// if(num!=0){
//     let multiplier=1;
//     while(num>0){
//     multiplier*=num;
//     num--
//     }
//     return multiplier;
// }
// return 1;
// }
// console.log(calcFactorial(5))

// Q9:
// function calcFactorial(num){
// if(num!=0){
//     let multiplier=1;
//     while(num>0){
//     multiplier*=num;
//     num--
//     }
//     return multiplier;
// }
// return 1;
// }
// console.log(calcFactorial(5))

// Q10:
// function sortNumbers(arr){
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] >= arr[j]) {
//       [arr[i],arr[j]]=[arr[j],arr[i]]
//       }
//     }
//   }
//   return arr;
// }
// console.log(sortNumbers([2,1,3,8,9,4,5]))

// Q11:
// function findMissing(arr){
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] >= arr[j]) {
//       [arr[i],arr[j]]=[arr[j],arr[i]]
//       }
//     }
//   }
// let point=0;
// let run=1;
//  while(arr[run]-arr[point]===1){
//  run++;
//  point++;
//  }
//  return arr[point]+1;
// }
// console.log(findMissing([2,4,1,3,6,7,8]))



// Q13:
// function getPositonArray(array, k) {
//   let left = 0;
//   let right = left+1;
//   let indexArray=[]
//   while (left < array.length) {
//     if (array[left]=array[right]!=k) {
//      right++;
//     }
//     else if(array[left]=array[right]=k){
//     indexArray.push([left,right])
//     }
//     left++;
//     right=left+1;
//   }
//   return indexArray[indexArray.length-1];
// }
// console.log(getPositonArray([5, 7, 7, 8, 8, 10], 8));

