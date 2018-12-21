var  animals = ["zebra", "lion", "frog", "dog", "crocodile"];
var officeSupplies = ["Pencil", "Printer", "Stapler", "Paper", "Pen"];
var slang = ["Boi", "Hella", "Sheesh", "Bruh", "Hyphy"];
var musicalArtists= ["Beyonce", "Tupac", "Kendrick", "Kanye", "Logic"];
var countries = ["Uganda", "Mexico", "Brazil", "Canada", "France"];
var images = ["img/1.png","img/7.png","img/6.png","img/5.png","img/4.png","img/3.png","img/2.png", "img/0.png"];
var word ;
var guesses = 7;
var guessedLetters = [] ;
var realAnswer = "";

function start() {
    var categories = document.getElementById("hangmanCategories").value;

    var theRealCategory = determineCategories(categories);

    word = theRealCategory[Math.floor(Math.random() * theRealCategory.length)].toLowerCase();

    guessedLetters = [];

    guesses = 7;

    reset();

    printWord();

    var buttons = document.getElementsByClassName("letterBtn")

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }


    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("guesses").innerHTML = guesses;
}

function reset(){
    guessedLetters = [];
    guesses = 7;
    document.getElementById("image").src = images[7];
    document.getElementById("Congratulation").innerHTML = "";

}

function printWord(){
    var answer = "";
    for(var i = 0; i < word.length; i++){
        if(guessedLetters.indexOf(word[i]) > -1){
            answer += word[i];
        }else{
            answer += " _ ";
        }
    }

    document.getElementById("printLetters").innerHTML = answer;

    realAnswer = answer;

}


function determineCategories(categories) {
    if(categories == "Animals"){
        categories = animals;
    }
    if(categories == "Office Supplies"){
        categories = officeSupplies;
    }
    if(categories == "Slang"){
        categories = slang;
    }
    if(categories == "Musical Artists"){
        categories = musicalArtists;
    }
    if(categories == "Countries"){
        categories = countries;
    }
    return categories;
}

function guessLetter(letter) {
    console.log(letter);
    console.log(letter.value);
    guessedLetters.push(letter.value);
    var buttons = document.getElementsByClassName("letterBtn")
    printWord();

    if(word.indexOf(letter.value) == -1){
        guesses -= 1;
        document.getElementById("image").src = images[guesses];
    }
    if(realAnswer == word){
        document.getElementById("Congratulation").innerHTML = "Congratulations!! You Won!"
        document.getElementById("image").src = "img/giphy.gif";
    }
    if(guesses == -1 && realAnswer != word){
        document.getElementById("Congratulation").innerHTML = "You Lost Loser!!!"
        document.getElementById("image").src = "img/tenor.gif";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        return false;
    }

    letter.disabled = true;

    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("guesses").innerHTML = guesses;
}

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}