/*
let game = [12, 22, 66, 100];

let addOne = function(element){
  return element + 1;
}
points = game.map(addOne);

console.log(points);
*/

let game = [12, 22, 66, 100];
points = game.map(el => el + 1);
console.log(points);
