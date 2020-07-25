// efficient.js
//
// Defines a more efficient robot
//
// NOTE: I wasn't able to figure this one out so ended up breaking down and
// using the algorithm defined by the author where a route for each parcel
// is evaluated using the defined findRoute() algorithm.  What is interesting,
// is that I could not see where lazyRobot() is any better then the
// goal oriented robot.  Every time I ran it, at 10,000 iterations a run,
// I always got the same results. This is obviously strage so wondering
// if I did something wrong.

import * as meadowfield from "../resources/meadowfield.js";

// See https://eloquentjavascript.net/code/#7.2 for the solution from which
// this implementation directly pulls

function lazyRobot({ place, parcels }, route) {
  if (route == undefined || route.length == 0) {
    let routes = parcels.map((parcel) => {
      return {
        route: meadowfield.findRoute(
          meadowfield.roadGraph,
          place,
          parcel.place == place ? parcel.address : parcel.place
        ),
        pickup: parcel.place != place,
      };
    });

    function score({ route, pickup }) {
      return (pickup ? 0.5 : 0) - route.length;
    }

    route = routes.reduce((a, b) => (score(a) > score(b) ? a : b)).route;
  }
  return { direction: route[0], memory: route.slice[1] };
}

function compareRobots(robot1, robot2, iterations) {
  let turns1 = 0;
  let turns2 = 0;
  iterations = iterations || 100; // default to 100
  for (let i = 1; i <= iterations; i++) {
    const testState = meadowfield.VillageState.random();
    turns1 += meadowfield.runRobot(testState, robot1, "", true);
    turns2 += meadowfield.runRobot(testState, robot2, "", true);
  }
  turns1 /= iterations; // calc the average
  turns2 /= iterations;
  console.log("Average turns:");
  console.log(`   Robot 1: ${turns1}`);
  console.log(`   Robot 2: ${turns2}`);
}

compareRobots(lazyRobot, meadowfield.goalOrientedRobot, 10000);
compareRobots(lazyRobot, meadowfield.goalOrientedRobot, 10000);
