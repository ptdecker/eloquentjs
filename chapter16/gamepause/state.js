export { State };

// State
//
// An object to track the state of a running game
class State {
    constructor(level, actors, status) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    static start(level) {
        return new State(level, level.startActors, "playing");
    }

    get player() {
        return this.actors.find((a) => a.type == "player");
    }
}

State.prototype.update = function(time, keys) {
    // Handle pause key pressed
    if (keys.Escape) {
        if (this.status == "paused") {
            console.log("resuming play");
            setTimeout(() => console.log("quick dealy"), 5000);
            return new State(this.level, this.actors, "playing");
        }
        console.log("pausing");
        setTimeout(() => console.log("quick dealy"), 5000);
        return new State(this.level, this.actors, "paused");
    }

    // Update all the actors and the state of the game
    let actors = this.actors.map((actor) => actor.update(time, this, keys));
    let newState = new State(this.level, actors, this.status);

    // Bail out if we're not playing
    if (newState.status != "playing") return newState;

    // Update the player
    let player = newState.player;
    // Handle the player running into lava (environment, not actor)
    if (this.level.touches(player.pos, player.size, "lava")) {
        return new State(this.level, actors, "lost");
    }

    // Check for any colissions between the moving elements (actors/sprites) and the player
    for (let actor of actors) {
        if (actor != player && overlap(actor, player)) {
            newState = actor.collide(newState);
        }
    }

    return newState;
};

function overlap(actor1, actor2) {
    return (
        actor1.pos.x + actor1.size.x > actor2.pos.x &&
        actor1.pos.x < actor2.pos.x + actor2.size.x &&
        actor1.pos.y + actor1.size.y > actor2.pos.y &&
        actor1.pos.y < actor2.pos.y + actor2.size.y
    );
}