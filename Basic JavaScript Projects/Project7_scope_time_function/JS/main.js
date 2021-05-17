//global variable ex.
var X=10;
function Add_numbers_1() {
    document.write(20+X+"<br>");
    document.getElementById("Add1").innerHTML;
}
function Add_numbers_2() {
    document.write(X+100);
    document.getElementById=("Add2").innerHTML;
}

//local variable ex.
function Add_numbers_3() {
    var Y=10;
    document.write(20+Y+"<br>");
    document.getElementById("Add3").innerHTML;
}
function Add_numbers_4() {
    document.write(Y+100);
    document.getElementById("Add4").innerHTML;
}

//utilizing if statement
function get_Date() {
    if (new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

//utilizing else statement
function If_Else() {
    Age=document.getElementById("Age").value;
    if (Age>=21) {
        Adult="You are old enough to purchace alcohol!";
    }
    else {
        Adult="You are not old enough to purchace alcohol!";
    }
    document.getElementById("How_old_are_you").innerHTML=Adult;
}

//utilizing else if statement
function Time_function() {
    var Time=new Date().getHours();
    var Reply;
    if (Time<12==Time>0) {
        Reply="It is morning time!";
    }
    else if (Time>=12==Time<18) {
        Reply="It is afternoon.";
    }
    else {
        Reply="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}