let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ['yellow','red','purple','green']
let h2  =  document.querySelector("h2");
let highscore = 0;
document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game started");
        started = true;
        levelUp();
        
    }
});
 function gameFlash(btn)
{
    btn.classList.add("gameflash");
    setTimeout(function(){btn.classList.remove("gameflash");},500);
}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){btn.classList.remove("userflash");},300);
}
function checkAns(indx)
{
    // console.log(`curr level : ${level}`);
    if(gameSeq[indx] === userSeq[indx])
    {
        if(gameSeq.length == userSeq.length)
        {
            setTimeout(levelUp(),1000);
        }
    }
    else
    {   
        if(level > highscore) 
        {
            highscore = level;
            h2.innerHTML = `Game Over! your score was highest score ${highscore} <br>Press any key to start again`;
        }
        else{
        h2.innerHTML = `Game Over! your score was <b>${level}<b><br>The highest score is ${highscore} <br>Press any key to start again`;
        }
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        },1000);
        reset();
    }
}
function levelUp()
{
    level++;
    userSeq = [];
    h2.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random() * 4);
    let randColor = btns[randIndx];
    let ranBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function btnPress()
{
    // console.log("Button was pressed");
    if(level > 0){
    let btn = this;
    userFlash(btn);
    console.log(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}}

let allBtn = document.querySelectorAll(".box");
for(bn of allBtn)
{
    bn.addEventListener('click',btnPress);
}
function reset()
{
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}