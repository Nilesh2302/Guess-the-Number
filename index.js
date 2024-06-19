let r = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function guess() {
    let input = parseInt(document.getElementById("i").value);

    if (isNaN(input) || input < 1 || input > 100) {
        setMessage('Please enter a number between 1 and 100', 'red');
    } else if (input === r) {
        setMessage(`Congratulations! You guessed the number ${r}`, 'green');
        document.body.style.backgroundColor = 'green';
        disableInput();
    } else if (input < r) {
        setMessage('Too low...', 'black');
    } else if (input > r) {
        setMessage('Too high...', 'black');
    }

    attempts--;
    document.getElementById("attempt").textContent = attempts;

    if (attempts === 0) {
        setMessage(`Game Over! The correct number was ${r}`, 'red');
        document.body.style.backgroundColor = 'red';
        disableInput();
    }
}

function disableInput() {
    document.getElementById("i").disabled = true;
    document.getElementById("g1").disabled = true;
}

function setMessage(message, color) {
    const ele = document.getElementById("res");
    ele.textContent = message;
    ele.style.color = color;
}