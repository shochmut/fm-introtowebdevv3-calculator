// initialize calculator value
let storedNum = '0';
let workingNum = 0;
let previousOp = null;

// initialize event handling
const buttons = document.querySelector('.calculator')
buttons.addEventListener('click', function() {
  buttonClick(event.target.value)
  reRenderDisplay()
})

const buttonClick = (value) => {
  if (isNaN(value)) {
    handleSymbol(value)
  }
  else {
    handleNumber(value)
  }
}

const handleSymbol = (symbol) => {
  switch (symbol) {
    case 'reset':
      storedNum = '0'
      workingNum = 0
      previousOp = null
      break;
    case 'backspace':
      storedNum = storedNum.slice(0,-1)
      break;
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
      calculate(symbol)
      break;
    case 'equals':
      if (previousOp === null) {
        return;
      }
      domath(Number(storedNum))
      previousOp = null
      storedNum = "" + workingNum
      workingNum = 0
      break;
  }
}

const handleNumber = (number) => {
  if (storedNum === '0') {
    storedNum = number
  }
  else {
    storedNum += number
  }
}

const reRenderDisplay = () => {
  document.querySelector('.display').innerText = storedNum
}

//mathematical operation functions
const calculate = (symbol) => {
  if (storedNum ===0) {
    return;
  }

  const intStoredNum = Number(storedNum)
  if (workingNum === 0) {
    workingNum = intStoredNum
  }
  else {
    domath(intStoredNum)
  }

  previousOp = symbol
  storedNum = '0'
}

const domath = (intStoredNum) => {
  if (previousOp === 'add') {
    workingNum += intStoredNum
  } else if (previousOp === 'multiply') {
    workingNum *= intStoredNum
  } else if (previousOp === 'divide') {
    workingNum /= intStoredNum
  } else if (previousOp === 'subtract') {
    workingNum -= intStoredNum
  }
}



