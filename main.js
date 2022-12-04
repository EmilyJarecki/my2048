const tiles = []
const width = 4
const gameBoard = document.getElementById("game_board")

window.addEventListener('keydown', (event)=>{
    // getRandom()  
    // <-this will add a ranodm number every move but commented out for my sanity
    if (event.key === "ArrowLeft"){
        moveLeft()
    } else if (event.key === "ArrowRight"){
        moveRight()
    }else if (event.key === "ArrowUp"){
        moveUp()
    }else if (event.key === "ArrowDown"){
        moveDown()
    }else{
        console.log("I need help")
    }
})

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
function moveRight(){
    for (let i = 0; i < width * width; i++){
        if (i % 4 === 0) {
            let row1 = tiles[i].innerHTML      //i= tiles[0] tiles[4] tiles [8] tiles[12]     (the start of the row and column 1)
            let row2 = tiles[i+1].innerHTML// i+1 = tiles[1] tiles[5] tiles [9] tiles[13]
            let row3 = tiles[i+2].innerHTML// i+2 = tiles[2] tiles[6] tiles [10] tiles[14]
            let row4 = tiles[i+3].innerHTML// i+3 = tiles[3] tiles[7] tiles [11] tiles[15]
            let rows = [
                Number(row1), 
                Number(row2), 
                Number(row3), 
                Number(row4)]

            const filtered = rows.filter(num => num !== 0)

            const rowZeros = rows.filter(num => num === 0)
            const concattedRow = new Array(...rowZeros, ...filtered)

            tiles[i].innerHTML = concattedRow[0]
            tiles[i+1].innerHTML = concattedRow[1]
            tiles[i+2].innerHTML = concattedRow[2]
            tiles[i+3].innerHTML = concattedRow[3]

        }
    }
}

function moveLeft(){
    for (let i = 0; i < width * width; i++){
        if (i % 4 === 0) {
            let row1 = tiles[i].innerHTML      //i= tiles[0] tiles[4] tiles [8] tiles[12]     (the start of the row and column 1)
            console.log(row1[0])
            let row2 = tiles[i+1].innerHTML// i+1 = tiles[1] tiles[5] tiles [9] tiles[13]
            // console.log(row2[0])
            let row3 = tiles[i+2].innerHTML// i+2 = tiles[2] tiles[6] tiles [10] tiles[14]
            let row4 = tiles[i+3].innerHTML// i+3 = tiles[3] tiles[7] tiles [11] tiles[15]
            let rows = [
                Number(row1), 
                Number(row2), 
                Number(row3), 
                Number(row4)]
            const filtered = rows.filter(num => num !== 0)
            const rowZeros = rows.filter(num => num === 0)
            const concattedRow = new Array(...filtered, ...rowZeros)            

            tiles[i].innerHTML = concattedRow[0]
            tiles[i+1].innerHTML = concattedRow[1]
            tiles[i+2].innerHTML = concattedRow[2]
            tiles[i+3].innerHTML = concattedRow[3]
            console.log(concattedRow[0])

            if (tiles[i].innerHTML===tiles[i+1].innerHTML){
                let newTiles = tiles[i].innerHTML*=2
                tiles[i].innerHTML = newTiles
                tiles[i+1].innerHTML= 0
            }
        }
    }
}


function moveUp(){
    for (let i = 0; i < width; i++){
        if (i==i){
            let col1 = tiles[i].innerHTML                //i = 0     tiles[0] tiles[1] tiles[2] tiles[3]
            let col2 = tiles[i + width].innerHTML        //i = 1+4   tiles[4] tiles[5] tiles[6] tiles[7]
            let col3 = tiles[i + (2 * width)].innerHTML  //i = 2+8   tiles[8] tiles[9] tiles[10] tiles[11]
            let col4 = tiles[i + (3 * width)].innerHTML  //i = 3+12  tiles[12]tiles[13]tiles[14] tiles[15]
            let cols = [
                Number(col1), 
                Number(col2), 
                Number(col3), 
                Number(col4)]

            const filtered = cols.filter(num => num !== 0)
            const colZeros = cols.filter(num => num  === 0)
            const concattedCol = new Array(...filtered, ...colZeros)
            
            tiles[i].innerHTML = concattedCol[0]
            tiles[i + width].innerHTML = concattedCol[1]
            tiles[i + (width * 2)].innerHTML = concattedCol[2]
            tiles[i + (width * 3)].innerHTML = concattedCol[3]
        } 
    }
}
function moveDown(){
    for (let i = 0; i < width; i++){
        if (i==i){
            col1 = tiles[i].innerHTML
            col2 = tiles[i + width].innerHTML
            col3 = tiles[i + (width * 2)].innerHTML
            col4 = tiles[i + (width * 3)].innerHTML
            let cols = [
                Number(col1), 
                Number(col2), 
                Number(col3), 
                Number(col4)]

            const filtered = cols.filter(num => num !== 0)
            const colZeros = cols.filter(num => num  === 0)

            const concattedCol = new Array(...colZeros, ...filtered)
            tiles[i].innerHTML = concattedCol[0]
            tiles[i + width].innerHTML = concattedCol[1]
            tiles[i + (width * 2)].innerHTML = concattedCol[2]
            tiles[i + (width * 3)].innerHTML = concattedCol[3]
        } 

    }
}
// function merge(){
//     for (let i=0; i<width; i++){
//         if 
//     }
// }