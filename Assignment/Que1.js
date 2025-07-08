// Add Course Code Prefix
//  ['Math101', 'Eng102'] → ['COURSE: Math101', 'COURSE: Eng102']


const courses = ['Math101', 'Eng102'];
let courseId = courses.map((c) => `COURSE: ${c}`);
console.log(courseId);