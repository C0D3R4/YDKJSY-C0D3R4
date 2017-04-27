/* Closure is when a function "Remembers" its lexical scope even when the function is executed outside that lexical scope. */
/* Scope stay around, as long the Closure go away.*/
/* IIFE or Let for a callback inside a loop bevave badly  */
/*   */

 function foo () {
      var bar = "bar";

      function baz() {
            console.log(bar);
      }
      bam(baz); // lexical scope he can acess.
 }

 function bam(baz) {
    baz();  // bar this is Closure can acess outside.
 }

 foo();

------------------------------------------

function foo () {
     var bar = "bar";

     return function() {
           console.log(bar);
     };
}

function bam() {
   foo ()();  // bar this is Closure can acess outside.
   // The first () get the function back.

}

bam();

------------------------------------------

function foo() {
    var bar = 0;

    setTimeout( function() {
        var vaz = 1;
        console.log(bar++);

        setTimeout(function(){
            console.log(bar+baz);
        }, 200);
    }, 100);
    }
foo();  // 0 2
