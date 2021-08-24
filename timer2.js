const setTimerOnDemand = (key) => {

  if (key === '\u0003') process.exit();

  if (key === "b") console.log("beep");

  const numbers = "123456789".split("");

  if (numbers.includes(key)) {
    console.log(`setting timer for ${key} seconds`);
    setTimeout(() => {
      console.log("beep");
    }, Number(key) * 1000);
  }

}

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8")

stdin.on("data", (key) => {
  setTimerOnDemand(key);
});
