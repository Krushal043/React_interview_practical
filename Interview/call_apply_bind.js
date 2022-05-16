let object = {
  fname: "Kushal",
  lname: "Sojitra",
};

function person(p1, p2) {
  console.log(p1 + " " + p2 + " " + this.fname + " " + this.lname);
}

person.call(object, "hello", "world");
person.apply(object, ["hello", "world"]);

var person2 = person.bind(object, "hello", "world");
console.log(person2);
person2();
