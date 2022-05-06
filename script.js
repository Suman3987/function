// this function return Hello user
function greeter(suman) {
  return (" Hello " + suman);
}
let greeting = greeter("london");
console.log(greeting)

// this function return the type?
function checkType(london) {
  return (typeof (london))
}
console.log(checkType(true))

// this function return length of the input 
function checkLength(unitedkingdom) {
  return unitedkingdom.length
}

console.log(checkLength("wembley"))

// this function return sum of two number
function addTwoNumber(one, two) {
  return one + two
}
console.log(addTwoNumber(4, 6))

// this function return the result of multiplying both sum together
function addAndMultiply(one, two, three, four) {
  let firstadd = one + two;
  let secondadd = three + four;
  let result = firstadd * secondadd;
  return result
}

console.log(addAndMultiply(3, 5, 7, 8))
console.log(addAndMultiply(6, 6, 3, 8))

// this function  return the larger number
function CheckLarger(one, two) {
  if (one > two) {
    return one
  } else {
    return two
  }
}
console.log(CheckLarger(73, 56));

// this function return sum of elements
function addArrNums(one) {
  let result = 0
  for (let i = 0; i < one.length; i++) {
    result = result + one[i]
  } return result
}
console.log(addArrNums([4, 3, 6, 8, 9, 7, 5]))
console.log(addArrNums([3, 5, 7, 2, 9, 8]))


// this function return squaring a number
function squareNumber(one) {
  return one * one
}
console.log(squareNumber(4))

// this function check if the number is even or odd
function oddOrEven(numberOne) {
  if (numberOne % 2 == 0) {
    return "Even"
  } else {
    return "odd"
  }
}
console.log(oddOrEven(8))

// this function return the sum of positive elements
function sumOfPositive(one) {
  let resultsum = 0
  for (let i = 0; i < one.length; i++) {
    if (0 < one[i]) {
      resultsum = resultsum + one[i]
    }
  }
  return resultsum
}
console.log(sumOfPositive([7, 3, 6, -9, -8, 2, 4, 0, 1]))


