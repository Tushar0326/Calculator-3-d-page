function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function appendNumber(number) {
    document.getElementById('display').value += number;
  }
  
  function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
      display.value = display.value.slice(0, -1);
    }
    display.value += operator;
  }
  
  function calculate() {
    try {
      const display = document.getElementById('display');
      display.value = eval(display.value);
    } catch (error) {
      alert('Invalid Expression');
    }
  }
  