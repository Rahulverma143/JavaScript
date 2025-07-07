// const arr = [1,2,3,4];
// const arr1 = [5,6,7,8];
// arr.forEach((x) => console.log(x));

// // for each not return value no modified

// let ans = arr.map((x, i) => (arr[i] = x * 2));
// // map 
// console.log(ans);

// console.log(arr1); 


// const arr1 = [1,2,3,4,5,6,7];
// // let ans = arr1.map((c) => c * 5);
// let ans = arr1.map((c , i) => i % 2 == 0 ?  c * 2 : c); 

// console.log(arr1);
// console.log(ans);


// const courses = ['math101', 'Eng102'];
// let courseId = courses.map((c) => `COURSE: ${c}`);
// console.log(courseId);



// const  employees= ["Rahul Verma", "Verma Rahul"];
// let ans = employees.map((e) => e.toLowerCase().replace(" ", "."));
// console.log(ans);

// let capital = employees.map((e) => e.toUpperCase());
// console.log(capital);

// let s = "Rahul Verma";
// let name = s.split(" ");
// console.log(name);
// console.log(name[0]);
// console.log(name[1]);

//  const  employees= ["Rahul Verma", "Verma Rahul"];
// let newName = employees.map((emp) => emp.split(" ")[0] + " " + emp.split(" ") [1] .toUpperCase());
// console.log(newName);








// let s = "Rudra Pratap Singh";
// let name = s.split(" ");
// console.log(name.length-1);



//  const  employees= ["Rudra Pratap Singh",
//      "Rahul Verma Manotra" ,
//      ];
// let newName = employees.map((emp) => emp.split(" ")[0] + " " + emp.split(" ") [1] .toUpperCase());
// console.log(newName);


// const nums = [1,2,3,4,5,6];
// const ans = nums.slice(0,2);
// console.log(ans);  //[1,2]





// const name = ["Rahul", "Verma", "Manotra"];
// const word = name.slice(0, -1).join(" ")

// console.log(word);

// const fruits = ["Apple", "Banana", "cherry"];

// console.log(fruits);
// console.log(fruits.push("grapes"));
// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);
// console.log(fruits.unshift("kiwi"));
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);

//  factorial of a number 

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5)); 



// const employees = ["Rahul verma", "verma manotra"];
// let newname = employees.map(
//   (emp) => emp.split(" ")[0] + " " + emp.split(" ")[1].toUpperCase()
// );
// console.log(newname);



//  let s = "Rudra Pratap Singh";
//  let name = s.split(" ");
//  console.log(name.length-1);


// const employees = [
//   "Thakur Rana Pratap",
//   "Ravindra Jadejha",
//   "Neel Nitin Mukesh",
//   "Ravi Verma",
//   "Rohan Kumar Verma",
//   "Prajjal Dhar",
//   "Muttu Swami Venu Gopal Iyer",
// ];
// let ans = employees.map((emp) => {
//   const name = emp.split(" ");
//   let nthindex = emp.split(" ").length - 1;
//   return `${name.slice(0, -1).join(" ")} ${name[nthindex].toUpperCase()}`;
// });
// console.log(ans);

// const arr = [1,2,3,4,5,6,7];
// let ans = arr.slice(0 -1);
// console.log(arr);


// iterate ----------------------
// string convert into character -----------------------

// const str = "Rahul";
// const ans = str.split("");
// console.log(ans);

// reverse this string --------------------------

// const str = "Rahul";
// const ans = str.split("").reverse();
// console.log(ans);


// reverse this  // luhar outpur ----------------------------------
// const str = "Rahul";
// const ans = str.split("").reverse().join("");
// console.log(ans);




// last three element output [4,5,6]
// reverse this elements
// const str = [1,2,3,4,5,6];
// // let ans = str.slice(-3); [4,5,6]
// let ans = str.slice(-3).reverse(); // [6,5,4]

// console.log(ans);

// ----------------------------------

// const str = "javascript is the wrost langugae";
// // const ans = str.split(" ");
// // const ans = str.split(" ").reverse();
// const ans = str.split(" ").reverse().join(" ");
// console.log(ans);

// ------------------------------------------ 

// const str = "code";
// const ans = str.split("").reverse().join("-");
// console.log(ans);

// ------------------------------------

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10];
// // // merge 
// // const arr3 = [...arr1, ...arr2];
// // console.log(arr3);

// const ans = arr1.push(...arr2);
// console.log(ans);
// console.log(arr1);



// // pallindrome number 

// // const str = "rahul";
// const str = "maedam";
// const pallindrome = str.split("").reverse().join("");
// pallindrome ? console.log("yes") : console.log("no");

// ---------------------------------------------------------------

// const sentence = "Javascript is the wrost language";
// const ans = sentence.split(" ");
// console.log(ans);
// // const result = ans.map((s) =>s.split(""));
// const result = ans.map((s) => s.split("").reverse().join("")).join(" ");

// console.log(result);

// ---------------------------------------------

// map and filter difference --------------------

// const arr = ["apple", 11212, "banana", 14, "kiwi", 857, "rose", 4789];
// console.log(typeof arr);  // object

// const type = arr.filter((ele) => typeof ele === "number").reverse();  // number reverse
// // const type = numarr.filter((ele) => typeof ele === "number").reverse();
// const res = arr.map((ele) => (typeof ele === "number"? numarr.shift() : ele));
// console.log(res);