var numberOfAdj = 10
var numberOfNouns = 10

var adj = new BuildArray(numberOfAdj)
var nouns = new BuildArray(numberOfNouns)

//adjectives
adj[1] = "red"
adj[2] = "angry"
adj[3] = "green"
adj[4] = "blue" 
adj[5] = "happy"
adj[6] = "sad"
adj[7] = "excited"
adj[8] = "tall"
adj[9] = "short"
adj[10] = "shiny"
//nouns
nouns[1] = "bird"
nouns[2] = "t-shirt"
nouns[3] = "penguin"
nouns[4] = "chair" 
nouns[5] = "computer"
nouns[6] = "pencil"
nouns[7] = "phone"
nouns[8] = "whiteboard"
nouns[9] = "backpack"
nouns[10] = "chicken nugget"
//build an array function
function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++)
{
    this[i] = null
}
return this
}

function PickRandomWord(form) {
var rand1 = Math.ceil(Math.random() * numberOfAdj)
var rand2 = Math.ceil(Math.random() * numberOfNouns)

// Display the word inside the text box
form.WordBox.value = adj[rand1] +" " + nouns[rand2]
// form.WordBox.value = nouns[rand2]
}