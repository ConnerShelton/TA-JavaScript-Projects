window.alert(Math.random()*100);

//add 1 to 5
function addFunction() {
    var simple_Math=X=5;
    X++;
    document.getElementById("Math+1").innerHTML="5 + 1 = "+simple_Math;
}

//sub 1 from 6
function subFunction() {
    var simple_Math=Y=X++;
    document.getElementById("Math-1").innerHTML="6 - 1 = "+simple_Math;
}

//simple addition task
function MyFunction() {
    var simple_Math=2+3;
    document.getElementById("Math+").innerHTML="2 + 3 = "+simple_Math;
}

//simple subtraction task
function MyNewFunction() {
    var simple_Math=3-2;
    document.getElementById("Math-").innerHTML="3 - 2 = "+simple_Math;
}

//simple multiplication task
function MyNextFunction() {
    var simple_Math=6*8;
    document.getElementById("Math*").innerHTML="6 - 8 = "+simple_Math;
}

//simple division task
function MyNextNewFunction() {
    var simple_Math=48/6;
    document.getElementById("Math/").innerHTML="48 / 6 = "+simple_Math;
}

//simple pemdas task
function more_Math() {
    var simple_Math=(2+5)*10/2-7;
    document.getElementById("MathP").innerHTML="2 plus 5, multiplied by 10, divided in half and then subtracted by 7 equals "+simple_Math
}

//another simple division task
function AnotherNewFunction() {
    var simple_Math=25%6;
    document.getElementById("Math?").innerHTML="When you divide 25 by 6 you have a remainder of: "+simple_Math;
}

//simple negation task
function negation_Operator() {
    var x=10;
    document.getElementById("MathN").innerHTML=-x;
}

//method
function method_Operator() {
    document.getElementById("Method").innerHTML=Math.log10(10000);
}
