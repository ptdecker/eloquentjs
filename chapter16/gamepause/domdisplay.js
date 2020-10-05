export { DOMDisplay };

// elt()
//
// Helper function to create an element, assign it attributes, and add children
function elt(name, attrs, ...children) {
    let dom = document.createElement(name);
    for (let attr of Object.keys(attrs)) {
        dom.setAttribute(attr, attrs[attr]);
    }
    for (let child of children) {
        dom.appendChild(child);
    }
    return dom;
}

// DOMDisplay
//
// An object to encapsulate the game boad display
class DOMDisplay {
    constructor(parent, level) {
        this.dom = elt("div", { class: "game" }, drawGrid(level));
        this.actorLayer = null;
        parent.appendChild(this.dom);
    }

    clear() {
        this.dom.remove();
    }
}

// Scale
const scale = 20;

// drawGrid()
//
// Draws the game grid
function drawGrid(level) {
    return elt(
        "table", {
            class: "background",
            style: `width: ${level.width * scale}px`,
        },
        ...level.rows.map((row) =>
            elt(
                "tr", { style: `height: ${scale}px` },
                ...row.map((type) => elt("td", { class: type }))
            )
        )
    );
}

// drawActors()
//
// Adds the actors to the display
function drawActors(actors) {
    return elt(
        "div", {},
        ...actors.map((actor) => {
            let rect = elt("div", { class: `actor ${actor.type}` });
            rect.style.width = `${actor.size.x * scale}px`;
            rect.style.height = `${actor.size.y * scale}px`;
            rect.style.left = `${actor.pos.x * scale}px`;
            rect.style.top = `${actor.pos.y * scale}px`;
            return rect;
        })
    );
}

DOMDisplay.prototype.syncState = function(state) {
    if (this.actorLayer) this.actorLayer.remove();
    this.actorLayer = drawActors(state.actors);
    this.dom.appendChild(this.actorLayer);
    this.dom.className = `game ${state.status}`;
    this.scrollPlayerIntoView(state);
};

DOMDisplay.prototype.scrollPlayerIntoView = function(state) {
    let width = this.dom.clientWidth;
    let height = this.dom.clientHeight;
    let margin = width / 3;
    let left = this.dom.scrollLeft;
    let right = left + width;
    let top = this.dom.scrollTop;
    let bottom = top + height;
    let player = state.player;
    let center = player.pos.plus(player.size.times(0.5)).times(scale);
    if (center.x < left + margin) {
        this.dom.scrollLeft = center.x - margin;
    } else {
        this.dom.scrollLeft = center.x + margin - width;
    }
    if (center.y < top + margin) {
        this.dom.scrollTop = center.y - margin;
    } else {
        this.dom.scrollTop = center.y + margin - height;
    }
};