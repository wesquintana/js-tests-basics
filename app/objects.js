// Dog Challenges

// Add the following properties to the dog object: name, legs, tail, and likes.
// The name property should have a value that is a string, the legs property
// should have a value that is a number, the tail property should have a
// boolean value, and the likes property should have a value that is an
// array.Inside the array, include at least 4 values.
let goodDoggo = {
  name: "Rolla",
  legs: 4,
  tail: true,
  likes: ["birds", "Wesley", "Her Bed", "Running"]
  //your code in here
};

// write a function that returns the value of the legs property on your dog object using dot notation.
function howManyLegs() {
  // your code inside here
  // don't forget to use the return keyword
  return goodDoggo.legs;
}

// Cat Challenges

let cat = {
  name: "Pickles",
  legs: 4,
  whiskers: true,
  likes: [
    "napping",
    "playing",
    "running at 2:00am",
    "pets",
    "stealing food off the counter"
  ]
};

// Write a function that uses bracket notation to change the cat's name from
// "Pickles" to "Kevin".Then use either dot or bracket notation to return
// the value of the name property.
function renameCat() {
  cat.name = "Kevin";
  return cat.name;
  // your code inside here
}

// Create a function that uses dot or bracket notation to create a property
// on the cat object called "color" and assign it to any color you'd like.
// Then return the value of the color property.

function colorTheCat() {
  cat.color = "#e67802";
  return cat.color;
  // your code inside here
}

// Delete the whiskers property off of the cat object. You may use either dot or bracket notation.
delete cat.whiskers;
// Write a function that uses dot AND bracket notation to access and return the
// value of the fourth item in the likes array("pets").
// Example: objectName.property[indexNumber]

function returnIndex(cat) {
  // your code inside here
  return cat.likes[3];
}
