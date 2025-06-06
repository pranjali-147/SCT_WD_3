let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let turnO = true;
let msgContainer = document.querySelector('.msgContainer')
let newBtn = document.querySelector('#new-btn')
let msg = document.querySelector('#msg')
let count = 0;
let winnerFound = false

const winPatterns=[[0,1,2],[0,3,6],[1,4,7],[3,4,5], [6,7,8],[0,4,8], [2,4,6],[2,5,8]];

boxes.forEach ((box) => {
  box.addEventListener("click",() => {
      console.log("box was clicked");
  if(turnO){
      box.innerText = "O";
      turnO = false;
  }else{
      box.innerText = "X";
      turnO = true;       
  }
  count++;
  box.disabled = true;
  checkWinner(); 
  
  });
});

const showWinner = (winner) =>{
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

const draw = ()=>{
  msg.innerText = "Draw! No winner : (";
  msgContainer.classList.remove("hide");
  disableBoxes();
  // resetGame()
}

 
const checkWinner=()=> {
  for(let pattern of winPatterns){
  let pos1Val = boxes[pattern[0]].innerText;
  let pos2Val = boxes[pattern[1]].innerText;
  let pos3Val = boxes[pattern[2]].innerText;
  
  if(pos1Val!='' && pos2Val!='' && pos3Val!=''){
    if(pos1Val == pos2Val && pos2Val == pos3Val){
      console.log("Winner");
      showWinner(pos1Val);
      winnerFound = true;
      count = 0;
      return; 
   
    }
  }
}

if (count === 9 && !winnerFound) {
  draw();
}
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  winnerFound = false;
  count = 0;
  msgContainer.classList.add("hide")
}

const enableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const disableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}

newBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)

   
   

