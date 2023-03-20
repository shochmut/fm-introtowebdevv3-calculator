// initialize calculator value
storedNum = '0';

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
    break;
    case 'backspace':
      storedNum = storedNum.slice(0,-1)
    break;
    case 'divide':
      divide(storedNum)
    break;
    case 'multiply':
    
    break;
    case 'subtract':

    break;
    case 'add':

    break;
    case 'equals':

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
const divide = (firstNum) => {
  

}



