/*let x = Math.random(); //0-1 között generál random számot
console.log(x);
let y = Math.random()*100 //0-100 között generál
//Math.floor -> Kerekítés egészre
let z = Math.floor(Math.random()*10)+1; //1-10 lözött generál egész számot
console.log(z);*/

/*for(i = 0; i < 10; i++)
{
    let a = Math.floor(Math.random()*100);
}
var szazas = [a];*/

"use strict";
const otoslotto = [];
let otos = Math.floor((Math.random()*90)+1);
let hossz = 0;
for(let j = 1; j <=100; j++)
{
    for(let i = 0; i < 5; i++)
    {
        otos = Math.floor((Math.random()*90)+1);
        while(otoslotto.includes(otos))
        {
            otos = Math.floor((Math.random()*90)+1);
        }
        otoslotto.push(otos);
    }
console.log(hossz+1, otoslotto);
hossz++;
for(let k = 1; k<=5; k++)
    {
        otoslotto.pop;
    }
}

"use strict";
        let x=Math.floor((Math.random()*90)+1);
         const tomb=[];
         for(let j=0;j<100;j++){
         for(let i=0;i<5;i++){
            x=Math.floor((Math.random()*90)+1);
             if(tomb.includes(x)){
                 x=Math.floor((Math.random()*90)+1);
             }else{
                 tomb.push(x);
             }
            }
         console.log(tomb);
         for(let k=1;k<=5;k++){
             tomb.pop();
         }
         }