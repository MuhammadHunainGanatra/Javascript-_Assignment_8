// //Task 1//
document.write("<h1>Task #  1</h1>");
var letter=prompt("Enter a Letter to cheack a lucky Number ");
if( letter ==="a" ){
    alert("This Lucky Number is 97");
    document.write("This Lucky Number is 97");
}
else if( letter ==="A" ){
    alert("This Lucky Number is 65");
    document.write("This Lucky Number is 65");
}
else if( letter ==="Z" ){
    alert("This Lucky Number is 90");
    document.write("This Lucky Number is 90");
}
else if( letter ==="z" ){
    alert("This Lucky Number is 122");
    document.write("This Lucky Number is 122");
}

else{
    alert("This letter is not exit");
    document.write("This letter is not exit");
}
// //Task2//
document.write("<h1>Task #  2</h1>");
var num1=+prompt("Enter a Number1 ");
var num2=+prompt("Enter a Number2");
if( num1 > num2 ){
    alert("This number is One  Greater ");
    document.write("This number is One  Greater");
}
else if( num1 < num2 ){
    alert("This number is Two  Greater ");
    document.write("This number is Two  Greater");
}
else if( num1 = num2 ){
    alert("This number is  Equal");
    document.write("This number is  Equal");
}
else{
    alert("This is not a Number");
    document.write("This is not a Number");
}
//Task3//
document.write("<h1>Task #  3 </h1>");
var num=+prompt("Enter a Number")
if( num > 0 ){
    alert("This number is  Positive");
    document.write("This number is  Positive");
}
else if( num <0 ){
    alert("This number is  Negative");
    document.write("This number is  Negative");
}
else{
    alert("This number is  Zero Number");
    document.write("This is a Zero Number");
}
//Task4//
document.write("<h1>Task #  4 </h1>");
var vowel=prompt("Enter a vowel") .toLowerCase();
if( vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" ){
    alert("This is a Vowel");
    document.write("This is a Vowel");
}
else{
    alert("This is not a Vowel");
    document.write("This is not a Vowel");
}
//Task5//
document.write("<h1>Task #  5 </h1>");
var password=("IT@student")
var userpass=prompt("Enter to  his/her password")
if( password === userpass){
    alert("Correct Password");
    document.write("Correct Password");

}
else if (userpass ===""){
    alert("Please enter your password");
    document.write("Please enter your password");
}
else{
    alert("In Correct Password");
    document.write("In Correct Password");
}
//Task6//
document.write("<h1>Task #  6 </h1>");
var hour=+prompt("Enter a time")
if( hour <=12){
alert("Good Day");
document.write("Good Day");
}
else if( hour <=24){
    alert("Good evening");
    document.write("Good evening");
}
else{
    alert("Enter a Corect Number");
    document.write("Enter a Corect Number");
}
//Task7//
document.write("<h1>Task #  7 </h1>");
var hours=+prompt("Enter a Number 100 to 2400");
if (hours >=100 && hours<=1200 ){
    alert("Good Morning");
    document.write("Good Morning");
}
else if (hours >=1200 && hours<=1700){
    alert("Good Afternon");
    document.write("Good Afternon");
}
else if (hours >=1700 && hours<=2100){
    alert("Good Evening");
    document.write("Good Evening");
}
else if (hours >=2100 && hours<=2400){
    alert("Good Night");
    document.write("Good Night");
}
else{
    alert("Enter a Correct Time");
    document.write("Enter a Correct Time");
}
