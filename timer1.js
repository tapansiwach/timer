const inputs = process.argv.slice(2);

const setAlarms = () => {

  const alarms = [];
  for (const input of inputs) {
    x = Number(input);

    if (Number.isNaN(x)) {
      continue;
    }
    if (x < 0) {
      continue;
    }

    alarms.push(x);
  }

  if (alarms.length === 0) {
    return;
  }

  for (const alarm of alarms) {
    setTimeout(() => {
      console.log("beep");
      // process.stdout.write('\x07') can be used to perform a system sound
      // (if workng in a place where other people are not disturbed) 
    }, alarm * 1000);
  }

}

setAlarms();