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

// -----------------------------------------------------

//pallindrome:
const str = "maedam";
const pallindrome = str === str.split("").reverse().join("");
pallindrome ? console.log("yes") : console.log("no");

// ---------------------------------------------------------

 const sentence = "Javascript is the wrost language";
 const senarr = sentence.split(" ");
 console.log(senarr);
 const revsen = senarr.map((s) => s.split("").reverse().join(""));
 console.log(revsen);

//  ----------------------------------------------------

 const arr = ["apple", 11212, "banana", 14, "kiwi", 856, "rose", 4785];
 const numarr = arr.filter((ele) => typeof ele === "number").reverse();
 const res = arr.map((ele) => (typeof ele === "number" ? numarr.shift() : ele));
 console.log(res);