// let a=5;b=2;

// console.log("a=",a,  "& b=",b,);
// console.log('a+b='  ,a+b );
// console.log("a-b=",a-b);
// console.log("a * b =",a * b);
// console.log("a / b=",a / b);
// console.log("a % b=",a % b);
// console.log("a ** b=", a**b);

//now we read post-increment and pre-increment

// console.log("++a - ++b=",++a - ++b);
// console.log("a=",a,  "& b=",b,);
// console.log("++a + ++b=",++a + ++b);
// console.log("a=",a,  "& b=",b,);
// console.log("++a + ++b=",++a + ++b);



// let abc= +prompt ("Enter a Number you wished for Table")
// let xyz= +prompt("Enter the limit-End for viewing Table ")
// for(let i=1 ; i<=xyz; i++)
// document.write(abc + " x " +  i  + " = " +  abc*i + " <br> ")


// let x= +prompt("Enter a number to check even/odd")
// if (x % 2 == 0 ){
//     document.write( "The number is Even")
// }

// else if(x % 2 == 1 ){
// document.write( "The number is Odd")
// }

// const fruits = ["apple","banana",  "peach","strawbery", "Pineapple",];
// fruits.slice(1,5);
// document.write(fruits); 



// let a = 6;
// let b = 5;

// let cond1= !(a === 6);
// // let cond2= a == 5;
// console.log("cond1 && cond2 = ",cond1);

// let age =16;
// if (age >= 16){ console.log("you can married")};
// if (age <= 15){ console.log("you can not marry")}


// let num=15
// if (num % 2===0){ document.write("num is even")}
// else {console.log("num is odd")}


// let age=100;
// if (age < 18){ console.log("You are not eligible to get marry")}
// else if (age > 70) { console.log("You are eligible one more marriage")}
// else { console.log ("Get ready to get marry")};

// let num= prompt("plz enter your number here:");
//  if (num % 5 === 0){ 
//    console.log(num,"is a multiple of 5");
//  }
//  else { console.log(num,"is not multiple of 5")};




// let score=prompt ("plz enter the number for finding grade:");


// if (score >= 80 && score <= 100){
//     grade=('A');
// }
// else if( score >= 70 && score <= 79){
//     grade=('B');
// }
// else if ( score >= 60 && score <= 78){
//     grade=('C');
// }
// else if (score >= 0 && score <= 59) {
//     grade=('Failed');
// }

//  document.write("your grade acording to the number: ", grade);




// let mode=prompt("enter your mode selection");
// let color=" ";
// if (mode==="dark"){
//     color="black";
// }
// else if (mode==="blue"){
//     color="blue";
// }
// else{ color="white";}

// document.write(color);



// *LOOPS EXAMPLE*//

//  FOR LOOP>>>>>>>>>>>>>>>>>>>
// example1

// var i=1
// var n=7;
// var sum=0;

// for( i=i; i<=n; i++){
//     // sum +=i;  
//      sum=sum+i
//     }
//      document.write("SUM====>" ,sum)

// example2

// let i=1; n=8;
// for( i=i; i<=n; i++){
//     document.write (i,"<br>")
//     for (j=i;j<=n;j++)
//     document.write (j)
// }

// example 3

// let i=1;n=10;
// for (i=i;i<=n;i++){
//     if (i%2===0)
//     // or calling odd number we can write ==> if(i %2 !==0)
//     document.write(i,"<br>")
// }

// WHILE LOOP>>>>>>>>>>>>>>>>>>>>>>

// example 1
// let i=1;n=7;
// while(i<=n){
//     document.write(i,"<br>");
//     i++;
// }



// DO-WHILE LOOP>>>>>>>>>>>>>>>>>>>>

// example 1

// let i=1; n=7;
// do{
//     document.write(i);
//      i++;
// }while(i<=n);


// example2

// let password;
// do{
//     password=prompt('Plz write your passcode');
// }while (password !=="raoismail");

// for-of LOOP================>
// example 1 to find i in string

// let str= "JavaScript";
// for(let i of str){
//     document.write("i===> "+ i,"<br>");
// }

