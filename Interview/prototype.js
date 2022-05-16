let object = {
  fname: "kushal",
  lname: "sojitra",
  geert: function () {
    console.log(this.fname + " " + this.lname);
  },
};

let object2 = {
  fname: "rutu",
};
console.log(object.fname);
object2.__proto__ = object;
console.log(object2.lname);
