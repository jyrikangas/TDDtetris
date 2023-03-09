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
    function dropHorizontalIpiece(board) {
        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board);
    }
    let board;
    let score;
    beforeEach(() => {
        score= new Score();
        board = new Board(5, 8, score);
        dropHorizontalIpiece(board);
    });
    it("0 at the beginning of the game", () => {
        expect(score.score).to.equal(0);
    });

    it("increased by 40 when a single line is cleared", () => {
        dropLineClearer(board);
        fallToBottom(board);

        expect(score.score).to.equal(40);
    });

    it ("increased by 100 when a double line is cleared", () => {
        dropHorizontalIpiece(board);
        dropLineClearer(board);
        fallToBottom(board);
        
        expect(score.score).to.equal(100);
    });
    
    it ("increased by 300 when a triple line is cleared", () => {
        dropHorizontalIpiece(board);
        dropHorizontalIpiece(board);
        dropLineClearer(board);
        fallToBottom(board);
        
        expect(score.score).to.equal(300);
    });

    it ("increased by 1200 when a tetris is cleared", () => {
        dropHorizontalIpiece(board);
        dropHorizontalIpiece(board);
        dropHorizontalIpiece(board);
        dropLineClearer(board);
        fallToBottom(board);
        
        expect(score.score).to.equal(1200);
    })

    it ("increased by 80 when a line is cleared on level 2", () => {
        score.level = 2;
        dropLineClearer(board);
        fallToBottom(board);

        expect(score.score).to.equal(80);
    });

    it ("increased by 3600 when a tetris is cleared on level 3", () => {
        score.level = 3;
        dropHorizontalIpiece(board);
        dropHorizontalIpiece(board);
        dropHorizontalIpiece(board);
        dropLineClearer(board);
        fallToBottom(board);
        
        expect(score.score).to.equal(3600);
    })
});