let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("i am inside"), 5000);
});

async function person() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  console.log("i am outside");
}

person();
