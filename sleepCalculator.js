const getSleepHours = (day) => {
  
  if (day === 'monday') {
    return 8;
  }
  
  else if (day === 'tuesday'){
    return 7;
  }
  
   else if (day === 'wednesday'){
    return 8;
  }
  
   else if (day === 'thursday'){
    return 7.5;
  }
  
   else if (day === 'friday'){
    return 9;
  }
  
   else if (day === 'saturday'){
    return 9;
  }
  
   else if (day === 'sunday'){
    return 8;
  }
};

const getActualSleepHours = () => 
getSleepHours('monday') +
getSleepHours('tuesday') +
getSleepHours('wednesday') +
getSleepHours('thursday') +
getSleepHours('friday') +
getSleepHours('saturday') +
getSleepHours('sunday');
      
const getIdealSleepHours = () =>{
const idealHours = 7.5;
return idealHours * 7;
};

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep!');
  }
  
  else if (actualSleepHours > idealSleepHours){
    console.log('You got more sleep than needed! You slept ' + (actualSleepHours-idealSleepHours) + ' more than needed!');
  }
  
  else if (actualSleepHours < idealSleepHours){
  	console.log('You did not get enough sleep! You got' + (idealSleepHours-actualSleepHours) + ' less sleep than needed!')
	}
  
  else {
    console.log('Error! Something went wrong, try again!')
  }
};

console.log(calculateSleepDebt());
