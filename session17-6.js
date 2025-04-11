let currentInput = '';
    let operator = '';
    let firstNumber = '';
    function appendNumber(number) {
        currentInput += number;
        document.getElementById('display').value = currentInput;
    }
    function appendOperator(op) {
        if (currentInput === '') return;
        firstNumber = currentInput;
        operator = op;
        currentInput = '';
    }
    function calculateResult() {
        if (currentInput === '' || firstNumber === '') return; 
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(currentInput);
                break;
            case '/':
                if (currentInput == 0) {
                    alert("Không thể chia cho 0!");
                    result = 'Lỗi';
                } else {
                    result = parseFloat(firstNumber) / parseFloat(currentInput);
                }
                break;
            default:
                return;
        }
        document.getElementById('display').value = result;
        currentInput = result.toString();
        firstNumber = '';
        operator = '';
    }
    function clearScreen() {
        currentInput = '';
        firstNumber = '';
        operator = '';
        document.getElementById('display').value = '';
    }