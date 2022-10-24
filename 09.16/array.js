"use strict"
const a=[];
const b=[];
const c=[];
const d=[];
let j = 0;
let k = 0;
let l = 0;
for (let i = 0; i<100; i++)
{
    a[i]=i+l;
    if (a[i]%5 == 0)
    {
        b[j] = a[i]; j++;
    }
    if (a[i]%3 == 0)
    {
        c[k] = a[i]; k++;
    }
    if ((a[i]%5 == 0))||((a[i]%3 == 0))
    {
        d[l] = a[i]; l++;
    }
    if ((a[i]% == 0))&&((a[i]%3 == 0))
    {
        document.write(" " + a[i]);
    }
}
console.log(" "+a);
console.log("Az a tömb számossága: "+a.length);