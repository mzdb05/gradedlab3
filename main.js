//create function to execute sentence once button is clicked

function ExeSentence(){

    //get the users sentence
let usersentence = document.getElementById("sentence").value;

//in the sentence replace the special characters with a space so that counting the words are easier

usersentence  = usersentence .replace(",", "");
usersentence  = usersentence .replace("!", "");
usersentence  = usersentence .replace("@", "");
usersentence  = usersentence .replace("#", "");
usersentence  = usersentence .replace("$", "");
usersentence  = usersentence .replace("%", "");
usersentence  = usersentence .replace("^", "");
usersentence = usersentence.replace("&", "");
usersentence = usersentence.replace("*", "");
usersentence = usersentence.replace("(", "");
usersentence = usersentence.replace(")", "");
usersentence = usersentence.replace("-", "");
usersentence = usersentence.replace("_", "");
usersentence = usersentence.replace("+", "");
usersentence = usersentence.replace("=", "");
usersentence = usersentence.replace("{", "");
usersentence = usersentence.replace("}", "");
usersentence = usersentence.replace("[", "");
usersentence = usersentence.replace("]", "");
usersentence = usersentence.replace(";", "");
usersentence = usersentence.replace(":", "");
usersentence = usersentence.replace("'", "");
usersentence = usersentence.replace("<", "");
usersentence = usersentence.replace(">", "");
usersentence = usersentence.replace(".", "");
usersentence = usersentence.replace("?", "");
usersentence = usersentence.replace("`", "");
usersentence = usersentence.replace("~", "");

//split the user sentence by the whitespaces to count the number of words

let userwords = usersentence.split(" ");

//count the number of words in the sentence
// initialise the word count
let wordcount = userwords.length;
// use the sent count ID in html cause that value = the word count variable we initialised 
document.getElementById("sent-count").value = wordcount;

// store the words and its count in the div container on the html document
let wordoutput = document.getElementById("words");

// inner html clears previous output if the execute button is pressed again
//create empty string to place new sentence 
let finaloutput = "";

//create loop for underlining words

for(let i = 0; i < userwords.length; i++){
    finaloutput += "<u>" + userwords[i] + "</u> ";    
    wordoutput.innerHTML = finaloutput;
}

wordoutput.innerHTML = finaloutput ;


}

//allows user to press button multiple times
window.onload = function(){
    document.getElementById("Execute").onclick = ExeSentence;
}
