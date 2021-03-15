/******************
 * YOUR CODE HERE *
 ******************/

const arr1 = ['p1','p2']
function addMeToEnd('Colin') {
  arr1.push(addMeToEnd); 
};

function addMeToStart('Colin') {
  const arr2 = ['check', 'check']
  arr2.unshift(addMeToStart);
};

const arr = [num1, num2, num3]
function changeLast(arr) {
  arr.splice(changeLast);
};

const arr3 = [num1, num2, num3]
function changeAllValuesTo(arr3) {
  arr3.splice(0,3);
};

const signs = [arr]
function oddOrEven(signs) {
  let odd = 1;
  let even = 0;
  for (let i = 0; i < arr.signs; i++) {
    if (arr[i] & 1 === 1)
    return odd;
  } else {
    return even;
  }
};

const consecutiveValues = [value1, value2, value3, value4]
function changeNextThreeToValue(consecutiveValues) {
  const startingIndex = 2
  consecutiveValues.splice(2,3);
} 

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
