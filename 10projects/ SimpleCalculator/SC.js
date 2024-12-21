document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");

  let currentOperand = "";
  let previousOperand = "";
  let currentOperator = null;

  // Function to update the display
  function updateDisplay() {
    display.value = currentOperand || "0";
  }

  // Function to handle number button clicks
  function handleNumberClick(event) {
    const value = event.target.textContent;
    currentOperand += value;
    updateDisplay();
  }

  // Function to handle operator button clicks
  function handleOperatorClick(event) {
    const operator = event.target.textContent;

    if (operator === "C") {
      currentOperand = "";
      previousOperand = "";
      currentOperator = null;
    } else if (operator === "=") {
      if (previousOperand && currentOperand && currentOperator) {
        calculate();
      }
    } else {
      if (currentOperand) {
        if (previousOperand) calculate();
        currentOperator = operator;
        previousOperand = currentOperand;
        currentOperand = "";
      }
    }
    updateDisplay();
  }

  // Function to perform the calculation
  function calculate() {
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(curr)) return;

    let result;
    switch (currentOperator) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "/":
        result = curr !== 0 ? prev / curr : "Error";
        break;
      default:
        return;
    }

    currentOperand = result.toString();
    previousOperand = "";
    currentOperator = null;
  }

  // Add event listeners to number buttons
  numberButtons.forEach((button) =>
    button.addEventListener("click", handleNumberClick)
  );

  // Add event listeners to operator buttons
  operatorButtons.forEach((button) =>
    button.addEventListener("click", handleOperatorClick)
  );

  // Initialize the display
  updateDisplay();
});
