function append(char) {
    const display = document.getElementById('display');
    display.value += char;
  }

function clearDisplay() {
    document.getElementById('display').value = '';
  }

function calculate() {
const display = document.getElementById('display');
    try {
      const result = eval(display.value);
      if (result === Infinity || result === -Infinity) {
        display.value = 'Lỗi chia 0';
      } else if (isNaN(result)) {
        display.value = 'Không hợp lệ';
      } else {
        display.value = result;
      }
    } catch (e) {
      display.value = 'Lỗi cú pháp';
    }
  }