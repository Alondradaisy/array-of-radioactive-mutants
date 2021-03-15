/******************
 * YOUR CODE HERE *
 ******************/

const arr1 = ['p1','p2']
function addMeToEnd(array) {
  array.push('Colin'); 
};

function addMeToStart(array) {
  const arr2 = ['check', 'check']
  array.unshift('Colin');
};


function changeLast(arr, value) {
  arr[arr.length -1] = value;
};


function changeAllValuesTo(arr3, value) {
  for (let i = 0; i <arr3.length; i++) {
    arr3[i] = value;
  }
};

const signs = [arr]
function oddOrEven(signs) {
  let odd = 1;
  let even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] & 2 === 1)
    array[i] = 'odd'; //if there's a remainder of 1, it's odd
  } else {
    arr[i] = 'even';
  }
};


function changeNextThreeToValue(index, array,value) {
  for (let i = index; i < index+3; i++) {
    array[i] = value;
  }
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
