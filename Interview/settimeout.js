//var
function ramdFunc() {
  for (var i = 0; i < 2; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}
ramdFunc();

//let
function ramdFunc1() {
  for (let i = 0; i < 2; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}
ramdFunc1();
