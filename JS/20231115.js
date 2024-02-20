
// window.document.write("HELLO,JavaScript");
// window.alert("");
// console.log("test");
// prompt("1-100","100");
// confirm("確認");
/**
 * 2
 * 1
 */
// var a =10;
// console.log(a);

// let b=20;
// console.log(b);

// b=10
// console.log(b);

// const z=10;
// console.log(z);
// // z=20;            會顯示錯誤
// // console.log(z);

// let myName ="TOM";
// let myage = 20, myhight = 170, mywight=50;
// document.write("<br>名字:"+myName+"<br>年齡"+myage*2+"<br>身高"+myhight+"<br>體重"+mywight);

// document.write("<br>"+myhight/mywight);

// q=10;
// w=20;
// console.log(q+w);
// console.log(q-w);
// console.log(q*w);
// console.log(q/w);
// console.log(q%w);
// console.log(q=q+1);
// console.log(q+=1);
// console.log(w=w-1);
// console.log(w-=1);
// e=15;
// e++;
// console.log(e);

// x=10;
// y=15;
// console.log(y==x);
// console.log(x!=y);
// console.log(x>y || x<y);
// console.log(x>y && x<y);

// n1=10;
// n2=10;
// n3="rw";
// n4="re";
// console.log(n1+n2);
// console.log(n3+n4);

// let A1 = prompt("輸入1-10");
// console.log(typeof A1,A1);
// console.log(typeof Number(A1),A1);
// let A2= Number(A1);
// console.log(typeof A2.toString(),A2);
// let A3=3.14159674;
// console.log(A3.toFixed(5));

// let A4='qwaszxcderfvbgty hnmjuiklop';
// console.log(A4.length);
// console.log(A4[3]);
// console.log(A4[5]);
// console.log(A4[0]);
// console.log(A4.slice(0,6));

// console.log(A4.indexOf("p"));
// console.log(A4.indexOf("O"));
// console.log(A4.toLowerCase());
// console.log(A4.toUpperCase());
// console.log(A4.toLowerCase().indexOf("t"));
// console.log(A4.toUpperCase().indexOf("T"));
// console.log(A4.split(""));
// console.log(A4.split(" "));


// let num =prompt("輸入數字","1");
// if(num>1){
//     document.write("大於1");
// }else{
//     document.write("小於1");
// }

// let soc = prompt("輸入成績");


// console.log(typeof Number(soc),soc);
// if(isNaN(soc)){
//     alert("請輸入數字");
// }else{
    // if(soc<0 || soc>100){
    //     alert("請輸入0-100間");
    // }else if( soc>89 && soc<101 ){
    //     document.write("優");
    // }else if( soc>69 && soc<90 ){
    //     document.write("甲");
    // }else if( soc>59 && soc<70 ){
    //     document.write("乙");
    // }else if( soc>=0 && soc<60 ){
    //     document.write("丙");
    // }
//     switch(true){
//         case soc<0 || soc>100:
//             alert("請輸入0-100間");
//             break;
//         case soc>89 && soc<101:
//             document.write("優");
//             break;
//         case soc>69 && soc<90:
//             document.write("甲");
//             break;
//         case soc>59 && soc<70 :
//             document.write("乙");
//             break;
//         case soc>=0 && soc<60 :
//             document.write("丙");
//             break;
//     }
// }

// let payway = prompt("請輸入付款方式:1.ATM 2.刷卡 3.貨到付款 4.貨到");
// switch(payway){
//     case "1":
//         document.write("ATM");
//         break;
//     case "2":
//         document.write("刷卡");
//         break;
//     case "3":
//         document.write("貨到付款");
//         break;
//     case "4":
//         document.write("貨到");
//         break;
//     default:
//         document.write("請輸入正確的付款方式");
// }

// let i=0;
// while(i<10){
//     document.write(i+" ");
//     i++;
    
// }

// do{
//     i++;
//     document.write(i+" ");
    
// }while(i<10)

// while(true){
//     let soc = prompt("輸入成績");
//     if(isNaN(soc)){
//         alert("請輸入數字");
//         continue;
//     }
//     if(soc<0 || soc>100){
//         alert("請輸入0-100間");
//         continue;
//     }
//     if( soc>89 && soc<101 ){
//         document.write("優");
//         break;
//     }else if( soc>69 && soc<90 ){
//         document.write("甲");
//         break;
//     }else if( soc>59 && soc<70 ){
//         document.write("乙");
//         break;
//     }else if( soc>=0 && soc<60 ){
//         document.write("丙");
//         break;
//     }else{
//         break;
//     }
// }



// console.log(typeof Number(soc),soc);

