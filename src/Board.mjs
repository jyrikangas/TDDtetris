
export class Board {
  width;
  height;
  middle;
  board;
  topRow;
  middleRow;
  bottomRow;
  ticksLeftForBlock;
  fallingBlockLocations;
  fallingBlockCenter;
  fallingBlockObject;
  goLeft;
  goRight;

  constructor(width, height) {
    this.width = Number(width);
    this.height = Number(height);
    this.middle = (this.width/2).toFixed()-1
    this.board = Array(height).fill().map(()=>Array(width).fill('.'))
    this.blockFalling = false;
    this.ticksLeftForBlock = 0;

  }

  toString() {
    var string = ""
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        string = string.concat(this.board[i][j])
      }
      string = string.concat("\n")
    }
    return string
  }

  drop(block){
    if (this.blockFalling) {
      throw new Error("already falling")
    }
    this.fallingBlockObject = block;
    this.fallingBlockCenter = [0, this.middle-1]
    this.fallingBlockLocations = []
    let blockString = block.toString().split("\n")


    if (this.middle>1){
      let fixer = 0
      for (let i = 0; i < blockString.length; i++) {
        for (let j = 0; j < blockString[i].length; j++) {
          if (blockString[i].charAt(j) !== ".") {
            if (this.fallingBlockLocations.length === 0) {
              fixer = 0-i;
            }
            this.board[fixer+i][this.middle+j-1] = blockString[i].charAt(j)
            this.fallingBlockLocations.push([fixer+i, this.middle+j-1])
            }
          }
        }
    }else{
      this.board[0][this.middle] = `${block.color}`
      this.fallingBlockLocations.push([0, this.middle])
    }
    
    this.blockFalling = true
    this.ticksLeftForBlock=this.height
  }
  moveLeft() {
    this.goLeft = true;
    return;
  }
  moveRight() {
    this.goRight = true;
    return;
  }
  stopFalling() {
    this.blockFalling = false;
    return;
  }
  tick() {
    if(this.ticksLeftForBlock===1){
      this.ticksLeftForBlock--
      this.blockFalling=false
    }
    if(this.ticksLeftForBlock>1){
      this.ticksLeftForBlock--

      if(this.goLeft) {
        this.tickLeft()
      }else if(this.goRight) {
        this.tickRight()
      } else {
        this.tickDown()
      }
    }
    if(this.blockFalling===false){
      console.log("block stopped")
      this.clearLine()
    }

  }

  clearLine() {
    for (let i = 0; i < this.width; i++) {
      if (this.board[this.height-1][i] === '.') {
        console.log(this.board.toString());
        
        console.log("no line to clear")
        return;
      }
    }
    this.board.pop()
    this.board.unshift(Array(this.width).fill('.'))
    console.log(this.board)

  }
  tickLeft() {
    let board = JSON.parse(JSON.stringify(this.board))
    let fallingBlockLocations = JSON.parse(JSON.stringify(this.fallingBlockLocations))

    for (let i = 0; i < fallingBlockLocations.length; i++){
      let verticalCoordinate = fallingBlockLocations[i][0]
      let horizontalCoordinate = fallingBlockLocations[i][1]
      if (horizontalCoordinate === 0) {
        this.goLeft = false;
        break;
      }
      if (board[verticalCoordinate][horizontalCoordinate - 1] === `.`) {
        board[verticalCoordinate][horizontalCoordinate - 1] = board[verticalCoordinate][horizontalCoordinate]
        board[verticalCoordinate][horizontalCoordinate] = `.`
        fallingBlockLocations[i][1]--
      } else {
        this.goLeft = false;
      }
    }

    if (this.goLeft) {
      this.board = board
      this.fallingBlockLocations = fallingBlockLocations
      this.fallingBlockCenter = [this.fallingBlockCenter[0], this.fallingBlockCenter[1]-1]
      this.goLeft = false;
    }
  }
  
  tickRight() {
    let board = JSON.parse(JSON.stringify(this.board))
    let fallingBlockLocations = JSON.parse(JSON.stringify(this.fallingBlockLocations))

    for (let i = fallingBlockLocations.length-1; i>=0; i--){
      let verticalCoordinate = fallingBlockLocations[i][0]
      let horizontalCoordinate = fallingBlockLocations[i][1]
      if (horizontalCoordinate === this.width-1) {
        this.goRight = false;
        break;
      }
      if (board[verticalCoordinate][horizontalCoordinate + 1] === `.`) {
        board[verticalCoordinate][horizontalCoordinate + 1] = board[verticalCoordinate][horizontalCoordinate]
        board[verticalCoordinate][horizontalCoordinate] = `.`
        fallingBlockLocations[i][1]++
      } else {
        this.goRight = false;
      }
    }


    if (this.goRight) {
      this.board = board
      this.fallingBlockLocations = fallingBlockLocations
      this.fallingBlockCenter = [this.fallingBlockCenter[0], this.fallingBlockCenter[1]+1]
      this.goRight = false;
    }
  }

  tickDown() {
    let board = JSON.parse(JSON.stringify(this.board))
    let fallingBlockLocations = JSON.parse(JSON.stringify(this.fallingBlockLocations))

    for (let i = fallingBlockLocations.length-1; i>=0; i--){
      let verticalCoordinate = fallingBlockLocations[i][0]
      let horizontalCoordinate = fallingBlockLocations[i][1]
      if (verticalCoordinate === this.height-1) {
        this.blockFalling = false;
        break;
      }
      if (board[verticalCoordinate + 1][horizontalCoordinate] === `.`) {
        board[verticalCoordinate + 1][horizontalCoordinate] = board[verticalCoordinate][horizontalCoordinate]
        board[verticalCoordinate][horizontalCoordinate] = `.`
        fallingBlockLocations[i][0]++
      } else {
        this.blockFalling = false;

      }
    }
    
    if (this.blockFalling) {
      this.board = board
      this.fallingBlockLocations = fallingBlockLocations
      this.fallingBlockCenter = [this.fallingBlockCenter[0]+1, this.fallingBlockCenter[1]]
    }
  }

  hasFalling() {
    return this.blockFalling
  }
  
  rotateLeft() {
    let block2 = this.fallingBlockObject.rotateLeft();
    let block = block2.correctPieceHeight(block2);
    let center = this.fallingBlockCenter;
    if(center[1]<0){
      this.moveRight()
      this.tickRight()
      center = this.fallingBlockCenter;
    }
    let board = JSON.parse(JSON.stringify(this.board))
    
    for(let i = 0; i < this.fallingBlockLocations.length; i++) {
      let verticalCoordinate = this.fallingBlockLocations[i][0]
      let horizontalCoordinate = this.fallingBlockLocations[i][1]
      board[verticalCoordinate][horizontalCoordinate] = "."
    }

    //place new block
    let blockString = block.toString().split("\n")
    let blocklocations=[]
    for (let i = 0; i < blockString.length; i++) {
      for (let j = 0; j < blockString[i].length; j++) {
        if (blockString[i].charAt(j) !== ".") {
          if(center[0]+i > this.height-1){
            return;
          }
          if(board[center[0] + i][center[1] + j]==="."){
          board[center[0] + i][center[1] + j] = blockString[i].charAt(j)
          blocklocations.push([center[0] + i, center[1] + j])
          }else{
            return;
          }
          }
        }
      }

    this.board = board
    this.fallingBlockLocations = blocklocations
    this.fallingBlockObject = block2
    return;
  }

  rotateRight() {
  this.rotateLeft()
  this.rotateLeft()
  this.rotateLeft()
  return;
  
  }
}
