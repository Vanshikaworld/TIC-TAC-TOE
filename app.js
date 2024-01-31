let boxes = document.querySelectorAll(".box");
let resetbtn =document.querySelector(".resetbtn");
let turn0 =true;
let msg =  document.querySelector("#msg");
let msgcontainer = document.querySelector(".msgcontain")
let hide = document.querySelector(".hide");
let newbtn = document.querySelector(".Newgame");


let winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       if(turn0){
        box.innerHTML = "0";
        turn0 =false;
       }
       else{
        box.innerHTML ="X";
        turn0 =true;

       }
       box.disabled = true;
       checkwinner();
        
    })

    
});
const disablebox =( )=>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enablebox = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgcontainer.classList.add("hide");
    }
}

const declare =( winner)=>{
    
   msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}
 
const checkwinner = ()=>{
  for(let pattern of winning){

        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;
       
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3 && pos3 === pos1){
               declare(pos1);
               boxes.disabled = true;
              
            }
        }
        
  }
}
const resetgame =()=>{
    let turn0 =true;
    enablebox();

}

resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);