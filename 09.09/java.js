/*let value = true;
alert(typeof(value));
value = string(value);
alert(typeof(value));
*/

/*let str = "123";
alert (typeof str);
let num = Number(str);
alert (typeofnum);
*/

/*let age = Number("94");
alert(age);*/

/*alert(5 % 2);
alert(8 % 3);*/

/*alert(2 ** 2);
alert(2 ** 3);
alert(4 ** (1/2));
alert(8 ** (1/3));*/

/*let s = "my " + "string";
alert(s);*/

/*alert(2 + '1' + 2);
alert(2 + 2 +'1');
alert('6' / '2');*/

/*alert(+true);
alert(+"");*/

/*let apples = "2";
let oranges = "3";
alert(+apples + +oranges);*/

/*let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert(a);
alert(c);*/

/*let a, b, c;
a = b  = c = 2 + 2;
alert(a);
alert(b);
alert(a + b + c);*/

/*let a, b, c;
c = 2 + 2;
b = c;
a = b + (a = b/c) + 2;
alert(a);*/

/*let n = 2;
n *= 3 + 5;
alert(n);*/

/*let counter = 1;
let a = ++counter;
alert(a);

let counter1 = 1;
let b = counter1++;
alert(b);*/

/*let a = 1; b =1;
alert(++a);
alert(b++);
alert(a);
alert(b);*/

/*function message()
{
    let message = "Hello, I'm JavaScript!";
    alert (message);
}*/

function terulet(Szelesseg, Hosszusag, Tipus = "Nem adott me típust!")
{
    const terulet = Szelesseg*Hosszusag;
    alert("Ilyen típusú ruha: " + Tipus + " " + terulet + " nm2");
}

function Haromszog(alfa, beta)
{
    if(alfa + 2 * beta == 180)
    {
        alert("Szerkeszthető!");
    }
    else
    {
alert("Nem szerkeszthető!");
    }
}

message();
terulet(6, 3, ".");
Haromszog(120, 30);