function Foo (who) {
    this.me = who;
}

Foo.prototype.identify = function() {
  return "I am" + this.me;
};

var a1 = new Foo ("a1");
a1.identify(); //"I am a1"

a1.identify = function () {  // <-- Shadowing
  alert("Hello,  " +
      Foo.prototype.identify.call(this) +
    ".");
};

a1. identify(); // alerts: "Hello, I am a1."
-------------------------------------------------

function Foo (who) {
    this.me = who;
}

Foo.prototype.identify = function() {
  return "I am" + this.me;
};

Foo.prototype.speak = function() {
    alert("Hello, " + this.identify() + // Unicorn magic
  ".");
};

var a1 = new Foo("a1");

a1.speak(); // alerts: "Hello, I am a1."


---------------------------------------------------
/* Prototype: Object Linked */
function Foo(who) {
	this.me = who;
}
Foo.prototype.identify = function() {
	return "I am " + this.me;
};

function Bar(who) {
	Foo.call(this,who);
}
// Bar.prototype = new Foo(); // OR...
Bar.prototype = Object.create(Foo.prototype);
// NOTE: .constructor is borked here, need to fix

Bar.prototype.speak = function() {
	alert("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();
