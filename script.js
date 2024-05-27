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

// Helper function to check how many bulls and in what positions
function checkBulls(secretNumber, userInput){
    let bulls = 0;
    for(let i = 0; i < secretNumber.length; i++){
        if(secretNumber[i] === userInput[i]){
            bulls += 1;
        }
    }
    return bulls;
}

// Helper function to check how many cows there is in the user input

function checkCows(secretNumber, userInput) {
    let cows = 0;
    let secretNumberArr = Array.from(secretNumber)
    for (let i = 0; i < userInput.length; i++) {
      let index = secretNumberArr.indexOf(userInput[i]);
      if (index > -1) {
        if(index !== i){
          cows += 1;
        } 
        secretNumberArr.splice(index, 1, -1);
            }
    }
    return cows
  }


//check userInput and guess
document.getElementById('guess-form').addEventListener('submit', function(e) {
    e.preventDefault();
    guess = document.getElementById('guess-input').value;
    const message = document.getElementById('message');
    let secretNumbersString = secretNumbers.join("")
    if(secretNumbersString === guess){
        message.textContent = "You win!";
        message.className = "success";
    } else {
        message.className = "error";
        let bulls = checkBulls(secretNumbersString, guess);
        let cows = checkCows(secretNumbersString, guess);
        message.textContent = `You have ${bulls} bulls and ${cows} cows`;
    }
});