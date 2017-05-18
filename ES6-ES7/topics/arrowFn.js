/*
function boom() {
  console.log('3.....2......1......BOOOooooomm!!');
}
boom(); // Output 3.....2......1......BOOOooooomm!!
*/
//setTimeout(() => {
//  console.log('3.....2......1......BOOOooooomm!!');
// }, 1000);
/*
const boom = () => {
  console.log('3.....2......1......BOOOooooomm!!');
}
boom();
*/
/*
this.a = 25;

let print = function() {
  console.log('this.a', this.a);
}

print();

let arrowPrint = () => {
    console.log('this.a in arrowPrint', this.a)
}

arrowPrint();
*/

let lengths = [3, 7, 5];
let multiple = 8;

const scale = lengths.map(el => el * multiple);

console.log(scale);
