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

// --------------------------------------------------------------------------

/* 6. Apply GST of 18% to Prices
 [100, 200, 500] → [118, 236, 590]  */


const prices = [100, 200, 500];

const pricesWithGST = prices.map(price => price * 1.18);

console.log(pricesWithGST);

// -------------------------------------------------------------------------

/* 7. Attach SKU Prefix
 ['A123', 'B456'] → ['SKU-A123', 'SKU-B456'] */

 const codes = ['A123', 'B456'];
const skuCodes = codes.map(code => 'SKU-' + code);

console.log(skuCodes); // Output: ['SKU-A123', 'SKU-B456']

//------------------------------------------------------------------------------

/* 8. Create Cart Summary with Quantity 1
 ['Mouse', 'Keyboard'] → [{ item: 'Mouse', quantity: 1 }, { item: 'Keyboard', quantity: 1 }] */


const products = ['Mouse', 'Keyboard'];
const cartSummary = products.map(item => ({item: item,quantity: 1}));
console.log(cartSummary);
// Output: [{ item: 'Mouse', quantity: 1 }, { item: 'Keyboard', quantity: 1 }]


/* 9 Add Availability Status
 ['Item1', 'Item2'] → [{ name: 'Item1', available: true }, { name: 'Item2', available: true }] */

 const items = ['Item1', 'Item2'];
const availableItems = items.map(name => ({name: name,available: true}));
console.log(availableItems);
// Output: [{ name: 'Item1', available: true }, { name: 'Item2', available: true }]


/* 10. Price to Text Format
 [499, 899] → ['Price: ₹499', 'Price: ₹899'] */

const pricess = [499, 899];
const priceTexts = pricess.map(price => `Price: ₹${price}`);
console.log(priceTexts);
// Output: ['Price: ₹499', 'Price: ₹899']

/* 11. Append Batch Year
 ['Amit', 'Neha'] → ['Amit - 2020', 'Neha - 2020'] */

 const names = ['Amit', 'Neha'];
const batchYearNames = names.map(name => `${name} - 2020`);
console.log(batchYearNames);
// Output: ['Amit - 2020', 'Neha - 2020']

/* 12. Generate Student Emails
 ['Raj Verma', 'Kavita Rai'] → ['raj.verma@univ.com', 'kavita.rai@univ.com'] */

 const students = ['Raj Verma', 'Kavita Rai'];

const emails = students.map(name => {
  const emailName = name.toLowerCase().replace(/\s+/g, '.');
  return `${emailName}@univ.com`;});

console.log(emails);
// Output: ['raj.verma@univ.com', 'kavita.rai@univ.com']

/* 13. Convert Subject Names to Uppercase
 ['history', 'geography'] → ['HISTORY', 'GEOGRAPHY'] */

const subjects = ['history', 'geography'];
const upperSubjects = subjects.map(subject => subject.toUpperCase());
console.log(upperSubjects);
// Output: ['HISTORY', 'GEOGRAPHY']

/*14. Student Roll Numbers Formatting
 [101, 102] → ['Roll#101', 'Roll#102']  */

const rollNumbers = [101, 102];
const formattedRolls = rollNumbers.map(roll => `Roll#${roll}`);
console.log(formattedRolls);
// Output: ['Roll#101', 'Roll#102']

/*15. Assign All Students to Same Section
 ['S1', 'S2'] → [{ id: 'S1', section: 'A' }, { id: 'S2', section: 'A' }]  */

 const student = ['S1', 'S2'];
const assignedSections = student.map(id => ({id: id,section: 'A'}));
console.log(assignedSections);
// Output: [{ id: 'S1', section: 'A' }, { id: 'S2', section: 'A' }]

/*16. Add Status to Leads
 ['Lead1', 'Lead2'] → [{ name: 'Lead1', status: 'new' }, { name: 'Lead2', status: 'new' }] */

const leads = ['Lead1', 'Lead2'];
const leadStatus = leads.map(name => ({name: name,status: 'new'}));
console.log(leadStatus);
// Output: [{ name: 'Lead1', status: 'new' }, { name: 'Lead2', status: 'new' }]


/*17. Client Name Capitalization
 ['reliance', 'tcs'] → ['Reliance', 'Tcs'] */

const clients = ['reliance', 'tcs'];
const capitalizedClients = clients.map(name =>  name.charAt(0).toUpperCase() + name.slice(1));
console.log(capitalizedClients);
// Output: ['Reliance', 'Tcs']


/* 18. Format Client Codes
 ['C01', 'C02'] → ['CLIENT-C01', 'CLIENT-C02'] */

 const clientCodes = ['C01', 'C02'];
const formatCodes = clientCodes.map(code => 'CLIENT-' + code);
console.log(formatCodes);


// const names = ['Rita kumar', 'Anil Roy'];
// const emails = names.map(name => {
//   const email = name.toLowerCase().replace(" ", ".");
//   return `${email}@company.com`;
// });
// console.log(emails);
/* 19 . Transform Invoices to PDF links
 [301, 302] → ['/invoices/301.pdf', '/invoices/302.pdf'] */

// const invoices = [301, 302];
// const pdfLinks = invoices.map(id => `/invoices/${id}.pdf`);
// console.log(pdfLinks);

/* 20 . Add Department Info
 ['John', 'Mira'] → ['John - Sales', 'Mira - Sales'] */

// const Name = ['John', 'Mira'];
// const updatedList = Name.map(name => name + ' - Sales');
// console.log(updatedList);


/* Employee IDs to Short Format
 ['EMP001', 'EMP002'] → ['001', '002'] */

const ids = ['EMP001', 'EMP002'];
const employeesIds = ids.map(emp => `Employee Code: ${emp}`);
console.log(employeesIds);



