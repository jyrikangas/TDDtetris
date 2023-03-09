import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { Score } from "../src/Score.mjs";

describe("score is", () => {
    function fallToBottom(board){
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
    }
    function dropLineClearer(board) {
        board.drop(Tetromino.I_SHAPE);
        board.rotateRight();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        
    }
    let board;
    let score;
    beforeEach(() => {
        score= new Score();
        board = new Board(5, 8, score);
        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board);
    });
    it("0 at the beginning of the game", () => {
        expect(score.score).to.equal(0);
    });

    it("increased by 40 when a single line is cleared", () => {
        dropLineClearer(board);
        fallToBottom(board);

        expect(score.score).to.equal(40);
    });
    
});