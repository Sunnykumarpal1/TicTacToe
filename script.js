let boxes=document.querySelectorAll('.box')
let resetBtn=document.querySelector('#reset-btn');
let turn=0;
let newbtn=document.querySelector('#newbtn');
let msg=document.querySelector('#msg')
let msgContainer=document.querySelector('.msg-container')
let cnt=0;
alert("Note:- Reset  Means playing with same varible and  NewGame means playing with new Variable")
let Enable=()=>{
    for(let a of boxes){
        a.innerText=""
        a.disabled=false
    }
    turn=0;
}
let ReloadPage=()=>{
    location.reload();
}
let execute=()=>{
    cnt=0;
    let clearSound= new Audio('surprise.mp3');
    clearSound.play();
    Enable();
    msgContainer.classList.add('hide');
    msg.innerText="";
    // ReloadPage()
   
}
let Disable=()=>{
    for(let a of boxes){
        a.disabled=true;
    }
}

let player1=prompt("please Select  Either O/X for you")
let player2
if(player1=='X'||player1=='x'){
    player1='X';
    player2='O'
}else if(player1=='o'||player2=='O'){
    player1='O'
    player2='X'
}
const WinChances=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let ShowDraw=()=>{
    msg.innerText=`This is Draw game between O and X`
    msgContainer.classList.remove('hide');  
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        cnt++;
        let audio =new Audio('Sound.mp3')
        audio.play();
        if(turn==0){
            box.innerText=player1
            turn=1;
        }else{
            box.innerText=player2
            turn=0
        }
        box.disabled=true
        if(CheckWinner()==0){
            if(cnt==9){
                console.log("draw")
                ShowDraw(); 
            }
         
        }
    })
})


let ShowWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`
    msgContainer.classList.remove('hide');
    Disable()    

}
let CheckWinner=()=>{
    for(let pattern of WinChances){
        let val1=boxes[pattern[0]].innerText
        let val2=boxes[pattern[1]].innerText
        let val3=boxes[pattern[2]].innerText;
        // console.log(val1,val2,val3);
        if(val1!=""&&val2!=""&&val3!=""){
            if(val1===val2&&val2===val3){
               ShowWinner(val1)
               return 1;
            }
        }

    }
    return 0;
}
let newPage=()=>{
    execute();
    location.reload();
}
resetBtn.addEventListener('click',execute)
newbtn.addEventListener('click',newPage)