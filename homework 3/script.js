var user = document.querySelector('.userchoice'),
computer = document.querySelector('.computerchoice'),
startbutton = document.querySelector('.startbutton'),
result = document.querySelector('.result'),
userchoice, 
winStates = { rock : 'scissors', paper: 'rock', scissors : 'paper'};
startbutton.addEventListener('click', function(){
    this.disable = true;
  result.innerHTML = '';
  user.className = "userchoice Rock count-in";
  computer.className = "computerchoice Rock count-in";
});
document.addEventListener('animationed', function () { 
    startbutton.disable = false;
    var computerchoice = getrandomChoice();
    var userchoice = getrandomChoice();
    user.className = "userchoice" + userchoice;
    computer.className = "computerchoice" + computerchoice;
    result.innerHTML = getWinner(userchoice, computerchoice);
});
function getRandomChoice (){
    return Object.keys(winStates)[Math.random() * 3)];
}
function getWinner(userchoice, computerchoice){
    if (userchoice ==== userchoice) {
        return "A tie";
    } else if ( userchoice === winStates[computerchoice]){
        return "Computer Wins!" + computerchoice + "beats" + userchoice;
    }
    return "You Win!" + userchoice + "beats" + computerchoice;
}

