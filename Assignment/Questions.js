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

// ------------------------------------------------------------------------

/* 3.   Mark All Lessons as Incomplete
 ['Lesson 1', 'Lesson 2'] → [{ lesson: 'Lesson 1', completed: false }, { lesson: 'Lesson 2', completed: false }] */

 const lessons = ['Lesson 1', 'Lesson 2'];

const markedLessons = lessons.map(lesson => ({lesson: lesson,completed: false}));

console.log(markedLessons);


// -----------------------------------------------------------------------

 /* 4.  Attach Certificate Suffix
 ['Digital Marketing', 'Finance Basics'] → ['Digital Marketing - Certified', 'Finance Basics - Certified'] */

 const coursess = ['Digital Marketing', 'Finance Basics'];

const certifiedCourses = coursess.map(course => course + ' - Certified');

console.log(certifiedCourses);


// ----------------------------------------------------------------------

/* 5.  Convert Marks to Pass/Fail
 [65, 45, 30] → ['Pass', 'Pass', 'Fail']  */

 const marks = [65, 45, 30];

const result = marks.map(mark => mark >= 40 ? 'Pass' : 'Fail');

console.log(result);



