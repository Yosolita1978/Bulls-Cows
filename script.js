// computer generate 4 digit number randomize. 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let secretNumbers = [];
let guess = null

for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * 8)
    let randomNumber = numbers.splice(index - 1, 1)
    secretNumbers.push(randomNumber)
}

const container = document.getElementById('number-container');

secretNumbers.forEach(number => {
    const numberBox = document.createElement('div');
    numberBox.className = 'number-box';
    numberBox.textContent = number;
    container.appendChild(numberBox);
})

//check userInput and 

document.getElementById('guess-form').addEventListener('submit', function(e) {
    e.preventDefault();
    guess = document.getElementById('guess-input').value;
    const message = document.getElementById('message');
    let secretNumbersString = secretNumbers.join("")
    if(secretNumbersString === guess){
        message.textContent = "You win!";
        message.className = "success";
    } else {
        message.textContent = "Try again!";
        message.className = "error";
    }
});