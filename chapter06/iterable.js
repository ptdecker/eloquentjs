// iterable.js
//
// Extends group so that it is iterable

class Group {
    constructor() {
        this.group = [];
    }

    has(item) {
        return this.group.includes(item);
    }

    add(item) {
        if (this.has(item)) {
            return;
        }
        this.group.push(item);
    }

    delete(item) {
        this.group = this.group.filter((v) => (v != item));
    }

    static from(items) {
        let newGroup = new Group();
        for (let item of items) { newGroup.add(item) };
        return newGroup;
    }
}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {
        if (this.index >= this.group.group.length) return { done: true };
        let value = { done: false, value: this.group.group[this.index] };
        this.index++;
        return value;
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this)
}

// Official test cases from https://eloquentjavascript.net/code/#6.3

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c