// example 2 to find size or length 
 
// let strg= "JavaScript";
// let length=0;

// for (let value of strg){
//     document.write("value===>",value,"<br>");
//     length++;
// }
// document.write("string size or length ===>",length);


// for-of LOOP================>
// example1

// let student={
//     name:"Rao Ismail",
//     age:35,
//     cgpa:9.5,
//     isPass:true
// };
// for(let i in student){
//     document.write("keys ==>",i,  ".........value==>  ",student[i],"<br>");
// };
 



// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for
//  (var i = 0; i < firstNames.length; i++) {
//      for
//      (var j = 0; j < lastNames.length; j++) {
     
// fullNames.push(lastNames[j] + lastNames[j ]);
 
// document.write(fullNames,"<br>")
// }
// }
 

// let guessNum = 7;
// let yourNum = prompt("Please enter a number of yours Guess");

// while (yourNum != guessNum ) {
//     yourNum = prompt( "You guess a wrong number,Try again");
// }

// alert("Congratulation");


// Template Literals//
// let obj={
//     item:"pen",
//     price:25,
// }
// let output=`the cost of ${obj.item} is ${obj.price} rupess`
// document.write(output)
// //  or the old method is
// document.write("<br>", " the cost of ",obj.item, " is ", obj.price," rupees ")


// ARRAYS==== CHAPTER 4
//  USING FOR LOOPS

// let actors=["rao","ismail","qamar"];
// for (let i = 0; i < actors.length; i++){
//     document.write("idx or i => ",i," actor name==> ",actors[i]," <br> ");
// }

// // USING FOR OF LOOPS (value means i)

// let actor=["rao","ismail","qamar"];
// let length=0;

// for (value of actor ){
//     document.write("actor of  i==>",value,"<br>");
//     length++
// }
// document.write("length=>",length,"<br>")

// EXAMPLE 2
//  TO FIND AVERAGE MARKS OR AVR OF ANY ARRAY

// marks =[90,95,85,92,75];
// sum=0;

// for (value of marks){
//     sum += value
// }
// avg = sum / marks.length
// document.write("sum of marks = ",sum,"<br>")
// document.write(`The average marks of the students is = ${avg}`)


// EXAMPLE QUESTION
//  In  a mall 10% off announced on different prices of items 250,645,300,900,60
// solution

// EXAMPLE 1 BY FOR OF LOOP

// let price = [ 250,645,300,900,60 ];

// let i = 0;
// for (let val of price){
//     document.write(`value at index ${i} = ${val}`,"<br>");
//     let offer = val / 10;
//     price[i] = price[i] - offer;
//     document.write(`The prices of each items in the list after offer is =${price[i]}`,"<br>");
//     i++
//  }


// EXAMPLE 2 BY FOR LOOP

// let price = [250,645,300,900,60];

// for ( let i = 0 ; i < price.length; i++){
//     document.write(`The old prices at value of ${i} is = ${price[i]} `,"<br>" )
//     let offer = price[i] / 10 ;
//     price[i] = price[i] - offer;
//     document.write(`The new prices at value of  ${i} is = ${price[i]}`,'<br>');
// }
    

// EXAMPLE1 USING ALL METHODS OF SLICE ON STRINGS


// var public = prompt("Enter your name");

// public = public.toUpperCase();
// var public1 = public.slice(0,1);
// public = public.toLowerCase();
// var public2 = public.slice(1);

// var concatt = public1 + public2;

// document.write(concatt)


// EXAMPLE2 USING ALL METHODS AND SLICE ON STRINGS

// var public = prompt("Enter your name");

// public = public.toUpperCase();
// var public1 = public.slice(0,1);

// public = public.toLowerCase();
// var public2 = public.slice(1,-1);

// public = public.toUpperCase();
// var public3 = public.slice(-1);

// var concatt = public1 + public2 + public3;

// document.write(concatt,"<br>")
 
// let i = 0;
//  for (let val of concatt){
//     document.write(`The value of each string at index ${i} is ==> ${concatt[i]}`,"<br>");i++
//  }


 // // PRACTICE QUESTION

