const div = document.querySelector('#container');
genGrid(16);

function genGrid(value) {
    for (var i = 0; i < value; i++){
        let row = document.createElement('div');
        row.className = 'row';
        for (var x = 1; x <= value; x++){
            let cell = document.createElement('div');
            cell.className = "gridSquare";
            cell.setAttribute('id', (i * value) + x);
            row.appendChild(cell);
        }
        div.appendChild(row);
    }
}