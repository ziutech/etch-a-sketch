const sketch = document.querySelector(".sketch");
createSketch(16);

function createSketch(size){
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.backgroundColor = "white";
        sketch.appendChild(cell);
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach( cell => {
        cell.addEventListener('pointerenter', () =>{
            const cell_bg = cell.style.backgroundColor;
            if(cell_bg == "white")
                cell.style.backgroundColor = "black";
            else
                cell.style.backgroundColor = "white";
        });
     });
}


const reset = document.querySelector(".reset");
reset.addEventListener('click', () =>{
    const cells = document.querySelectorAll(".cell");
    cells.forEach( cell => sketch.removeChild(cell));
    let size = window.prompt("sketch size");
    if(size > 100)
        size = window.prompt("size cannot be larger than 100");
    createSketch(size);
});