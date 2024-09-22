const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        switch (buttonText) {
            case '=':
                currentInput = eval(currentInput);
                break;
            case 'AC':
                currentInput = "";
                break;
            case 'DEL':
                currentInput = currentInput.slice(0, -1);
                break;
            default:
                currentInput += buttonText;
        }

        input.value = currentInput;
    });
});