/**
 * random() 0-1之間亂數
 * abs(x) 絕對值
 * pow(X,y) x的y次方
 * ceil(X) 向上捨入最接近整數
 * floor(X) 向下捨入最接近整數
 * round(X) 捨入最接近整數
 * trunc(X) 整數
 */

// let x = Math.random();
// console.log(x);

// let y = Math.ceil(x);
// console.log(y);
// console.log(Math.ceil(1.1));
// console.log(Math.ceil(-1.1));

// console.log(Math.floor(1.1));
// console.log(Math.floor(-1.1));

// console.log(Math.round(1.8));
// console.log(Math.round(-1.8));

// console.log(Math.trunc(1.5));
// console.log(Math.trunc(-1.1));

// console.log(Math.abs(-1.1));
// console.log(Math.pow(2,2));

// let range1 =1, range2 =99;
// let answer = Math.ceil(Math.random()*99);

// while(true){
//     let player =prompt("請輸入一個數字("+range1+"~"+range2+")");
//     player = Number(player);

//     if( player<range1 || player >range2 ){
//         alert("無效數字");
//         continue;
//     }
//     if(answer==player){
//         alert("恭喜，答案:"+answer);
//         break;
//     }else if( player < answer ){
//         range1=player;
//     }else{
//         range2=player;
//     }
// }

// let count=0;
// for(let i=1;i<=10;i++){
//     count=count+i;
// }
// document.write(count);
// for(let i=0;i<=10;i++){
//     if(i==6){
//         continue;
//     }
//     console.log(i);
// }

// for(i=2;i<10;i++){

//     for(j=1;j<=10;j++){
//         console.log(i*j);
//         document.write(i+'*'+j+"="+i*j+" ");
//         if(j==10){
//             document.write("<br>");
//         }
//     }

// }

// function myinfo(){
//     document.write("中彰投分署");
// }
// myinfo();

// function show(myName,myAdd,myAge){
//     document.write("HELLO~",myName+",居住地:"+myAdd+",年齡:"+myAge+"<br>");
// }
// show("Jin","台北","30");
// show("Wong","台中","70");
// show("Lie","台南","50");

// function convertDF(dc){
//     return dc*1.8+32;
// }
// let pdc =prompt("請輸入攝氏溫度","25");
// document.write("華氏溫度為"+convertDF(pdc));

// let =student=["A","B","C"];
// document.write("<table><tr><td>座號</td><td>姓名</td></tr>")
// // for(let i=0;i<student.length;i++){
// //     document.write("<tr><td>"+(i+1)+"</td><td>"+student[i]+"</td></tr>");
// // }
// for(i in student){
//     document.write("<tr><td>"+(i+1)+"</td><td>"+student[i]+"</td></tr>");
// }
// document("</table>")

// let Number=[5,10,15,20,25];
// for(s of Number){
//     document.write(s+"<br>");
// }

// let student = new Array();
// student[0]=["David","60","70"];
// student[1]=["EVA","50","50"];
// student[2]=["Wong","90","40"];
// document.write("<table><tr><td>姓名</td><td>國文</td><td>英文</td></tr>");
// for(let i=0;i<student.length;i++){
//     document.write("<tr>");
//     for(let j=0;j<student[i].length;j++){
//         document.write("<td>"+student[i][j]+"</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");

// let Number=[5,15,8,20,4,7,10,30,55];
// console.log(Number);
// Number.splice(2,2); //由[2]開始刪除2個值
// console.log(Number);
// Number.splice(2,0,2,9);//由[2]開始插進2個值
// console.log(Number);
// Number.splice(3,2,3);//由[3]開始刪除2個值補上一值
// console.log(Number);
// Number.splice(-1,1,3);//刪除最後1個值並取代一個值
// console.log(Number);
// Number.splice(-1,0,90);//最後一個值前插入一個值
// console.log(Number);

// let Number2=[5,6,51,31,48];
// console.log(Number2);
// Number2.push(100);  //在陣列最後面加一個值
// console.log(Number2);
// Number2.pop();      //刪除陣列最後一個值
// console.log(Number2);
// Number2.shift();    //刪除陣列最前的值
// console.log(Number2);
// Number2.unshift(90);//陣列最前面加一個值
// console.log(Number2);


function sort(nums){
    function minIndex(left,right){
        console.log(left,right);
        if(right === nums.length){
            return left;
        }else if(nums[right] < nums[left]){
            return minIndex(right,right+1);
        }else{
            return minIndex(left,right+1);
        }
    }
    for(let i=0 ;i<nums.length;i++){
        let sele = minIndex(i,i+1);
        if(i !== sele){
            let lep= nums[i];
            nums[i]=nums[sele];
            nums[sele]=lep;
        }
    }
    
}
let nums = [5,10,3,2,8];
sort(nums);
console.log(nums);

