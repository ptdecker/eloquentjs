// lockbox.js
//
// Simulates accessing a box that could be locked or unlocked

function withBoxUnlocked(body) {
    box.unlock()
    body()
    box.lock()
}

// Official test cases and box from https://eloquentjavascript.net/code/#8.2

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}

console.log(box.locked);
// → true