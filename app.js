let box = document.querySelectorAll(".box");
let buttons = document.querySelectorAll(".button");
let msgContainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#resetbtn");
let newGame = document.querySelector("#btn");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const reset=()=>{
    turnO = true;
    enableButtons();
    msgContainer.classList.add("hide");
}



const showWinner=(winner)=>{
    msg.innerText = (`Congratulations!! the Winner is "${winner}"`);
    msgContainer.classList.remove("hide");
    disableButtons();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
    let pos1val = buttons[pattern[0]].innerText;
    let pos2val = buttons[pattern[1]].innerText;
    let pos3val = buttons[pattern[2]].innerText;

    if(pos1val !=="" && pos2val !==""  &&  pos3val !=="" ){
        if(pos1val === pos2val  && pos1val === pos3val){
            
            showWinner(pos1val);
        }
    }
}}
const disableButtons=()=>{
    for(let button of buttons){
        button.disabled=true;
    }
}
const enableButtons=()=>{
    for(let button of buttons){
        button.disabled=false;
        button.innerText ="";
    }
}
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
    if(turnO){
        button.innerText="O";
        turnO = false;
    }
    else{
        button.innerText = "X";
        turnO = true;
    }
    button.disabled = true;
    checkWinner();
})
})
resetbtn.addEventListener("click",()=>{reset()});
newGame.addEventListener("click",()=>{reset()});