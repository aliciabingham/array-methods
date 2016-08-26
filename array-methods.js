var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

planets.forEach( function outputPlanets(){
  var output = document.getElementById('planets');
  output.innerHTML = planets;
});


// Use the map method to create a new array where the first letter of each planet is capitalized
var caps = planets.map(function(newPlanets) {
  return newPlanets.charAt(0).toUpperCase() + newPlanets.slice(1);
});

console.log(caps);


// Use the filter method to create a new array that contains planets with the letter 'e'

function filterIt(myPlanets) {
  if (myPlanets.indexOf('e') != -1) {
    return myPlanets;
  }
}

var filteredPlanets = planets.filter(filterIt);
console.log(filteredPlanets);



// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function sentence(previousValue, currentValue) {
  return previousValue + currentValue;
}

var newerWords = words.reduce(sentence);
console.log(newerWords);

var newWords = words.reduce( (prev, curr) => prev + curr );
console.log(newWords);