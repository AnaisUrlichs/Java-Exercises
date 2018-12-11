let input = 'Hello, I am a whale';
input = input.toLowerCase();

console.log('Length of string', input.length);

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex ++) {
  
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    //console.log('voelIndex is ' + vowelIndex);
    if (input[inputIndex] === vowels[vowelIndex]){
      resultArray.push(input[inputIndex]);
    }
  }

if (input[inputIndex] === 'e'){
      resultArray.push(input[inputIndex]);
	}
}

console.log(myArray.join('').toUpperCase());
