//  filter

const doctors = [
  { id: 1, name: "Dr. Renu", experience: 10 },
  { id: 2, name: "Dr. Sameer", experience: 3 },
  { id: 3, name: "Dr. Alok", experience: 8 },
  { id: 4, name: "Dr. Namrata", experience: 2 }
];

const experiencedDoctors = doctors.filter(doctor => doctor.experience > 5);
console.log(experiencedDoctors)




// ------------------------------------------------------------------------------


/*
1. Filter all patients who are admitted currently.
const patients = [
  { id: 1, name: "Rohan", admitted: true },
  { id: 2, name: "Anjali", admitted: false },
  { id: 3, name: "Vikram", admitted: true },
  { id: 4, name: "Sita", admitted: false }
*/



const patients = [
    { id: 1, name: "Rohan", admitted: true },
    { id: 2, name: "Anjali", admitted: false },
    { id: 3, name: "Vikram", admitted: true },
    { id: 4, name: "Sita", admitted: false }
  ];
  const whoAdmited=patients.filter((p)=>p.admitted===true);
  console.log(whoAdmited);


/*
2. Filter doctors who are available today.
const doctors = [
  { id: 1, name: "Dr. Meena", availableToday: true },
  { id: 2, name: "Dr. Ali", availableToday: false },
  { id: 3, name: "Dr. Tara", availableToday: true },
  { id: 4, name: "Dr. Ronit", availableToday: false }
];
*/
const doctors = [
    { id: 1, name: "Dr. Meena", availableToday: true },
    { id: 2, name: "Dr. Ali", availableToday: false },
    { id: 3, name: "Dr. Tara", availableToday: true },
    { id: 4, name: "Dr. Ronit", availableToday: false }
  ];
const isAwailable=doctors.filter((available)=>available.availableToday===true);
console.log(isAwailable);


/*
3. Filter patients whose age is more than 60.
const patients = [
  { id: 1, name: "Dinesh", age: 65 },
  { id: 2, name: "Sunita", age: 45 },
  { id: 3, name: "Mahesh", age: 72 },
  { id: 4, name: "Komal", age: 58 }
];
*/
// const patient = [
//     { id: 1, name: "Dinesh", age: 65 },
//     { id: 2, name: "Sunita", age: 45 },
//     { id: 3, name: "Mahesh", age: 72 },
//     { id: 4, name: "Komal", age: 58 }
//   ];
//   const above60=patient.filter((a)=>a.age>60);
//   console.log(above60);



/*4. Filter hospital staff who are nurses.
const staff = [
  { id: 1, name: "Pooja", role: "Nurse" },
  { id: 2, name: "Raj", role: "Doctor" },
  { id: 3, name: "Lata", role: "Nurse" },
  { id: 4, name: "Amit", role: "Receptionist" }
]; */

const staff = [
  { id: 1, name: "Pooja", role: "Nurse" },
  { id: 2, name: "Raj", role: "Doctor" },
  { id: 3, name: "Lata", role: "Nurse" },
  { id: 4, name: "Amit", role: "Receptionist" }
];
const nurses=staff.filter(N=>N.role==="Nurse");
console.log(nurses)



/*5. Filter ICU patients.
const patients = [
  { id: 1, name: "Karan", ward: "ICU" },
  { id: 2, name: "Seema", ward: "General" },
  { id: 3, name: "Nitin", ward: "ICU" },
  { id: 4, name: "Suman", ward: "Private" }
];*/

 const patient = [
  { id: 1, name: "Karan", ward: "ICU" },
  { id: 2, name: "Seema", ward: "General" },
  { id: 3, name: "Nitin", ward: "ICU" },
  { id: 4, name: "Suman", ward: "Private" }
];
const ICuPatients=patient.filter(p=>p.ward==='ICU');
console.log(ICuPatients);



// 6. Filter doctors who have more than 5 years of experience.
// const doctors = [
//   { id: 1, name: "Dr. Renu", experience: 10 },
//   { id: 2, name: "Dr. Sameer", experience: 3 },
//   { id: 3, name: "Dr. Alok", experience: 8 },
//   { id: 4, name: "Dr. Namrata", experience: 2 }
// ];

