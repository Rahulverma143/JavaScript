const date = new Date();
console.log(date);
console.log(typeof date);
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getTime() / (1000 * 60 * 60));
console.log(date.getHours());


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 5, 6];
//merge
 const arr3 = [...arr1, ...arr2];
 console.log(arr3);

// copy constructor 
const ans = arr1.push(...arr2);
console.log(ans); //length of total elements
console.log(arr1); //merge of ARR1 AND ARR2