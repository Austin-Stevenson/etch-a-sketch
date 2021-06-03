const container = document.getElementById("container");
let rows = document.getElementsByClassName("grid-row");
let cell = document.getElementsByClassName("cell");
let changeSizeBtn = document.getElementById("styled-button")



function makeRows(numRows) {
    for (i = 0; i < numRows; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "grid-row";
    }
}

function makeColumns(numCols) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < numCols; j++) {
            let col = document.createElement("div");
            rows[i].appendChild(col).className = "cell";
        }
    } 
}

function changeSize() {
    let newSize = prompt("What size? (Less than 100)");
    if(newSize < 100) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        makeGrid(newSize);
    } else {
        alert("Size must be less than 100.")
    }
    
}

function makeGrid(numCells) {
    makeRows(numCells);
    makeColumns(numCells);
    for (i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", randomColour);
    }

    changeSizeBtn.addEventListener("click", changeSize);
}

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

function randomColour(event) {
    const randColour = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    event.target.style.backgroundColor = randColour;
    console.log(randColour);
    
}

function Main() {
    makeGrid(16);
}

Main();

