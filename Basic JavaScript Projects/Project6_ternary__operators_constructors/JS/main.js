function Ride_Function() {
    var Height, Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride=(Height<52)?"You are to short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride";
}

function Vote_Function() {
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age<18)?"You are to young":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_vote+" to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik=new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a "+Erik.Vehicle_Color+"-colored "+Erik.Vehicle_Model+
    " manufactured in "+Erik.Vehicle_Year;
}

function Game(Style, Style2, Engine, Shading) {
    this.Game_Style=Style;
    this.Game_Style2=Style2;
    this.Game_Engine=Engine;
    this.Game_Shading=Shading;
}
var Escape_from_Tarkov=new Game("Realistic", "FPS", "Unity", "Phong Shading");
var Borderlands_2=new Game("Looter", "FPS", "Unreal", "Cel Shading");
var Kingdom_Come_Deliverance=new Game("Realistic", "FP Melee Combat", "CryEngine", "Phong Shading");
function myFunction1() {
    document.getElementById("New_and_This").innerHTML=
    "Kingdom Come:Deliverance is a "+Kingdom_Come_Deliverance.Game_Style+" First Person \"Medieval Combat Game\" that uses the "+Kingdom_Come_Deliverance.Game_Engine;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var Starting_point=9;
        function Plus_one() {Starting_point+=1;}
        Plus_one();
        return Starting_point;
    }
}