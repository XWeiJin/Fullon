// document.querySelector("#box").onclick=function(){
//     this.style.display="none";
// }


let createdTime;
let clickedTime;
let reactionTime;

function getRandomColor(){
    let max = 150;
    let min = 50;
    let green =Math.floor(Math.random()*(max+min+1))+min;
    let color="rgba(255,"+green+",100,0.2)";
    return color;
}

function makebox(){
    let time=Math.random()*2000;
    setTimeout(function (){

        if(Math.random()>=0.5){
            document.querySelector("#box").style.borderRadius="50%";
        }else{
            document.querySelector("#box").style.borderRadius="0";
        }

        // console.log(window.innerWidth);
        // console.log(window.innerHeight);
        // console.log(document.documentElement.clientHeight);
        // console.log(document.documentElement.clientWidth);
        let min=0;
        let max=window.innerHeight-140;

        let dynamicBound;
        if(window.innerWidth>window.innerHeight){
            dynamicBound =window.innerWidth/10;
        }else{
            dynamicBound =window.innerHeight/10;
        }

        dynamicBound=dynamicBound+"px";
        document.documentElement.style.setProperty("--bound",dynamicBound);

        let top=Math.floor(Math.random()*(max-min+1))+min;

        min=0;
        max=window.innerWidth-80;
        let left=Math.floor(Math.random()*(max-min+1))+min;
        document.querySelector("#box").style.top=top+"px";
        document.querySelector("#box").style.left=left+"px";


        document.querySelector("#box").style.backgroundColor = getRandomColor();

        document.querySelector("#box").style.display="block";
        createdTime = Date.now()
    },time);

    ;
}


document.querySelector("#box").addEventListener("click",()=>{
    document.querySelector("#box").style.display="none";

    clickedTime =Date.now();
    reactionTime = (clickedTime-createdTime)/1000;
    document.querySelector("#time").innerHTML =reactionTime;

    makebox();
});

makebox();