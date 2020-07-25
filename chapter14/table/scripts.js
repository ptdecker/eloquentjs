// scripts.js
//
// JavaScript loaed by index.html in support of exercise

const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" },
];

// Render a table based upon an array of objects within an element (div)
// identified by an ID.  Columns are automatically built from the keys
// contained in the objects within the array.
function renderTable(id, data) {
  // Set up table
  const table = document.createElement("table");
  document.getElementById(id).appendChild(table);

  // Dynamically determine column names and create header row
  const headRow = document.createElement("tr");
  table.appendChild(headRow);
  let colNames = [];
  for (obj of data) {
    Object.keys(obj).forEach((key) => {
      if (!colNames.includes(key)) {
        headRow.appendChild(document.createElement("th")).innerText = key;
        colNames.push(key);
      }
    });
  }

  // Create the rows
  for (rowObj of data) {
    const bodyRow = document.createElement("tr");
    table.appendChild(bodyRow);
    for (colName of colNames) {
      if (rowObj[colName] === undefined) continue;
      const cell = document.createElement("td");
      bodyRow.appendChild(cell).innerText = rowObj[colName];
      if (typeof rowObj[colName] === "number") cell.style.textAlign = "right";
    }
  }
}

renderTable("mountains", MOUNTAINS);
