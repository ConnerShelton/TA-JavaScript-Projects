//display NaN
function my_Function() {
    document.getElementById("Test").innerHTML=0/0;
}

//is NaN display true
function my_Function1() {
    document.getElementById("Test1").innerHTML=isNaN('String');
}

//is NaN display false
function my_Function2() {
    document.getElementById("Test2").innerHTML=isNaN('007');
}

//display infinity
function my_Function3() {
    document.getElementById("Test3").innerHTML=3E310;
}

//display negative infinity
function my_Function4() {
    document.getElementById("Test4").innerHTML=-3E310;
}

//display element type
function my_Function5() {
    document.getElementById("Test5").innerHTML=typeof 5;
}

//add element to the end of string
function my_Function6() {
    document.getElementById("Test6").innerHTML=("25" + 5);
}

//boolian logic true
function my_Function7() {
    document.getElementById("Test7").innerHTML=(10>5);
}

//boolian logic false
function my_Function8() {
    document.getElementById("Test8").innerHTML=(30<=20);
}

//in console add up to 50
function my_Function9() {
    document.getElementById("Test9").innerHTML=console.log(32+18);
}

//in console boolian false
function my_Function10() {
    document.getElementById("Test10").innerHTML=console.log(32<18);
}

//true function using == 
function my_Function11() {
    document.getElementById("Test11").innerHTML= 10==10;
}

//false function using == 
function my_Function12() {
    document.getElementById("Test12").innerHTML= 17==10;
}

//true function using === 
function my_Function13() {
    document.getElementById("Test13").innerHTML= 10===10;
}

//false function using === 
function my_Function14() {
    document.getElementById("Test14").innerHTML= 17==="Spectre";
}

//false function using === 
function my_Function15() {
    document.getElementById("Test15").innerHTML= 17==="17";
}

//false function using === 
function my_Function16() {
    document.getElementById("Test16").innerHTML= "Spectre"==="Robot";
}

//true function using &&AND 
function my_Function17() {
    document.getElementById("Test17").innerHTML= ("Spectre" == "Spectre") && ("Robot" == "Robot");
}

//false function using &&AND 
function my_Function18() {
    document.getElementById("Test18").innerHTML= (10==10) && (17<10);
}

//true function using ||OR
function my_Function19() {
    document.getElementById("Test19").innerHTML= ("Spectre" == "Spectre") || ("20" == "Robot");
}

//false function using ||OR 
function my_Function20() {
    document.getElementById("Test20").innerHTML= (10==5) || (17<10);
}

//true function using !NOT 
function my_Function21() {
    document.getElementById("Test21").innerHTML= !("Robot" == "Spectre");
}

//false function using !NOT 
function my_Function22() {
    document.getElementById("Test22").innerHTML= !(10==10);
}