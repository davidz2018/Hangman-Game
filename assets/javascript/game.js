
startGame (
    document.onkeyup = function(event) {
    }    
)
var randName = ["Chris", "Adam", "Cristina"];
var winCounter = 0;
var lossCounter = 0;
var correctGuesses = [];
var wrongGuesses = [];
var guessesLeft = 9;
var wordBlanks = [" _ "];
var word = randName;


function newName() {
    word = randName[Math.floor(Math.random() * randName.length)];
    wordBlanks[i] = " _ ";
}

document.addEventListener("keypress", (event) => {
    keycode = event.keyCode;
    keyWord = string.fromCharCode(keycode);
    if(name.indexOf(keyword) > -1) {
      correctGuesses.push(keyword);  
      if(correctGuesses.join(" ") === randName) {
          alert("You win!")
      }
    } else (wrongGuesses.push(keyword));
    
});
    
