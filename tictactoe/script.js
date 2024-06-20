let boxes = document.querySelectorAll('.box');
let returnbtn = document.querySelector('#returnbtn');
let turn0 = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if (turn0){
            box.innerText = "o";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();
    });
}
);

const showwinner = (winner) => {
    msg.innerText = `Congratulations! winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkwinner = () =>{
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
      if (pos1val != "" && pos2val != "" && pos3val != ""){
        if (pos1val === pos2val && pos2val === pos3val){
            console.log("Winner",pos1val);
            showwinner(pos1val);
        }
      }
    }
}