let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

var runnersAge = 20;

if(registeredEarly === true && runnersAge > 18){
  raceNumber += 1000;
}

if (registeredEarly === true && runnersAge > 18){ 	console.log("You will race at 9:30 am and your race number is " + raceNumber);
                                                 
}else if (registeredEarly === false && runnersAge > 18){
  console.log("You will race at 11:00 am and your race number is " + raceNumber);
} else if (runnersAge < 18){
  console.log("You will race at 12:30 pm and your race number is " + raceNumber);
} else {
   console.log("Please see the registration desk!");
}