//  const doctors = [
//   { id: 1, name: "Dr. Renu", experience: 10 },
//   { id: 2, name: "Dr. Sameer", experience: 3 },
//   { id: 3, name: "Dr. Alok", experience: 8 },
//   { id: 4, name: "Dr. Namrata", experience: 2 }
// ];
// const experienceAbove5=doctors.filter(E=>E.experience>5);
// console.log(experienceAbove5);



/*
7. Filter patients with pending bills.
const patients = [
  { id: 1, name: "Aarti", pendingBill: true },
  { id: 2, name: "Rakesh", pendingBill: false },
  { id: 3, name: "Deepak", pendingBill: true },
  { id: 4, name: "Kavita", pendingBill: false }
];
*/
// const patients = [
//   { id: 1, name: "Aarti", pendingBill: true },
//   { id: 2, name: "Rakesh", pendingBill: false },
//   { id: 3, name: "Deepak", pendingBill: true },
//   { id: 4, name: "Kavita", pendingBill: false }
// ];
// const pendingBill=patients.filter(p=>p.pendingBill==true);
// console.log(pendingBill)



/*
8. Filter hospital equipment that needs maintenance.
const equipment = [
  { id: 1, name: "ECG Machine", needsMaintenance: true },
  { id: 2, name: "Ventilator", needsMaintenance: false },
  { id: 3, name: "Suction Pump", needsMaintenance: true },
  { id: 4, name: "Ultrasound", needsMaintenance: false }
];
*/
// const equipment = [
//   { id: 1, name: "ECG Machine", needsMaintenance: true },
//   { id: 2, name: "Ventilator", needsMaintenance: false },
//   { id: 3, name: "Suction Pump", needsMaintenance: true },
//   { id: 4, name: "Ultrasound", needsMaintenance: false }
// ];
// const needMaintenance=equipment.filter(m=>m.needsMaintenance==true);
// console.log(needMaintenance)


/*
9. Filter ambulance drivers who are on duty.
const drivers = [
  { id: 1, name: "Suraj", onDuty: true },
  { id: 2, name: "Harish", onDuty: false },
  { id: 3, name: "Neeraj", onDuty: true },
  { id: 4, name: "Aakash", onDuty: false }
];
*/

 const drivers = [
  { id: 1, name: "Suraj", onDuty: true },
  { id: 2, name: "Harish", onDuty: false },
  { id: 3, name: "Neeraj", onDuty: true },
  { id: 4, name: "Aakash", onDuty: false }
];

const onduty=drivers.filter(D=>D.onDuty===true);
console.log(onduty);

/*
 10. Filter medicines that are out of stock.
const medicines = [
  { id: 1, name: "Paracetamol", inStock: false },
  { id: 2, name: "Amoxicillin", inStock: true },
  { id: 3, name: "Ibuprofen", inStock: false },
  { id: 4, name: "Metformin", inStock: true }
];

 */

const medicines = [
  { id: 1, name: "Paracetamol", inStock: false },
  { id: 2, name: "Amoxicillin", inStock: true },
  { id: 3, name: "Ibuprofen", inStock: false },
  { id: 4, name: "Metformin", inStock: true }
];

const outofstock=medicines.filter(e=>e.inStock===false);
console.log(outofstock);

/*
11. Filter employees who are currently on leave.
const employees = [
  { id: 1, name: "Ravi", onLeave: false },
  { id: 2, name: "Priya", onLeave: true },
  { id: 3, name: "Arjun", onLeave: true },
  { id: 4, name: "Neha", onLeave: false }
];
*/
const employees = [
  { id: 1, name: "Ravi", onLeave: false },
  { id: 2, name: "Priya", onLeave: true },
  { id: 3, name: "Arjun", onLeave: true },
  { id: 4, name: "Neha", onLeave: false }
];

const empCurrentlyOnLeave=employees.filter(emp=>emp.onLeave===true);
console.log(empCurrentlyOnLeave)


/*
 12. Filter employees with pending performance reviews.
const employees = [
  { id: 1, name: "Rahul", reviewPending: true },
  { id: 2, name: "Sneha", reviewPending: false },
  { id: 3, name: "Imran", reviewPending: true },
  { id: 4, name: "Ritu", reviewPending: false }
];
*/

