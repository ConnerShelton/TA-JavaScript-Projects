//basic dictionary func.
function my_Dictionary() {
    var Animal= {
        Species:"Cat",
        Color:"Orange",
        Breed:"Tabby",
        Age:3,
        Sound:"Meow!"
    };
//deleting value so it cannot display
    delete Animal.Color;
    document.getElementById("Dictionary").innerHTML=Animal.Color;
}