
var allBoxes = document.querySelectorAll('.box');
var resetBtn = document.querySelector('.reset-btn');
var player = 1;

function resetGame() {
    for (r = 0; r < allBoxes.length; r++) {
        allBoxes[r].style.backgroundColor = '';
        allBoxes[r].style.fontSize = '120px';
        allBoxes[r].textContent = '';
        player = 1;
    }
}

function changeColor(event) {

    // assigning 'players' and their colours, along with restricting the ability to overwrite prior moves.
    if (
        (event.target.style.backgroundColor === 'red') 
        || 
        (event.target.style.backgroundColor === 'cyan')
        ||
        (event.target.style.backgroundColor === 'greenyellow')
        ) {
        player += 0; 
    } else if (player === 1) {
        event.target.style.backgroundColor = 'red';
        event.target.textContent = 'X';
        event.target.style.fontFamily = 'Lexend Mega, sans-serif';
        event.target.style.fontSize = '120px';
        event.target.style.fontWeight = 'bold';
        event.target.style.textAlign = 'center';
        player += 1;
    } else if (player === 2) {
        event.target.style.backgroundColor = 'cyan';
        event.target.textContent = 'O';
        event.target.style.fontFamily = 'Lexend Mega, sans-serif';
        event.target.style.fontSize = '120px';
        event.target.style.fontWeight = 'bold';
        event.target.style.textAlign = 'center';
        player -= 1;
    }

    // controlling win conditions
    if (
        ((allBoxes[0].style.backgroundColor === 'red') || (allBoxes[0].style.backgroundColor === 'cyan'))
        &&
        (allBoxes[0].style.backgroundColor === allBoxes[1].style.backgroundColor) 
        && 
        (allBoxes[1].style.backgroundColor === allBoxes[2].style.backgroundColor)
        ) {
       for (let x = 0; x < allBoxes.length; x++) {
           allBoxes[0].style.backgroundColor = 'greenyellow';
           allBoxes[1].style.backgroundColor = 'greenyellow';
           allBoxes[2].style.backgroundColor = 'greenyellow';

           if (
            (allBoxes[i].style.backgroundColor === 'greenyellow') 
            && 
            (player === 1)) {
                document.querySelector('.score').textContent = 'Noughts win!';
                document.querySelector('.score').style.color = 'cyan';
                player -= 10;
        } return
    } else if (
        ((allBoxes[3].style.backgroundColor === 'red') || (allBoxes[3].style.backgroundColor === 'cyan'))
        &&
        (allBoxes[3].style.backgroundColor === allBoxes[4].style.backgroundColor) 
        && 
        (allBoxes[4].style.backgroundColor === allBoxes[5].style.backgroundColor)
        ) {
          for (let y = 0; y < allBoxes.length; y++) {
              allBoxes[3].style.backgroundColor = 'greenyellow';
              allBoxes[4].style.backgroundColor = 'greenyellow';
              allBoxes[5].style.backgroundColor = 'greenyellow';
        } return
    } else if (
        ((allBoxes[6].style.backgroundColor === 'red') || (allBoxes[6].style.backgroundColor === 'cyan'))
        &&
        (allBoxes[6].style.backgroundColor === allBoxes[7].style.backgroundColor) 
        && 
        (allBoxes[7].style.backgroundColor === allBoxes[8].style.backgroundColor)
        ) {
          for (let z = 0; z < allBoxes.length; z++) {
              allBoxes[6].style.backgroundColor = 'greenyellow';
              allBoxes[7].style.backgroundColor = 'greenyellow';
              allBoxes[8].style.backgroundColor = 'greenyellow';
        } return
    } else if (
        ((allBoxes[0].style.backgroundColor === 'red') || (allBoxes[0].style.backgroundColor === 'cyan'))
        &&
        (allBoxes[0].style.backgroundColor === allBoxes[3].style.backgroundColor) 
        && 
        (allBoxes[3].style.backgroundColor === allBoxes[6].style.backgroundColor)
        ) {
          for (let a = 0; a < allBoxes.length; a++) {
              allBoxes[0].style.backgroundColor = 'greenyellow';
              allBoxes[3].style.backgroundColor = 'greenyellow';
              allBoxes[6].style.backgroundColor = 'greenyellow';
        } return
    } else if (
        ((allBoxes[1].style.backgroundColor === 'red') || (allBoxes[1].style.backgroundColor === 'cyan'))
        &&
        (allBoxes[1].style.backgroundColor === allBoxes[4].style.backgroundColor) 
        && 
        (allBoxes[4].style.backgroundColor === allBoxes[7].style.backgroundColor)
        ) {
          for (let b = 0; b < allBoxes.length; b++) {
              allBoxes[1].style.backgroundColor = 'greenyellow';
              allBoxes[4].style.backgroundColor = 'greenyellow';
              allBoxes[7].style.backgroundColor = 'greenyellow';
        } return
    } else if (
        ((allBoxes[2].style.backgroundColor === 'red') || (allBoxes[2].style.backgroundColor === 'cyan'))
        &&
        (allBoxes[2].style.backgroundColor === allBoxes[5].style.backgroundColor) 
        && 
        (allBoxes[5].style.backgroundColor === allBoxes[8].style.backgroundColor)
        ) {
          for (let c = 0; c < allBoxes.length; c++) {
              allBoxes[2].style.backgroundColor = 'greenyellow';
              allBoxes[5].style.backgroundColor = 'greenyellow';
              allBoxes[8].style.backgroundColor = 'greenyellow';
        } return
    } else if (
        ((allBoxes[0].style.backgroundColor === 'red') || (allBoxes[0].style.backgroundColor === 'cyan'))
        &&
        (allBoxes[0].style.backgroundColor === allBoxes[4].style.backgroundColor) 
        && 
        (allBoxes[4].style.backgroundColor === allBoxes[8].style.backgroundColor)
        ) {
          for (let d = 0; d < allBoxes.length; d++) {
              allBoxes[0].style.backgroundColor = 'greenyellow';
              allBoxes[4].style.backgroundColor = 'greenyellow';
              allBoxes[8].style.backgroundColor = 'greenyellow';
        } return
    } else if (
        ((allBoxes[2].style.backgroundColor === 'red') || (allBoxes[2].style.backgroundColor === 'cyan'))
        &&
        (allBoxes[2].style.backgroundColor === allBoxes[4].style.backgroundColor) 
        && 
        (allBoxes[4].style.backgroundColor === allBoxes[6].style.backgroundColor)
        ) {
          for (let e = 0; e < allBoxes.length; e++) {
              allBoxes[2].style.backgroundColor = 'greenyellow';
              allBoxes[4].style.backgroundColor = 'greenyellow';
              allBoxes[6].style.backgroundColor = 'greenyellow';
        } return
    }

    // controlling the end game in event of win condition + alerting winner
    console.log('test')
    for (let i = 0; i < allBoxes.length; i++) {

        if (
            (allBoxes[i].style.backgroundColor === 'greenyellow') 
            && 
            (player === 1)) {
                document.querySelector('.score').textContent = 'Noughts win!';
                document.querySelector('.score').style.color = 'cyan';
                player -= 10;
                return
        } else if (
            (allBoxes[i].style.backgroundColor === 'greenyellow') 
            && 
            (player === 2)) {
                document.querySelector('.score').textContent = 'Crosses win!'
                document.querySelector('.score').style.color = 'red'
                player -= 10;
                return; 
        } else if (
            (allBoxes[0].textContent !== '') 
            &&
            (allBoxes[1].textContent !== '') 
            &&
            (allBoxes[2].textContent !== '') 
            &&
            (allBoxes[3].textContent !== '') 
            &&
            (allBoxes[4].textContent !== '') 
            &&
            (allBoxes[5].textContent !== '') 
            &&
            (allBoxes[6].textContent !== '') 
            &&
            (allBoxes[7].textContent !== '') 
            &&
            (allBoxes[8].textContent !== '') 
            && 
            (player >= 1)
            ){
                document.querySelector('.score').textContent = 'Draw!';
                allBoxes[0].style.backgroundColor = 'blue';
                allBoxes[1].style.backgroundColor = 'blue';
                allBoxes[2].style.backgroundColor = 'blue';
                allBoxes[3].style.backgroundColor = 'blue';
                allBoxes[4].style.backgroundColor = 'blue';
                allBoxes[5].style.backgroundColor = 'blue';
                allBoxes[6].style.backgroundColor = 'blue';
                allBoxes[7].style.backgroundColor = 'blue';
                allBoxes[8].style.backgroundColor = 'blue';
                player -= 10;
                return;
        }
    }
}

for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].addEventListener('click', changeColor);
        allBoxes[i].style.transition = '0.5s';
}

resetBtn.addEventListener('click', resetGame);
