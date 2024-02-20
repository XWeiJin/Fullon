let TCnR= new Object();
TCnR.name="中彰投分署";

let TCNR = {
    name:"中彰投分署",
    add:"台中市",

    sayHi:function(){       //==sayHi(){}
        // return "Hello";
        console.log("Hello");
    },
    weather(word){
        console.log("今天天氣"+word);
    },
};

console.log(TCNR.name);
console.log(TCNR["name"]);
console.log(TCNR.add);
TCNR.sayHi();
TCNR.weather("晴");
TCNR.weather("陰天");

function person(name,age,hight,weight){
    person.name = name;
    this.age = age;
    this.hight = hight;
    this.weight = weight;
    this.sayhello=function(){
        return "我是"+name+"今年"+age+"歲，身高"+hight+"體重"+weight+"公斤";
    }
}
person1 = new person("Jin",23,174,52);
console.log(person1.sayhello());
person2 = new person("xi",38,180,72);
console.log(person2.sayhello());

// alert("test");
window.console.log("test");
window.console.error("test");
window.console.warn("test");

function Sayhlo(){
    console.log("hello");
}

// setInterval(Sayhlo,5000);   //每次經過X秒都執行一次
// setTimeout(Sayhlo,3000); //只執行一次    1秒=1000

// let mystop=setInterval(Sayhlo,500);

// function stop(){
//     clearInterval(mystop);
// }

let myh1=document.getElementById("first");          //找ID
console.log(myh1);

let myp=document.getElementsByClassName("second");  //找class
console.log(myp);

let myh12=document.querySelector("h1#first");       //找一個如多個則第一個
console.log(myh12);

let myp2=document.querySelectorAll(".second");      //找全部
console.log(myp2);

function HEllo2(){
    console.log("HELLO");
}
HEllo2();

let HEllo3 =() => {
    console.log("HEllo~o");
}
HEllo3();

let CYUT={
    name:"朝陽",

    mycyut: function(){
        console.log(this);
        console.log("CYUT是"+this.name);
    },

    add:()=>{
        console.log(this);
        console.log(CYUT.name+"地區在霧峰");
    },
}
CYUT.mycyut();
CYUT.add();


//forEach
let Number=[5,47,35,20,49,19,10];
for(let i=0;i<Number.length;i++){       //第一版
    if(Number[i]>15){
        console.log(Number[i]);
    }
}

Number.forEach(function Num(n){         //第二版(可簡化成第四版)
    if(n<15){
        console.log(n);
    }
});

Number.forEach(Num);                    //第三版
function Num(n){
    if(n>15){
        console.log(n);
    }
}

Number.forEach(function (n){            //第四版
    if(n<15){
        console.log(n);
    }
});

Number.forEach(n=>{                     //第五版
    if(n>15){
        console.log(n);
    }
});

Number.forEach((n,index,array)=>{       //第六版
    if(n>15){
        console.log(n);
        console.log(n+"索引鍵"+index);
        console.log(array);
    }
});

//array
//可以用length,index,forEach
//可用pop,push,shift,unshift
console.log(Number);

//HTMLColletcion
//可以用length,index
let myElements=document.getElementsByClassName("second");
console.log(myElements);
console.log(myElements.length);
console.log(myElements[2]);


//NodeList
//可以用length,index,forEach
let myquery=document.querySelectorAll(".second");
console.log(myquery);
console.log(myquery.length);
console.log(myquery[1]);
myquery.forEach(get=>{
    console.log(get);
});

let body=document.querySelector("body");
console.log(body.children);                     //回傳HTML
console.log(body.childNodes);                   //回傳Nodelist

let myh13=document.querySelector("#first");
console.log(myh13.parentElement);               //回上層
console.log(myh13.parentElement.children[2]);   //先回上層body再去p

let myh14=document.querySelector("h1#first");
myh14.innerText="123";                          //直接改字
console.log(myh14);
myh14.innerHTML="<mark>456</mark>";              //套用HTML改字

let body1=document.querySelector("body");
let myp3=document.createElement("p");
myp3.innerText="勞動部中彰投";
body1.appendChild(myp3);                        //插入元素

let myh15=document.querySelector("#first2");
myh15.classList.add("yellow");                  //新增class

let myp4=document.querySelector(".green");
myp4.classList.remove("green");                 //移除class
myp4.classList.add("yellow");

let myp5=document.querySelector(".second");
myp5.classList.toggle("yellow");                //假如原本沒有class會新增，有的話會移除

console.log(myp4.classList.contains("green"));  //查詢是否有class
console.log(myp5.classList.contains("yellow"));

let a=document.querySelector("a");
console.log(a.getAttribute("href"));            //回傳值
console.log(a.getAttribute("target"));
console.log(a.getAttribute("as"));

let myp6=document.querySelector("section");
let myp7=myp6.querySelector("p");
console.log(myp7);
// myp6.remove();

myp6.style="color: yellow;"
myp6.style.border="1px solid red"

// window.addEventListener("click",e=>{
//     console.log(e);
// });

let A =document.querySelector(".a");
let b =document.querySelector(".b");

A.addEventListener("click",() =>{
    alert("a");
})
b.addEventListener("click",e =>{
    e.stopPropagation();
    alert("b");
})

localStorage.setItem("name","Tom");         //註解掉重開資料不會清除
localStorage.setItem("age",30);
console.log(localStorage);

let myName = localStorage.getItem("name");
console.log(typeof myName,myName);
let myage = localStorage.getItem("age");
console.log(typeof myage,myage);

localStorage.removeItem("age");
localStorage.clear();

sessionStorage.setItem("name","tom");       //註解掉重開資料會清除
sessionStorage.setItem("age",25);

//JSON.stringify    將陣列值轉成字串格式
//JSON.parse        將字串回復成陣列
//未加JSON.stringify,JSON.parse
let myName1=["Thor","Tom","Lily","Gavin"];
console.log(myName1);

// localStorage.setItem("myName1",myName1);
// let myName2=localStorage.getItem(myName1);
// console.log(typeof myName2,myName2);

//加JSON.stringify,JSON.parse
// 1-將陣列轉成字串
let myName2 = JSON.stringify(myName1);
console.log(typeof myName2,myName2);
// 2-將資料存入storage
localStorage.setItem("myName1",myName2);
// 3-從storage取得資料
let myName3=localStorage.getItem("myName1");
console.log(typeof myName3,myName3);
// 4-將字串回復陣列
let myName4 = JSON.parse(myName3);
console.log(typeof myName4,myName4);