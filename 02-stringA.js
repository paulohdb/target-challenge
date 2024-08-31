const stringInput = "A DonA AranhA SubIu PelA PAredE" // insert here your string to check
const stringToCheck = stringInput.toLowerCase()

function Checker(str) {
  let counter = 0

  for(let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letter === 'a') counter++
  }

  return (console.log(`The letter "a" was found ${counter} times!`))
}

Checker(stringToCheck)