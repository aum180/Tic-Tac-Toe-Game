let boxes = document.querySelectorAll('.box');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.querySelector('#msg');
let newGameBtn = document.querySelector('#newGame');
let rstGameBtn = document.querySelector('#reset-btn');

const winnningPattterns = [
    [0, 1, 2], 
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let playerO = true;

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box was clicked")
        if(playerO){ // when its playerO turn
            box.innerText = "O";
            playerO = false;
        }else{ // when its playerX turn
            
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        checkWinner();
    }
    );
});

const checkWinner = () => {
    for(let patterns of winnningPattterns){
        let posVal1 = boxes[patterns[0]].innerText;
        let posVal2 = boxes[patterns[1]].innerText;
        let posVal3 = boxes[patterns[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != "")
            if(posVal1 === posVal2 && posVal2 === posVal3)
                showWinner(posVal1);
        
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const newOrResetGame = () =>{
    msgContainer.classList.add('hide');
    enableBoxes();
}

const enableBoxes = () =>{
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}

newGameBtn.addEventListener('click', newOrResetGame);
rstGameBtn.addEventListener('click', newOrResetGame);