import { expect } from "chai";

import { Tetromino } from "../src/Tetromino.mjs";
import { Board } from "../src/Board.mjs";

describe("when the bottom line is filled", () => {

    it("it is cleared", () => {

        let board = new Board(5, 6);
        board.drop(Tetromino.I_SHAPE);
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();


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
        console.log('line clear test');
        
        expect(board.toString()).to.equal(
`.....
.....
.....
I....
I....
I....
`
        );
    })
})