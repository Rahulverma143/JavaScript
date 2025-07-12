// Map 
const names = ['Rita kumar', 'Anil Roy'];
const emails = names.map(name => {
  const email = name.toLowerCase().replace(" ", ".");
  return `${email}@company.com`;
});
console.log(emails);