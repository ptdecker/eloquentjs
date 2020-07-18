// persistent.js
//
// Implements a persistent group.  Note that if a group will remain unchanged
// following an add or delete function, the original group is returned.  Thus
// operations that do not cause the group to actualy change do not require 
// additional memory usage.


class PGroup {
    constructor(items) {
        this.group = items;
    }

    has(item) {
        return this.group.includes(item);
    }

    add(item) {
        if (this.has(item)) return this;
        return new PGroup(this.group.concat([item]))
    }

    delete(item) {
        if (!this.has(item)) return this;
        return new PGroup(this.group.filter((v) => (v != item)));
    }

}

// The reason we can use one PGroup.empty instead of creating a new empty group
// every time is because since all functions on PGroup result in a new group when
// appropriate, PGroup.empty can persist as a representation of the empty group
PGroup.empty = new PGroup([]);

// Official test cases from https://eloquentjavascript.net/code/#7.3

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false