// const employees = [
//   { id: 1, name: "Rahul", reviewPending: true },
//   { id: 2, name: "Sneha", reviewPending: false },
//   { id: 3, name: "Imran", reviewPending: true },
//   { id: 4, name: "Ritu", reviewPending: false }
// ];
// const empPendingPerfo=employees.filter(e=>e.reviewPending==true);
// console.log(empPendingPerfo)


/*
13. Filter employees who joined in the current financial year.
const employees = [
  { id: 1, name: "Meera", joiningYear: 2023 },
  { id: 2, name: "Aakash", joiningYear: 2022 },
  { id: 3, name: "Suman", joiningYear: 2023 },
  { id: 4, name: "Nikhil", joiningYear: 2021 }
];
*/

// const employees = [
//   { id: 1, name: "Meera", joiningYear: 2025 },
//   { id: 2, name: "Aakash", joiningYear: 2022 },
//   { id: 3, name: "Suman", joiningYear: 2025 },
//   { id: 4, name: "Nikhil", joiningYear: 2021 }
// ];
// const joinedCurrYear=employees.filter(e=>{
//   let curryear=new Date().getFullYear();
//   return e.joiningYear==curryear;
// })

// console.log(joinedCurrYear);


/*
14. Filter employees with designation as "Software Engineer".
const employees = [
  { id: 1, name: "Tanvi", designation: "Software Engineer" },
  { id: 2, name: "Rakesh", designation: "HR Manager" },
  { id: 3, name: "Leena", designation: "Software Engineer" },
  { id: 4, name: "Abhishek", designation: "QA Analyst" }
];
*/
// const employees = [
//   { id: 1, name: "Tanvi", designation: "Software Engineer" },
//   { id: 2, name: "Rakesh", designation: "HR Manager" },
//   { id: 3, name: "Leena", designation: "Software Engineer" },
//   { id: 4, name: "Abhishek", designation: "QA Analyst" }
// ];
// const softwareEng=employees.filter(e=>e.designation==="Software Engineer");
// console.log(softwareEng)



/*
15. Filter employees whose salary is above ₹80,000.
const employees = [
  { id: 1, name: "Aditya", salary: 75000 },
  { id: 2, name: "Kiran", salary: 90000 },
  { id: 3, name: "Divya", salary: 82000 },
  { id: 4, name: "Manav", salary: 70000 }
];
*/
// const employees = [
//   { id: 1, name: "Aditya", salary: 75000 },
//   { id: 2, name: "Kiran", salary: 90000 },
//   { id: 3, name: "Divya", salary: 82000 },
//   { id: 4, name: "Manav", salary: 70000 }
// ];
// const highSallery=employees.filter(e=>e.salary>80000);
// console.log(highSallery);


/*
16. Filter doctors who specialize in cardiology.
const doctors = [
  { id: 1, name: "Dr. Asha", specialty: "Cardiology" },
  { id: 2, name: "Dr. Vivek", specialty: "Dermatology" },
  { id: 3, name: "Dr. Neha", specialty: "Cardiology" },
  { id: 4, name: "Dr. Ravi", specialty: "Neurology" }
];
*/
// const doctors = [
//   { id: 1, name: "Dr. Asha", specialty: "Cardiology" },
//   { id: 2, name: "Dr. Vivek", specialty: "Dermatology" },
//   { id: 3, name: "Dr. Neha", specialty: "Cardiology" },
//   { id: 4, name: "Dr. Ravi", specialty: "Neurology" }
// ];

// const cardiology=doctors.filter(e=>e.specialty==="Cardiology");
// console.log(cardiology);


/*
17. Filter doctors who have a rating above 4.5.
const doctors = [
  { id: 1, name: "Dr. Sara", rating: 4.8 },
  { id: 2, name: "Dr. Rohit", rating: 4.2 },
  { id: 3, name: "Dr. Isha", rating: 4.9 },
  { id: 4, name: "Dr. Vinay", rating: 4.0 }
];
*/
// const doctors = [
//   { id: 1, name: "Dr. Sara", rating: 4.8 },
//   { id: 2, name: "Dr. Rohit", rating: 4.2 },
//   { id: 3, name: "Dr. Isha", rating: 4.9 },
//   { id: 4, name: "Dr. Vinay", rating: 4.0 }
// ];
// const highratting=doctors.filter(doc=>doc.rating>4.5);
// console.log(highratting);


