// const date = new Date();
// console.log(date);
// console.log(typeof date);
// console.log(date.getDay());
// console.log(date.getDate());
// console.log(date.getTime() / (1000 * 60 * 60));
// console.log(date.getHours());


// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 3, 4, 5, 6];
// //merge
//  const arr3 = [...arr1, ...arr2];
//  console.log(arr3);

// // copy constructor 
// const ans = arr1.push(...arr2);
// console.log(ans); //length of total elements
// console.log(arr1); //merge of ARR1 AND ARR2

// -----------------------------------------------------

//pallindrome:
// const str = "maedam";
// const pallindrome = str === str.split("").reverse().join("");
// pallindrome ? console.log("yes") : console.log("no");

// ---------------------------------------------------------

//  const sentence = "Javascript is the wrost language";
//  const senarr = sentence.split(" ");
//  console.log(senarr);
//  const revsen = senarr.map((s) => s.split("").reverse().join(""));
//  console.log(revsen);

//  ----------------------------------------------------

//  const arr = ["apple", 11212, "banana", 14, "kiwi", 856, "rose", 4785];
//  const numarr = arr.filter((ele) => typeof ele === "number").reverse();
//  const res = arr.map((ele) => (typeof ele === "number" ? numarr.shift() : ele));
//  console.log(res);

//-----------------------------------------------------

//  1. 
// const inventory = [
//   { id: 1, name: "Tablet", inStock: true },
//   { id: 2, name: "Laptop", inStock: false },
//   { id: 3, name: "Headphones", inStock: false },
//   { id: 4, name: "Charger", inStock: true }
// ];

// let outofstock = inventory.filter(i => i.inStock === false);
// console.log(outofstock);

// 2.
// const doctors = [
//   { id: 1, name: "Dr. Tanya", onlineConsultation: true },
//   { id: 2, name: "Dr. Imran", onlineConsultation: false },
//   { id: 3, name: "Dr. Farah", onlineConsultation: true },
//   { id: 4, name: "Dr. Kunal", onlineConsultation: false }
// ];

// const onlineDoctors = doctors.filter(doctor => doctor.onlineConsultation);
// console.log(onlineDoctors);

// // // // --------------------------------------------------------------------
// // // // 3. 

// // // const employees = [
// // //   { id: 1, name: "Isha", joinedOn: "2025-12-31" },
// // //   { id: 2, name: "Arjun", joinedOn: "2025-01-10" },
// // //   { id: 3, name: "Sneha", joinedOn: "2024-11-15" },
// // //   { id: 4, name: "Dev", joinedOn: "2025-02-01" }
// // // ];
// // // let julyjoined = employees.filter((emp)=>emp.joinedOn > "2025-07-01");
// // // console.log(julyjoined);


// // // // ------------------------------------------------------

// // // const events = [
// // //   { id: 1, name: "Workshop", date: "2025-04-26" }, 
// // //   { id: 2, name: "Hackathon", date: "2025-04-27" }, 
// // //   { id: 3, name: "Seminar", date: "2025-04-25" },
// // //   { id: 4, name: "Webinar", date: "2025-04-28" } 
// // // ];
// // // let weekendevents =  events.filter((e)=> 
// // // {
// // //     let day = new Date(e.date).getDay();
// // //     return day === 0 || day === 6;
// // // });
// // // console.log(weekendevents);


// // // // ---------------------------------------------------------

// // const subscriptions = [
// //     { id: 1, user: "Kiran", expiresOn: "2025-04-24" },
// //     { id: 2, user: "Rajat", expiresOn: "2025-04-30" },
// //     { id: 3, user: "Simran", expiresOn: "2025-05-02" },
// //     { id: 4, user: "Ajay", expiresOn: "2025-04-23" }
// // ];
// // let currentdate = new Date("2025-04-23");
// // let next7day = new Date(currentdate);
// // next7day.setDate(currentdate.getDate() + 7);
// // next7day = currentdate.toISOString().split("T")[0];
// // currentdate = currentdate.toISOString().split("T")[0];
// // console.log(next7day);


// // const notifiedusers = subscriptions.filter(
// //     (sub) => sub.expiresOn >= currentdate && sub.expiresOn <=next7day
// // );
// // console.log(notifiedusers);

// // // ------------------------------------------------------------

// // const employees = [
// //   { name: "Ravi", joinedOn: "2024-06-15" },
// //   { name: "Sneha", joinedOn: "2023-07-09" },
// //   { name: "Ayan", joinedOn: "2025-01-01" }
// // ];

// // const today = new Date("2025-07-10");

// // const completedOneYear = employees.filter(emp => {
// //   const joinedDate = new Date(emp.joinedOn);
// //   const diffInTime = today - joinedDate;
// //   const diffInDays = diffInTime / (1000 * 60 * 60 * 24);
// //   return diffInDays >= 365;
// // });

// // console.log(completedOneYear);


// // // ----------------------------------------------

// // const employees = [
// //   { name: "Kriti", joinedOn: "2022-05-01" },
// //   { name: "Dev", joinedOn: "2024-03-12" },
// //   { name: "Ayan", joinedOn: "2021-06-10" }
// // ];

// // const today = new Date("2025-07-10");

// // const count = employees.filter(emp => {
// //   const joinedDate = new Date(emp.joinedOn);
// //   const diffInTime = today - joinedDate;
// //   const diffInYears = diffInTime / (1000 * 60 * 60 * 24 * 365);
// //   return diffInYears > 2;
// // }).length;

// // console.log("Employees with more than 2 years tenure:", count);


// // ---------------------------------------
// const employes = [
//   { name: "Kriti", joinedOn: "2022-05-01" },
//   { name: "Dev", joinedOn: "2024-03-12" },
//   { name: "Ayan", joinedOn: "2021-06-10" }, 
//   { name: "Rahul", joinedOn: "2025-06-10" }, 
//   { name: "Verma", joinedOn: "2025-07-11" }, 
//   { name: "Devansh", joinedOn: "2026-16-02" }
// ];
// // const today = new Date().getFullYear();
// // console.log(today);
// // console.log(typeof today);
// // const yesterday = new Date().getFullYear();
// // console.log(today);
// // const days = today - yesterday;
// // console.log(days);

// const count = employes.filter(emp => {
//    const joinedDate = new Date(emp.joinedOn);
//    const diffInTime = today - joinedDate;
//    const diffInYears = diffInTime / (1000 * 60 * 60 * 24 * 365);
//    return diffInYears > 2;
// });
// console.log(count);



// let today = new Date();
// let yesterdays = new Date("2025-10-11");
// console.log(today)


const users = ["Devraj", "Ravi", "kdev007", "Deval", "Amit"];

const matchedUsers = users.filter(user => user.toLowerCase().includes("dev"));
console.log(matchedUsers);
