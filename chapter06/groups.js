// groups.js
//
// Implements a class similar to the standard JavaScript set data set

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
    this.group = this.group.filter((v) => v != item);
  }

  static from(items) {
    let newGroup = new Group();
    for (let item of items) {
      newGroup.add(item);
    }
    return newGroup;
  }
}

// Official test cases from https://eloquentjavascript.net/code/#6.2

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Additional test cases
group.delete(20);
group.delete(20);
console.log(group);
