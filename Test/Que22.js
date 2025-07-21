console.log(this); // window

let obj = {
  name: "Amit",
  greet: function() { console.log(this.name); }
};
obj.greet(); // Amit
