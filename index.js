
/* ...
* VARIABLE NAMING 
Rules of naming :
! 1- Dont use keywords!  if , for , let , switch , while , ...
! 2- Dont use hyphen(-) or space! first name ! first-name !
! 3- Choose Meaningful Names! a! ...
! 4- JS is Case Sensitive !

let firstName; --> firstName variable is declared! 
let firstName = "farzane" ---> firstName variable is initialized!

snackCase Naming : first_name
pascalCase Naming: FirstName
CamelCase Naming: firstName

*Type of Variables :
1- Const
2- Let 
3- Var (DEPRICATED !!! NO USE BUT THEY ARE IN INTERVIEWS-)

* LET vs CONST : 
let score = 18 ; 
score = 20 
console.log(score); ---> output : 20  
**
const score = 18 ;
score = 20 
console.log(score); ---> output : ERROR!
** 
! NOTE : Define all of variables with Const and in need change them to let!

*  JAVASCRIPT DATA TYPES: 
1- Primitive Type : Boolean , Null , Undefined , Number , String , Symbol
2- Object (or Reference) Type : Array , Object , Function , Date , Regex

*Boolean : 
let isSelectedItem = false;
let isLoggedIn = True;

*Null : 
let userName = null;
! Null is an object vs undefined is a type! It means a variable declared, but no value has been assigned a value.
! Whereas, null in JavaScript is an assignment value. You can assign it to a variable.
! When we want to remove a variable or reset it we use Null because it has value and so there will not be an error!

*Undefined : 
let userName; // here username is declared but it has no value so is undefined!

*Number : 
let age = 27;

*string :
let name = "farzane";

*symbol :
let sym3 = Symbol();
console.log(sym3);
let sym1 = Symbol('foo');
console.log(sym1);
let sym2 = Symbol('foo');
console.log(sym2);
! Note : Every Symbol() call is guaranteed to return a unique Symbol. --->
Symbol('foo') === Symbol('foo')  ---> Output : false

!Note:Javascript is a weakly dynamic typing language!No error if you change types ,no check! -> so they release TypeScript more powerful! 
let score = 20;
console.log(typeof score); --->  output : number
score = 20.5;
console.log(typeof score); --->  output : number
score = "passed!"
console.log(typeof score); --->  output : string

* Object data Type : 
user : firstName , lastName , Age , Sex , Address , phoneNumber , ...
? How to define an object ?

let ObjectName = {
     key : value ,
     key : value , 
     .
     .
     .
};

let user = {
    name : "farzane",
    lastName : "torabi",
    age : 23, 
};

!Use Dot Notation to access object's data!
console.log(user.lastName); --> Output : torabi 

!or Use bracket Notation to access object's data! For example :
let user1 = {
    username : "farzane",
    age : 27 , 
    address : "tehran",
};
let name = "username";
console.log(user1[name]); ---> output : farzane

? why brocket notation is useful????????
! it is useful for dynamic property ! for example : we dont know about which propety to need access to it.
let user1 = {
    username : "farzane",
    age : 27 , 
    address : "tehran",
};
const selectedProperty = "username";
console.log(user[selectedProperty]);

*Array data type :
let selectedFruits = [orange , apple];
console.log(selectedFruits[0]);
? How to insert new data to this array?
selectedFruits[2]="cucumber";

*Function Type :
function sayhi (userName){
    console.log("hi " + userName);
}

? how to call a function????
sayhi("nadereh");

Note : inputs in function declare => Parameter
inputs in call function => Arguments

*Operators : 
* 1- Arithmetic Operators :
+  , - , * , / , % , ** , increment , decrement 
let x = 3 ;
let y = 10;
console.log(x+y); --> 13

Increment : y++ vs ++y
lex y = 10 ; 
console.log(++y); --> Output : 11 , get recent value of y and increment it and give new value as output!
console.log(y++); --> Output : 10 , get recent value of y and increment it but give old value as output!

Example : 
let x = 5 ; 
console.log(++x); //-->6
console.log(x++); //-->6
console.log(++x); //-->8
Example : 
function increment(i){
    result = i++;
    console.log(i);
    return result;
}
console.log(increment(4)); ---> 5 , 4
Example : 
function increment(i){
    result = ++i;
    console.log(i);
    return result;
}
console.log(increment(4)); ---> 5 , 5
Example : 
let y = 10;
console.log(y++); // --> 10
console.log(y); // --> 11
console.log(++y); // --> 12
console.log(y); // --> 12

* 2- Assignment Operators
y = y + 1 ; -----> 1) y++     2) ++y
y = y + 5 ; -----> y+=5; 
y = y * 4 ; -----> y*=4;
y = y / 3 ; -----> y/=3;
y = y % 2 ; -----> y%=2;

* 3- Comparison Operators  ----> result is boolean (true or False)
< , <= , > , >= , === , !== 
Example :
let x = 1;
console.log(x > 2); -----> false
console.log(x>=1); ------> True

* 4- Equality Operators  ( Strict Equality : both of type and value , Lose Equality : just value) ----> === vs ==
Example :
console.log(1===1); ----> True 
console.log('1' === 1); ----> False
Example : 
console.log(1==1); ----> True 
console.log('1' == 1); ----> True

* 5- Ternary (Conditional) Operators 
(condition) ? "True" : "False"
Example :
card > 200000 ----> discount = 10% , else discount = 5%
let totalPrice = 220;
let discount = (totalPrice > 200) ? "10%" : "5%";
console.log(discount); -------> 10%

* 6- Logical Operators 
and : && , or : || , not : ! 

* 7- Logical with non-boolean Operators (Power of JavaScript): 
falsy : 0 , "" , null , undefined , NaN
truthy : except falsy .
console.log(false || "farzane"); ------> farzane : output of logical is not true or false!
console.log(false || 1 || 2); -------> 1 : javascript search to find first truthy.
! Example :
let defaultColor = "blue";
let selectedColor = "red";
let userColor = selectedColor || defaultColor ;
console.log(userColor);

? How to convert logical to ternary :
let userColor = (selectedColor) ? selectedColor : defaultColor;











Example :




...*/





/*  SWITCH - CASE  */ 
let user = "";

switch (user){
    case "driver" : 
        console.log("Hello Safir !!");
        break;
    case "passenger" :
        console.log("Are you positive with your trip??");
        break;
    default : 
       console.log("Admin! Why you are late again??");
}
/*  IF - ELSE   */
let time = "noon";

if (time == "noon"){
    console.log("light mode!")
}
else if (time=="evening"){
    console.log("dark mode!")
}
else{
    console.log("auto change!")
}

    