// var days = ["Sunday","Monday","Tuesday","Wednesday","Friday","Saterday"];
// var getDay = new Date().getDay();
// document.write(`Today the days is = ${days[getDay]}`,"<br>")

// // PRACTICE QUESTION2 

// var todaysDay = new Date().getTime();
// document.write(`The run time for now shows in millisecond is = ${todaysDay}`,"<br>");

// // PRACTICE QUESTION3 Calculater of Age

// var user = prompt("Plz Enter your date of birth");

// var todaysDay = new Date().getTime();
// var dobUser = new Date(user).getTime();
// var netAge = todaysDay - dobUser;
// var formula = netAge / (1000*60*60*24*365);
// document.write(`The Date of birth you Enter is = ${user}`,"<br>");
// document.write(`Your Age is = ${Math.floor(formula)}`)

// PRACTICE QUESTION4 Eid Calculator

// var todaysDay = new Date().getDay();
// var eidDay = new Date('17 jun,2024').getDay();
// var dayLeft = todaysDay - eidDay;
// var formula = dayLeft / (1000*60*60*24*365);
// document.write(formula)
    
// CHAPTER 35  (FUNCTIONS)
// EXAMPLE1

// function sum (x,y){
//    sum = x + y;
//    document.write(`The argumant supplied is ${( x)},${(y)}`,'<br>')
//    return sum;
   
// }
// let val = sum(3,4);
// document.write(`The sum of variables given in argument is ${val}`)

// EXAMPLE2

// function sum (x,y){
//    sum = x + y;
//    document.write(`The argumant supplied is x = ${(x)}, y = ${(y)}`,'<br>');
//    return sum;
// }
  
// let x = +prompt("Enter the Value of x");
// let y = +prompt("Enter the Value of y");
// let val = sum (x,y);

// document.write(`The sum of values given in argument is = ${val}`)


// EXAMPLE 3

// function findMax(arr) {
//    var max = arr[0];
//    for (var i = 1; i < arr.length; i++){
//       if (arr[i] > max){
//       max = arr[i];}
//    }
//    return max;
// }
// document.write(findMax ([1,2,3,4,5]) )

// EXAMPLE 4

// function addTwo(a = 1,b = 5){
//    return a + b
// }
// document.write(addTwo())

// EXAMPLE 5

// function avgSum(arr){
//    let sum = arr[0];

//    for (let i =1;i < arr.length;i++){
//       sum += arr[i];
//    }
//    return sum / arr.length;

// }
// document.write(avgSum([2,3,1]))

// EXAMPLE 6
// TO FIND PALINDROM WHICH THE USER ENTER

// function palinDrome(str){
// let revers = str.split("").reverse().join("");
// if(revers.toLowerCase() === str.toLowerCase()){
//   document.write("The STRING you enter is Palindrome")
// }
// else{
//    document.write("The STRING you enter is Not Palindrome")
// }
// }
// palinDrome(prompt("Enter String to check either Palindrome or not: "));

// To ask teacher

// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars;
//    i++) {
//       if (str.slice(i, i + 2) === " ") {
       
//   alert("No double spaces!");
//       }    
      
//       break;
//    }

// var integerString = "2.3333"
// var num = Number(integerString);
// var num1 = num.toString();

// document.write(num1);



// EXAMPLE OF ROUNDING-OFF INTEGER
let price = 9.95;
let tax = 6.5;
let totalPrice = price + (price * tax/100);
document.write(totalPrice,'<br>');
var prettyTotal = totalPrice.toFixed(2);
document.write(Math.round(totalPrice),'<br>');
document.write(prettyTotal,'<br>')

// ************************************************

let currDate =  new Date();
document.write(currDate,'<br>');

var theDay = currDate.getHours();
document.write(theDay)

// EID ADHA,DAYS LEFT BEHIND********************

var today = new Date();
var eidDay = new Date("June 17, 2024");
var forToday = today.getTime();
var forEidDay = eidDay.getTime();
var msDiff = forEidDay - forToday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
document.write(dDiff)