/*
18. Filter doctors who offer online consultation.
const doctors = [
  { id: 1, name: "Dr. Tanya", onlineConsultation: true },
  { id: 2, name: "Dr. Imran", onlineConsultation: false },
  { id: 3, name: "Dr. Farah", onlineConsultation: true },
  { id: 4, name: "Dr. Kunal", onlineConsultation: false }
];
*/
// const doctors = [
//   { id: 1, name: "Dr. Tanya", onlineConsultation: true },
//   { id: 2, name: "Dr. Imran", onlineConsultation: false },
//   { id: 3, name: "Dr. Farah", onlineConsultation: true },
//   { id: 4, name: "Dr. Kunal", onlineConsultation: false }
// ];
// const docOclineConsult=doctors.filter(doc=>doc.onlineConsultation===true);
// console.log(docOclineConsult);


/*
19. Filter doctors with more than 1000 consultations.
const doctors = [
  { id: 1, name: "Dr. Arya", consultations: 1200 },
  { id: 2, name: "Dr. Vikas", consultations: 850 },
  { id: 3, name: "Dr. Sneha", consultations: 1300 },
  { id: 4, name: "Dr. Raj", consultations: 700 }
];
*/
// const doctors = [
//   { id: 1, name: "Dr. Arya", consultations: 1200 },
//   { id: 2, name: "Dr. Vikas", consultations: 850 },
//   { id: 3, name: "Dr. Sneha", consultations: 1300 },
//   { id: 4, name: "Dr. Raj", consultations: 700 }
// ];
// const experiencedDoc=doctors.filter(doc=>doc.consultations>1000);
// console.log(experiencedDoc);


/*
20. Filter doctors located in "Kolkata".
const doctors = [
  { id: 1, name: "Dr. Mehul", city: "Mumbai" },
  { id: 2, name: "Dr. Nandita", city: "Kolkata" },
  { id: 3, name: "Dr. Dev", city: "Kolkata" },
  { id: 4, name: "Dr. Anu", city: "Delhi" }
];
*/
// const doctors = [
//   { id: 1, name: "Dr. Mehul", city: "Mumbai" },
//   { id: 2, name: "Dr. Nandita", city: "Kolkata" },
//   { id: 3, name: "Dr. Dev", city: "Kolkata" },
//   { id: 4, name: "Dr. Anu", city: "Delhi" }
// ];

// const docinKolkata=doctors.filter(doc=>doc.city==="Kolkata");
// console.log(docinKolkata)
















/*
23. Filter products that are out of stock.
const inventory = [
  { id: 1, name: "Tablet", inStock: true },
  { id: 2, name: "Laptop", inStock: false },
  { id: 3, name: "Headphones", inStock: false },
  { id: 4, name: "Charger", inStock: true }
];
*/
// const inventory = [
//     { id: 1, name: "Tablet", inStock: true },
//     { id: 2, name: "Laptop", inStock: false },
//     { id: 3, name: "Headphones", inStock: false },
//     { id: 4, name: "Charger", inStock: true }
//   ];
//   const outofstock=inventory.filter(e=>e.inStock===false);
//   console.log(outofstock);

/*
27. Filter courses with duration more than 6 months.
const courses = [
  { id: 1, name: "Full Stack Dev", duration: 12 },
  { id: 2, name: "Data Entry", duration: 3 },
  { id: 3, name: "AI & ML", duration: 8 },

 */
// const courses = [
//     { id: 1, name: "Full Stack Dev", duration: 12 },
//     { id: 2, name: "Data Entry", duration: 3 },
//     { id: 3, name: "AI & ML", duration: 8 },
// ];
// const maxdur=courses.filter(course=>course.duration>6);
// console.log(maxdur);



