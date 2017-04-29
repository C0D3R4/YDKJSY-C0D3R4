/* Mapping is a fundamental functional programming technique for operating on all of the elements in an array and producing another array of the same length with transformed contents. */


/*Mapping using For
All we did was define a few variables: an array called animals that contained our words, an empty array called lengths that will contain the output of our operation, and a variable called item to temporarily store each of the items that we were going to be manipulating within each loop of the array. We set up a for loop with a temporary internal count variable and a loops variable to optimize our for loop. Then we iterated through each of the items up to the length of the animals array. For each one we calculated the length, and pushed that onto the lengths array. */

var animals = ["cat","dog","fish"];
var lengths = [];
var item;
var count;
var loops = animals.length;
for (count = 0; count < loops; count++){
  item = animals[count];
  lengths.push(item.length);
}
console.log(lengths); //[3, 3, 4]


/* Mapping using Map */

var animals = ["cat","dog","fish"];
var lengths = animals.map(function(animal) {
  return animal.length;
});
console.log(lengths); //[3, 3, 4]

---------------------------------------------------

var animals = ["cat","dog","fish"];
function getLength(word) {
  return word.length;
}
console.log(animals.map(getLength)); //[3, 3, 4]

/* Reduce */

/* Using Reduce
The reduce() method is also new in ECMAScript 5, and it’s similar to map(), except that instead of producing another functor, reduce() produces a single result that may be of any type. For example, imagine that you wanted to get the sum of the lengths of all of the words in our animals array as a number. You might start by doing something like this: */

var animals = ["cat","dog","fish"];
var total = 0;
var item;
for (var count = 0, loops = animals.length; count < loops; count++){
  item = animals[count];
  total += item.length;
}
console.log(total); //10

/* After we define our initial array, we create a variable total for the running total, set initially to zero. We also create a variable item to hold each iteration of the animals array as it goes through the for loop, and a variable count for the loop counter, as well as a loops variable to optimize our iterations. Then we run a for loop to iterate through all of the words in the animals array, assigning each one to the item variable. Finally we add the length of each item to our total. */

var animals = ["cat","dog","fish"];
var total = animals.reduce(function(sum, word) {
  return sum + word.length;
}, 0);
console.log(total);


var animals = ["cat","dog","fish"];
var addLength = function(sum, word) {
  return sum + word.length;
};
var total = animals.reduce(addLength, 0);
console.log(total);



https://www.sitepoint.com/map-reduce-functional-javascript/
