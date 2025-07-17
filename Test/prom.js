console.log("HR Round");
let task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("C Programming start");
    resolve();
  }, 1000);
});

let task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("C++ Programming start");
    resolve();
  }, 1000);
});

let task3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("HTML start");
    resolve();
  }, 1000);
});

let task4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("CSS start");
    resolve();
  }, 1000);
});

let task5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Tailwind start");
    resolve();
  }, 1000);
});

let task6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("HR Round again");
    resolve();
  }, 1000);
});

let task7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("JavaScript start");
    resolve();
  }, 1000);
});

let task8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("React start");
    resolve();
  }, 1000);
});

  task1
  .then(() => {
    return task2;
  })
  .then(() => {
    return task3;
  })
   .then(() => {
    return task4;
  })
   .then(() => {
    return task5;
  }) .then(() => {
    return task6;
  })
  .catch((e) => {
    console.log(e);
  });
 