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

function capitalize(caps) {
  return caps.charAt(0);
}

planetsCapitalized = planets.map(capitalize);
console.log(planetsCapitalized);



// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];