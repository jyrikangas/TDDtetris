
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("start from the top middle", () => {
    board.drop(Tetromino.T_SHAPE);

    expect(board.toString()).to.equalShape(
      `....T.....
       ...TTT....
       ..........
       ..........
       ..........
       ..........`


    );
  });

  it("stop when they hit the bottom", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       ...TTT....`
    );
  });

  it("stop when they land on another block", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ....T.....
       ...TTT....
       ....T.....
       ...TTT....`
    );
  });
  it("can be moved left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveLeft();
    board.tick();
    
    expect(board.toString()).to.equalShape(
      `...T......
       ..TTT.....
       ..........
       ..........
       ..........
       ..........`);
    });

    it("can be moved right", () => {
      board.drop(Tetromino.T_SHAPE);
      board.moveRight();
      board.tick();

      expect(board.toString()).to.equalShape(
        `.....T....
         ....TTT...
         ..........
         ..........
         ..........
         ..........`);
    });
    it("can be moved down", () => {
      board.drop(Tetromino.T_SHAPE);
      board.tick();

      expect(board.toString()).to.equalShape(
        `..........
         ....T.....
         ...TTT....
         ..........
         ..........
         ..........`);
      });
      it("cannot be moved right beyond the board" , () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveRight();
        board.tick();
        board.moveRight();
        board.tick();
        board.moveRight();
        board.tick();
        board.moveRight();
        board.tick();
        board.moveRight();
        board.tick();
        expect(board.toString()).to.equalShape(
          `........T.
           .......TTT
           ..........
           ..........
           ..........
           ..........`);
      });

      it("cannot be moved left beyond the board" , () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        expect(board.toString()).to.equalShape(
          `.T........
           TTT.......
           ..........
           ..........
           ..........
           ..........`);
      });
      it("cannot be moved down beyond the board" , () => {
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board);
        board.tick();
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ..........
           ..........
           ....T.....
           ...TTT....`);
      } );
      it("cannot be moved left when there is a block to the left" , () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.tick();
        board.stopFalling();
        board.drop(Tetromino.T_SHAPE);
        board.moveLeft();
        board.tick();
        expect(board.toString()).to.equalShape(
          `....T.....
           ..TTTT....
           .TTT......
           ..........
           ..........
           ..........`);
      });
      it("cannot be moved right when there is a block to the right" , () => {
        board.drop(Tetromino.T_SHAPE);
        board.moveRight();
        board.tick();
        board.moveRight();
        board.tick();
        board.tick();
        board.stopFalling();
        board.drop(Tetromino.T_SHAPE);
        board.moveRight();
        board.tick();
        expect(board.toString()).to.equalShape(
          `....T.....
           ...TTTT...
           .....TTT..
           ..........
           ..........
           ..........`);
      }
      );
      
      it("cannot be moved down when there is a block below" , () => {
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board);
        board.drop(Tetromino.T_SHAPE);
        fallToBottom(board);
        expect(board.toString()).to.equalShape(
          `..........
           ..........
           ....T.....
           ...TTT....
           ....T.....
           ...TTT....`);
      }
      );

  });



