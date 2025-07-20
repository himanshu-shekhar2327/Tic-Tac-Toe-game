let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turnO =true //palyer X , player O


// let arr1 = ["apple", "orange","mango"]

// let arr2 = [["apple" ,"orange","mango"],["paint","shirts","cap"],["bat",,"ball","wicket"]]
let count = 0;
const winPatterns = [
    [0 ,1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4, 7],
    [2 , 5 , 8],
    [2 , 4 ,6],
    [3 , 4, 5],
    [6 , 7 , 8],
];

const resetgame = () =>{
    count = 0;
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

};



boxes.forEach((box) => {
    box.addEventListener("click",() => {
        // console.log(count);
        console.log("box was clicked");
        // box.innerText="abcd";
        if(turnO){//if playerO turn 
            box.innerText ="O";
            turnO = false;
            }else{//if player x turn
                box.innerText="X";
                turnO=true;
            }
            box.disabled =true;
            count++;
            let iswinner = checkWinner();
            if(count===9 && !iswinner){
                gameDraw();
            }

    });
});

const gameDraw = () =>{
    msg.innerText = `Game Draw !`;
    msgcontainer.classList.remove("hide");
    disableboxes =true;
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }

}

const showWinner =(Winner) =>{
        msg.innerText=`Congratulations, Winner is ${Winner}`;
        msgcontainer.classList.remove("hide")

};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
        

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("Winner",pos1Val);

                    showWinner(pos1Val);
                    return true;
                    // disableboxes();
                
                   

                }

            }
           
    }

};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);