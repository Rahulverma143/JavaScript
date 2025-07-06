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

const fruits = ["Apple", "Banana", "cherry"];

console.log(fruits);
console.log(fruits.push("grapes"));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("kiwi"));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

