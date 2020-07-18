// measure.js
//
// Compares the perfromance of two robots

import * as meadowfield from "../resources/meadowfield.js"

function compareRobots(robot1, robot2, iterations) {
    let turns1 = 0;
    let turns2 = 0;
    iterations = iterations || 100 // default to 100
    for (let i = 1; i <= iterations; i++) {
        const testState = meadowfield.VillageState.random();
        turns1 += meadowfield.runRobot(testState, robot1, "", true)
        turns2 += meadowfield.runRobot(testState, robot2, "", true)
    }
    turns1 /= iterations;
    turns2 /= iterations;
    console.log("Average turns:");
    console.log(`   Robot 1: ${turns1}`);
    console.log(`   Robot 2: ${turns2}`);
}

compareRobots(meadowfield.routeRobot, meadowfield.goalOrientedRobot);

compareRobots(meadowfield.randomRobot, meadowfield.goalOrientedRobot);