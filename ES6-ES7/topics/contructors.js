class players {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }

    greet() {
      console.log(`Hello, I´m ${this.name} and i player i ${this.position} on footbal`);
    }
}

export default players;

// Another File.

import players from './contructors';

class uefa extends players{
    contructor (name, position) {
        super(name, position);
    }
    greet(){
        console.log(`We are the ${this.position} call us ${this.name}`);
    }
}
let Liga = new uefa("Brazil", "Champion");
console.log(Liga);
Liga.greet();
