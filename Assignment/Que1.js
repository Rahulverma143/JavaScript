 /* 1.  Add Course Code Prefix
 ['Math101', 'Eng102'] → ['COURSE: Math101', 'COURSE: Eng102'] */


const courses = ['Math101', 'Eng102'];
let courseId = courses.map((c) => `COURSE: ${c}`);
console.log(courseId);

// -----------------------------------------------------------------------

/* 2.  Student Names to Lowercase for Login
 ['Rahul Sharma', 'Anita Das'] → ['rahul.sharma', 'anita.das'] */



const  employees= ["Rahul Verma", "Anita Das"];
let ans = employees.map((e) => e.toLowerCase().replace(" ", "."));
console.log(ans);