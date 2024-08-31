const findNum = 34 // insert here the number you wish.

function findFib(num) {
  let num1 = 0
  let num2 = 1
  const limitFib = 1000

  if (num === 0) return (console.log("This number was found in Fibonacci Sequence"))
  if (num === 1) return (console.log("This number was found in Fibonacci Sequence"))

  for(let i = 2; i <= limitFib; i++) {
    nextNum = num1 + num2
    num1 = num2
    num2 = nextNum

    if (nextNum === num) return (console.log("This number was found in Fibonacci Sequence"))
  }

  return (console.log("This number was not found in Fibonacci Sequence :("))
}

findFib(findNum)

