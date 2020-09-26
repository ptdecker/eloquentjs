// Vec
//
// A class that represents two-dimentional vectors and supports vector
// addition and subtraction (from Chapter 6 with the addition of times())

export { Vec };

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(v) {
        return new Vec(this.x + v.x, this.y + v.y);
    }

    minus(v) {
        return new Vec(this.x - v.x, this.y - v.y);
    }

    times(factor) {
        return new Vec(this.x * factor, this.y * factor);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}