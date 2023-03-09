import { expect } from "chai";

import { Tetromino } from "../src/Tetromino.mjs";
import { Board } from "../src/Board.mjs";

describe("lines are cleared", () => {

    function fallToBottom(board){
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
    };
    it("if the bottom line is filled", () => {

        let board = new Board(5, 6);
        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board)


        board.drop(Tetromino.I_SHAPE);
        board.rotateLeft();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        
        expect(board.toString()).to.equal(
`.....
.....
.....
I....
I....
I....
`
        );
    });
    it("if the bottom 2 lines are filled", () => {
            
            let board = new Board(5, 6);
            board.drop(Tetromino.I_SHAPE);
            fallToBottom(board)


            board.drop(Tetromino.I_SHAPE);
            fallToBottom(board)

            board.drop(Tetromino.I_SHAPE);
            board.rotateRight();
            board.moveLeft();
            board.tick();
            board.moveLeft();
            board.tick();
            board.moveLeft();
            board.tick();
            board.tick();
            board.tick();
            board.tick();
            expect(board.toString()).to.equal(
`.....
.....
.....
.....
I....
I....
`);
    });


    it("if the bottom 3 lines are filled", () => {
        let board = new Board(5, 7);
        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board)

        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board)

        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board)
        
        board.drop(Tetromino.I_SHAPE);
        board.rotateRight();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        expect(board.toString()).to.equal(
`.....
.....
.....
.....
.....
.....
I....
`);
        });

    it("if the bottom 4 lines are filled", () => {
        let board = new Board(5, 8);
        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board)

        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board)

        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board)

        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board)
        
        board.drop(Tetromino.I_SHAPE);
        board.rotateRight();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        expect(board.toString()).to.equal(
`.....
.....
.....
.....
.....
.....
.....
.....
`);
        });

})

