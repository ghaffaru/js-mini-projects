let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 32;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Your racenumber is ${raceNumber}. Race starts at 9:30am`)
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your racenumber is ${raceNumber}. Race starts at 11:00am`)
} else if (runnerAge < 18 ) {
  console.log(`Your racenumber is ${raceNumber}. Race starts at 12:30am`);

} else {
  console.log(`See the registeration desk`);
}