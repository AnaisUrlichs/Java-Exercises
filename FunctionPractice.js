
// first function 
function someReusableFunction() {
    var ourArray = [1,2,3];
    var removedFromOurArray = ourArray.pop();

    var myArray = [["John", 23], ["cat", 2]];

    var removedFromMyArray = myArray.pop();

    console.log(removedFromMyArray);
}

someReusableFunction();

// second function
function anotherReusableFunction() {
    console.log("hi")
}

anotherReusableFunction();

//third function
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

// third function

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

// fourth function
function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

//fifth function

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
