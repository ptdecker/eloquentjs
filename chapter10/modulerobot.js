/*

The Chapter 7 text creates the following bindings for the Robot project:

* roads
* buildGraph
* VillageState
* runRobot
* randomPick
* randomRobot
* mailRoute
* routeRobot
* findRobot
* goalOrientedRobot

In addition, my implementation added:

* lazyRobot (c.f. efficient.js)
* compareRobots (c.f. efficient.js and measure.js)

To support competing 'efficient.js' and 'measure.js', I organized the author's
work into an ES6 module ('resources/meadowfield.js') containing the following
exported bindings:

* VillageState
* randomRobot
* routeRobot
* goalOrientedRobot
* runRobot
* findRoute
* roadGraph

Where 'roadGraph' is needed to implement 'lazyRobot' in efficient.js

Were I to re-work the modules further, I would create two modules with the following bindings:

* village.js which contains bindings related to the village itself
    - roads
    - roadGraph
    - VillageState
    - mailRoute

* robots.js which contains the definitions of robots
    - randomRobot
    - routeRobot
    - goalOrientedRobot
    - lazyRobot

Robots.js would have a dependency on village.js

I personally like to minimize external dependencies, but would probably search for NPM
pacages that manage effecient routing. There might also be packages that support a graph
data structure in a more effecient way than provided by the author.  The village.js and
robots.js would be dependent upon these.

*/
