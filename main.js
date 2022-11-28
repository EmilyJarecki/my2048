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