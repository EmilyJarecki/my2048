const tiles = []
const width = 4
const gameBoard = document.getElementById("game_board")

function createGrid (){
    for(let i = 0; i < width * width; i++){
        let square = document.createElement("div")
        square.className = "numBox"
        square.id = i
        square.innerHTML = 0
        gameBoard.appendChild(square)
        tiles.push(square)
    }
    getRandom()
}
createGrid()

function getRandom() {
    let randomSquare = Math.floor(Math.random() * tiles.length)
    if (tiles[randomSquare].innerHTML == 0){
        tiles[randomSquare].innerHTML = 2
    } else {
        getRandom()
    }
}

moveRight()
function moveRight(){
    for (let i = 0; i < width * width; i++){
        if (i % 4 === 0) {
            let row1 = tiles[i].innerHTML      //i= tiles[0] tiles[4] tiles [8] tiles[12]     (the start of the row and column 1)
            let row2 = tiles[i+1].innerHTML// i+1 = tiles[1] tiles[5] tiles [9] tiles[13]
            let row3 = tiles[i+2].innerHTML// i+2 = tiles[2] tiles[6] tiles [10] tiles[14]
            let row4 = tiles[i+3].innerHTML// i+3 = tiles[3] tiles[7] tiles [11] tiles[15]
            let rows = [Number(row1), Number(row2), Number(row3), Number(row4)]
            console.log(rows)
        }
    }
}