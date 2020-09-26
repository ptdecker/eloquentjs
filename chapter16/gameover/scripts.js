// scripts.js
//
// JavaScript loaed by index.html in support of exercise

import * as levels from "../blueengine/levels.js";
import * as render from "../blueengine/domdisplay.js";
import * as control from "../blueengine/runengine.js";

// Redefined runGame() to support keeping track of lives.  This overrides the
// runGame() funtion defined in the runengine.js module
async function runGame(plans, Display) {
    let remainingLives = 3;
    for (let level = 0; level < plans.length && remainingLives > 0;) {
        console.log(
            `You have ${remainingLives} ${
        remainingLives == 1 ? "life" : "lives"
      } left`
        );
        let status = await control.runLevel(
            new levels.Level(plans[level]),
            Display
        );
        if (status == "won") level++;
        if (status == "lost") remainingLives--;
    }
    console.log(`You've ${remainingLives > 0 ? "won" : "lost"}!`);
}

runGame(levels.GAME_LEVELS, render.DOMDisplay);