// vector.js
// 
// A new class that represents two-dimentional vectors and supports vector
// addition and subtraction

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(v) {
        return new Vec(this.x + v.x, this.y + v.y)
    }

    minus(v) {
        return new Vec(this.x - v.x, this.y - v.y)
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

}

// Official test cases from https://eloquentjavascript.net/code/#6.1

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// Additional test cases
console.log(new Vec(0, 0).length);
// → 0