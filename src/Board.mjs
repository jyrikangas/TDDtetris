

export class Board {
  width;
  height;
  middle;
  board;
  topRow;
  middleRow;
  bottomRow;
  ticksLeftForBlock;
  movingBlockCoordinate;
  constructor(width, height) {
    this.width = Number(width);
    this.height = Number(height);
    this.middle = (this.width/2).toFixed()-1
    this.board = Array(height).fill().map(()=>Array(width).fill('.'))
    this.blockFalling = false;
    this.ticksLeftForBlock = 0;

  }

  toString() {
    console.log(this.board)
    return `${this.board[0][0]}${this.board[0][1]}${this.board[0][2]}\n${this.board[1][0]}${this.board[1][1]}${this.board[1][2]}\n${this.board[2][0]}${this.board[2][1]}${this.board[2][2]}\n`

    return `${this.topRow}\n${this.middleRow}\n${this.bottomRow}\n`;
  }

  drop(block){
    if (this.blockFalling) {
      throw new Error("already falling")
    }
    this.movingBlockCoordinate= [0, this.middle]
    this.board[0][this.middle] = `${block.color}`
    this.blockFalling = true
    this.ticksLeftForBlock=3
  }
  tick() {
    if(this.ticksLeftForBlock===1){
      this.ticksLeftForBlock--
      this.blockFalling=false
    }
    if(this.ticksLeftForBlock>1){

      this.ticksLeftForBlock--

      let horizontalCoordinate = this.movingBlockCoordinate[1]
      let verticalCoordinate = this.movingBlockCoordinate[0]
      if (this.board[verticalCoordinate+1][horizontalCoordinate]===`.`){
        this.board[verticalCoordinate+1][horizontalCoordinate] = this.board[verticalCoordinate][horizontalCoordinate]
        this.board[verticalCoordinate][horizontalCoordinate] = `.`
        this.movingBlockCoordinate[0]++
      }else {
        this.blockFalling= false;
      }
    }

    

  }
  hasFalling() {
    return this.blockFalling
  }
}
