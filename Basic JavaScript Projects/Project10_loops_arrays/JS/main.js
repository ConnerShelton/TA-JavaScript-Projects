//utilize while loop function
function Call_Loop() {
    var Digit="";
    var X=1;
    while(X<11) {
        Digit += "<br>"+X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

//utilizing a string length function
function String_Length() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("Length").innerHTML = n;
}

//utilize for loop function
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y <Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}

//utilize array function
function array_Function() {
    var Picture=[];
    Picture[0]="sleeping";
    Picture[1]="playing";
    Picture[2]="eating";
    document.getElementById("Array").innerHTML="In this picture, they are "+
        Picture[2]+".";
}

//utilize const function
function constant_Function() {
    const Instrument= {type:"guitar", brand:"Fender", color:"black"};
    Instrument.color="red";
    Instrument.price="1000";
    document.getElementById("Constant").innerHTML="The cost of the  "+
        Instrument.type+" was "+Instrument.price;
}

//utilize let function
function let_Function() {
    var Z=52;
    letfunc1=Z;
    {
        let Z=24;
        letfunc2="<br>"+Z;
    }
    letfunc3="<br>"+Z;
    document.getElementById("LetFunc").innerHTML=letfunc1+letfunc2+letfunc3;
}

//Id like to think this is right, but it will not display in the webpage for some reason and wont even show an error
function return_Function() {
    {
    return Math.PI;
    }
document.getElementById("Return").innerHTML;
}

