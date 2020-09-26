// scripts.js
//
// JavaScript loaed by index.html in support of exercise

import * as levels from "../blueengine/levels.js";
import * as render from "../blueengine/domdisplay.js";
import * as control from "../blueengine/runengine.js";

control.runGame(levels.GAME_LEVELS, render.DOMDisplay);