//learning concat element
function full_Sentence() {
    var part_1="I have ";
    var part_2="made this ";
    var part_3="into a complete ";
    var part_4="sentence.";
    var Whole_sentence=part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=Whole_sentence
}

//learning slice element
function slice_Method() {
    var Sentence="All work and no play makes Jhonny a dull boy.";
    var Section=Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML=Section;
}

//learning uppercase element
function myFunction() {
    var str = "Welcome to the program!!!";
    var res = str.toUpperCase();
    document.getElementById("Greeting").innerHTML = res;
}

//learning search element
function myFunction1() {
    var str = "Leon has a blue uniform."
    var n = str.search(/blue/i);
    document.getElementById("Search").innerHTML = n;
  }

//learning string element
function string_Method() {
    var Y=182;
    document.getElementById("Numbers_to_string").innerHTML=Y.toString();
}

//learning toprecision
function precision_Method() {
    var X=12938.3012987376112;
    document.getElementById("Precision").innerHTML=X.toPrecision(10);
}

//toFixed element
function myFunction2() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("toFixed").innerHTML = n;
}

//valueOf element
function myFunction3() {
    var str = "Here we go again!";
    var res = str.valueOf();
    document.getElementById("valueOf").innerHTML = res;
  }