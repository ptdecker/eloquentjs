import * as vec from "./vec.js";
import * as states from "./state.js";

export { Player, Lava, Coin };

const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

// Player
//
// An object that defines a player actor
class Player {
    constructor(pos, speed) {
        this.pos = pos;
        this.speed = speed;
    }

    get type() {
        return "player";
    }

    static create(pos) {
        return new Player(pos.plus(new vec.Vec(0, -0.5)), new vec.Vec(0, 0));
    }
}

Player.prototype.size = new vec.Vec(0.8, 1.5);

Player.prototype.update = function(time, state, keys) {
    let xSpeed = 0;
    if (keys.ArrowLeft) xSpeed -= playerXSpeed;
    if (keys.ArrowRight) xSpeed += playerXSpeed;
    let pos = this.pos;
    let movedX = pos.plus(new vec.Vec(xSpeed * time, 0));
    if (!state.level.touches(movedX, this.size, "wall")) {
        pos = movedX;
    }
    let ySpeed = this.speed.y + time * gravity;
    let movedY = pos.plus(new vec.Vec(0, ySpeed * time));
    if (!state.level.touches(movedY, this.size, "wall")) {
        pos = movedY;
    } else if (keys.ArrowUp && ySpeed > 0) {
        ySpeed = -jumpSpeed;
    } else {
        ySpeed = 0;
    }
    return new Player(pos, new vec.Vec(xSpeed, ySpeed));
};

// Lava
//
// An object that defines the lava actor

class Lava {
    constructor(pos, speed, reset) {
        this.pos = pos;
        this.speed = speed;
        this.reset = reset;
    }

    get type() {
        return "lava";
    }

    static create(pos, ch) {
        if (ch == "=") {
            return new Lava(pos, new vec.Vec(2, 0));
        }
        if (ch == "|") {
            return new Lava(pos, new vec.Vec(0, 2));
        }
        if (ch == "v") {
            return new Lava(pos, new vec.Vec(0, 3), pos);
        }
    }
}

Lava.prototype.size = new vec.Vec(1, 1);

Lava.prototype.collide = function(state) {
    return new states.State(state.level, state.actors, "lost");
};

Lava.prototype.update = function(time, state) {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, "wall")) {
        return new Lava(newPos, this.speed, this.reset);
    }
    if (this.reset) {
        return new Lava(this.reset, this.speed, this.reset);
    }
    return new Lava(this.pos, this.speed.times(-1));
};

const wobbleSpeed = 8;
const wobbleDist = 0.07;

// Coin
//
// An object that defines the coin actor
class Coin {
    constructor(pos, basePos, wobble) {
        this.pos = pos;
        this.basePos = basePos;
        this.wobble = wobble;
    }

    get type() {
        return "coin";
    }

    static create(pos) {
        let basePos = pos.plus(new vec.Vec(0.2, 0.1));
        return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
    }
}

Coin.prototype.size = new vec.Vec(0.6, 0.6);

Coin.prototype.collide = function(state) {
    let filtered = state.actors.filter((a) => a != this);
    let status = state.status;
    if (!filtered.some((a) => a.type == "coin")) status = "won";
    return new states.State(state.level, filtered, status);
};

Coin.prototype.update = function(time) {
    let wobble = this.wobble + time * wobbleSpeed;
    let wobblePos = Math.sin(wobble) * wobbleDist;
    return new Coin(
        this.basePos.plus(new vec.Vec(0, wobblePos)),
        this.basePos,
        wobble
    );
};