// meadowfield.js

export {
    VillageState,
    randomRobot,
    routeRobot,
    goalOrientedRobot,
    runRobot,
    findRoute,
    roadGraph
}

const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall"
];

const roadGraph = buildGraph(roads);

const mailRoute = [
    "Alice's House",
    "Cabin",
    "Alice's House",
    "Bob's House",
    "Town Hall",
    "Daria's House",
    "Ernie's House",
    "Grete's House",
    "Shop",
    "Grete's House",
    "Farm",
    "Marketplace",
    "Post Office"
];

class VillageState {

    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {

        if (!roadGraph[this.place].includes(destination)) {
            return this;
        }

        let parcels = this.parcels.map(p => {
            if (p.place != this.place) return p;
            return { place: destination, address: p.address };
        }).filter(p => p.place != p.address);

        return new VillageState(destination, parcels);
    }
}

VillageState.random = function(parcelCount = 5) {

    let parcels = [];

    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address })
        return new VillageState("Post Office", parcels);
    }
}

let first = new VillageState(
    "Post Office", [{ place: "Post Office", address: "Alice's House" }]
);

let next = first.move("Alice's House");

function buildGraph(edges) {

    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }

    return graph;
}

function runRobot(state, robot, memory, runSilent) {

    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            if (!runSilent) { console.log(`Done in ${turn} turns`) };
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        if (!runSilent) { console.log(`Moved to ${action.direction}`) };
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]), memory: "" };
}

function routeRobot(state, memory) {
    if ((memory || "").length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) }
}

function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}

function goalOrientedRobot({ place, parcels }, route) {
    if (route == undefined || route.length == 0) {
        let parcel = parcels[0];
        route = findRoute(roadGraph, place, (parcel.place == place) ? parcel.address : parcel.place);
    }
    return { direction: route[0], memory: route.slice(1) };
}