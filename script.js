const display1 = document.querySelector('.display');
let curInput = '0';
let fValue = '';
let oper = '';
let shouldReset = false;

document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    if (curInput === '0' || shouldReset) {
      curInput = button.value;
      shouldReset = false;
    } else {
      curInput += button.value;
    }
    display1.textContent = curInput;
  });
});

document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    if (oper !== '' && !shouldReset) {
      calculate();
    }
    fValue=curInput;
    oper=button.value;
    shouldReset=true;
  });
});

document.querySelector('.calculate').addEventListener('click', calculate);

document.querySelector('.clear').addEventListener('click', () => {
  curInput= '0';
  fValue= '';
  oper= '';
  shouldReset = false;
  display1.textContent = curInput;
});

function calculate() {
  let result = 0;
  switch (oper) {
    case '+':
      result=parseFloat(fValue)+parseFloat(curInput);
      break;
    case '-':
      result=parseFloat(fValue)-parseFloat(curInput);
      break;
    case '*':
      result=parseFloat(fValue)*parseFloat(curInput);
      break;
    case '/':
      result=parseFloat(fValue)/parseFloat(curInput);
      break;
    default:
      break;
  }
  curInput = result.toString();
  display1.textContent = curInput;
}
