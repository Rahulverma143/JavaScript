console.log("Hr rond");
let task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("C programing start");
    resolve();
  }, 1000);
});
let task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("C++ programing start");
    resolve();
  }, 2000);
});
console.log("hr Round");
let task3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Html start");
  }, 3000);
});
let task4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Css start");
    resolve();
  },4000);
});

task2
  .then(() => {
    return task3;
  })
  .then(() => {
    return task1;
  })
   .then(() => {
    return task4;
  })
  .catch((e) => {
    console.log(e);
  });
 