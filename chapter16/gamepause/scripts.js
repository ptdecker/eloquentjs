// scripts.js
//
// JavaScript loaed by index.html in support of exercise

import * as levels from "./levels.js";
import * as render from "./domdisplay.js";
import * as control from "./runengine.js";

control.runGame(levels.GAME_LEVELS, render.DOMDisplay);