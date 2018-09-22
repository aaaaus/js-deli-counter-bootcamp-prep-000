var numberInLine = 0
function takeANumber (katzDeliLine) {
    numberInLine++
    katzDeliLine.push(`${numberInLine}`);
    return (`Welcome. You are number ${numberInLine}.`)
  }

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!");
  }
  else {
  return (`Currently serving ${katzDeliLine.shift()}.`)  
  }
}

var list = []
function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  }
  else {
    let i = 0;
    while (i < katzDeliLine.length) {
      list.push(` ` + [i+1] + `. ` + katzDeliLine[i])
      i++
    }
    return (`The line is currently:` + list)
  }
}