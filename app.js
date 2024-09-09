//a. Data types
//String:
let dessert = "Halo-Halo";
let name = "Daguino";

//Number:
let length = 16;
let width = 20;

//Booleans:
let x = true;
let y = false;

//Object:
const love = {firstName:"thea", lastName:"castro"};
const color = ["Brown", "White", "Pink"];


//b. Arithmetic and Logical Operators
//Addition
let add = 1 + 6;

//Subtraction
let sub = 6 - 4;

//Multiplication
let mul = 12 * 2;

//Division
let div = 10 / 2;

//Exponentiation
let exp = 5 ** 2;

//Modulu
let mod = 10 % 2;

//Increment
x++;
//Decrement
y--;

//c. Conditional Statements
//i. If else
let number = 90;
if(number >= 89 ){
    ferraris = "Maldita";
}else{
    ferraris = "Napaka Maldita";
}
console.log(ferraris);

//ii. Switch
let z = 2 % 2;
switch (z){
    case 0:
        posaa = "Even"
        break;
    case 1:
        posaa = "Odd"
        break;
    default:
        posaa = "No Value"
}
console.log(posaa);

//d. Loops
//i. For
for(let b = 0; b < 5; b++){
    console.log(b);
}

//ii. For in
const brand = ["onitsuka", "lacoste", "gucci"];
let shoes = "";
for(let c in brand){
    shoes += brand[c];
    console.log(brand);
}

//iii. For of
const friends = ["velt", "saliz", "jhandie"];
let list = "";
for(let m of friends){
    list += m;
    console.log(m);
}

//iv. For while
let j = 0;
while(j < 10){
    j++;
    console.log(j);
}

//e. Functional Programming
//i. Odd or even
let o = 0;
while(o < 5){
    o++;
    let l = o % 2;
    switch (l){
        case 0:
            posaa = "Even"
            break;
        case 1:
            posaa = "Odd"
            break;
        default:
            posaa = "No Value"
    }
    console.log(o + ". " + o + " is " + posaa);
}

//ii. determine prime numbers
let age =26;
if(age == 0 || age == 1){
    let flag = true;
}
for(let p = 2; p <= age / 2; p++){
    if (age % p == 0){
        flag = true;
        break;
    }
}
if(!flag){
    console.log(age + " is prime");
}else{
    console.log(age + " is not prime");
}

//iii. determine a string if it is a palindrome

function isPalindrome(alright) {
    let j = alright.length - 1
    for (let i = 0; i < alright.length / 2; i++) {
        if (alright[i] != alright[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let alright1 = "boatracing";
let alright2 = "hannah";
let alright3 = "lower";

console.log(isPalindrome(alright1));
console.log(isPalindrome(alright2));
console.log(isPalindrome(alright3));