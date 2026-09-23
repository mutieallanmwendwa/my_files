const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;

let running = true;
let attempts = 0;
let guess;

while(running){

    guess = window.prompt(`Enter a number between 1 ~ 100`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Ener a valid number!");
    }
    else if(guess < 1 || guess > 100){
        window.alert("Enter a valid number!");
    }else{
        attempts++;
        if(guess > answer){
    window.alert("Too high! Try again");
    }else if(guess < answer){
        window.alert("Too low!! Try again");
    }
    else{
        window.alert(`CORRECT! The answer was ${answer}. It took ${attempts} attempts`);
                running = false;
    }}
    }
