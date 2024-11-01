let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset");
let newGameBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-Container");
let msg=document.querySelector(".msg");

let turnO=true;

const winPattern=
[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [2,4,5],
  [6,7,8],
];

const resetGame = () =>
{
    console.log("hii");
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}   

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnO){
        box.innerText="O";
        box.style.color="red"; 
        turnO=false;
        }
        else
        {
            box.innerText="X"; 
            box.style.color="#6b9080";
            turnO=true; 
        }
        box.disabled=true;
        checkWinner();
    });
});

const enableBox = () =>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }

const disableBox = () =>
{
    for(let box of boxes)
        box.disabled=true;
}

const showWinner=(winner)=>
{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner=()=>
{
    for(let pattern of winPattern)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !="")
        {
          if(pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("Winner");
            showWinner(pos1Val);
          }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
