// let a = { greeting: "kushal" };

// let b;

// b = a;

// a.greeting = "rutu";

// console.log(b.greeting);

//spread oprater

let a = { greeting: "kushal" };

let b;

b = { ...a };

a.greeting = "rutu";

console.log(b.greeting);