/*
38. Filter subscriptions that are going to expire within the next 7 days from "2025-04-23".
const subscriptions = [
  { id: 1, user: "Kiran", expiresOn: "2025-04-24" },
  { id: 2, user: "Rajat", expiresOn: "2025-04-30" },
  { id: 3, user: "Simran", expiresOn: "2025-05-02" },
  { id: 4, user: "Ajay", expiresOn: "2025-04-23" }
];
*/

// const subscriptions = [
//     { id: 1, user: "Kiran", expiresOn: "2025-04-24" },
//     { id: 2, user: "Rajat", expiresOn: "2025-04-30" },
//     { id: 3, user: "Simran", expiresOn: "2025-05-02" },
//     { id: 4, user: "Ajay", expiresOn: "2025-04-23" }
//   ];

// const currdate=new Date("2025-04-23");
// let next7day=new Date(currdate);
// next7day.setDate(currdate.getDate()+7);
// // console.log(next7day)
// const dateafter7day=next7day.toISOString().split('T')[0];
// const todayDate=currdate.toISOString().split('T')[0];
// // console.log(dateafter7day);
// console.log(todayDate);
// const msg=subscriptions.filter(msg=>msg.expiresOn>=todayDate&&msg.expiresOn<dateafter7day);
// console.log(msg);




// 39. Filter events that are scheduled on weekends.
// const events = [
//   { id: 1, name: "Workshop", date: "2025-04-26" }, // Saturday
//   { id: 2, name: "Hackathon", date: "2025-04-27" }, // Sunday
//   { id: 3, name: "Seminar", date: "2025-04-25" }, // Friday
//   { id: 4, name: "Webinar", date: "2025-04-28" }  // Monday
// ];

// const events = [
//       { id: 1, name: "Workshop", date: "2025-04-26" }, // Saturday
//       { id: 2, name: "Hackathon", date: "2025-04-27" }, // Sunday
//       { id: 3, name: "Seminar", date: "2025-04-25" }, // Friday
//       { id: 4, name: "Webinar", date: "2025-04-28" }  // Monday
//     ];

// const weekendsevents=events.filter((e)=>{
//     const day=new Date(e.date).getDay();
//     return day===0||day===6;
// })
// console.log(weekendsevents);


/*
40. Filter employees who joined the company after 1st July 2025.
const employees = [
  { id: 1, name: "Isha", joinedOn: "2024-12-31" },
  { id: 2, name: "Arjun", joinedOn: "2025-01-10" },
  { id: 3, name: "Sneha", joinedOn: "2024-11-15" },
  { id: 4, name: "Dev", joinedOn: "2025-02-01" }
];
*/
// const employees = [
//     { id: 1, name: "Isha", joinedOn: "2025-12-31" },
//     { id: 2, name: "Arjun", joinedOn: "2025-01-10" },
//     { id: 3, name: "Sneha", joinedOn: "2024-11-15" },
//     { id: 4, name: "Dev", joinedOn: "2025-02-01" }
//   ];

// let newdata=employees.filter((emp)=>emp.joinedOn>"2025-07-01");
// console.log(newdata);

/*
 41.Find usernames containing "dev" (case-insensitive):
const users = ["Devraj", "Ravi", "kdev007", "Deval", "Amit"];
 */
// const users = ["Devraj", "Ravi", "kdev007", "Deval", "Amit"];
// const res = users.filter(user => user.toLowerCase().includes("dev"));
// console.log(res);

/*

46.Count employees whose tenure is more than 2 years:
const employees = [
  { name: "Kriti", joinedOn: "2022-05-01" },
  { name: "Dev", joinedOn: "2024-03-12" },
  { name: "Ayan", joinedOn: "2021-06-10" }
];
*/
// const employees = [
//   { name: "Kriti", joinedOn: "2022-05-01" },
//   { name: "Dev", joinedOn: "2024-03-12" },
//   { name: "Ayan", joinedOn: "2021-06-10" }
// ];
// const expOftwo=employees.filter(e=>{
//   let today=new Date();
//   let joined=new Date(e.joinedOn);
//   let exp=(today-joined)/(1000*60*60*24*365)
//   return exp>=2;
// })
// console.log(expOftwo)
