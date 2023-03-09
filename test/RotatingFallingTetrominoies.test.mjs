
import { expect } from "chai"
import { Board } from "../src/Board.mjs"
import { Tetromino, Tetromino2 } from "../src/Tetromino.mjs"

describe("Falling T-shape tetrominoes", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
    });
    afterEach(() => {
        board = null;
        });
        


    it("can be rotated left", () => {
        board.drop(Tetromino2.T_SHAPE);

        board.rotateLeft();
        expect(board.toString()).to.equal(
`....T.....
...TT.....
....T.....
..........
..........
..........
`
        );
    });

    it("can be rotated right", () => {
        board.drop(Tetromino.T_SHAPE);

        console.log("function called")
        board.rotateRight();
        expect(board.toString()).to.equal(
`....T.....
....TT....
....T.....
..........
..........
..........
`
        );
    });

    it("can be rotated left twice", () => {
        board.drop(Tetromino2.T_SHAPE);

        board.rotateLeft();
        board.rotateLeft();
        expect(board.toString()).to.equal(
`...TTT....
....T.....
..........
..........
..........
..........
`
        );
    });

    it("wall kicks when rotated against the left wall", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateRight();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.moveLeft();
        board.tick();
        board.rotateLeft();
        expect(board.toString()).to.equal(
`.T........
TTT.......
..........
..........
..........
..........
`
        );
    });

    it("wall kicks when rotated against the right wall", () => {
        board.drop(Tetromino.T_SHAPE);
        board.rotateLeft();
        board.moveRight();
        board.tick();
        board.moveRight();
        board.tick();
        board.moveRight();
        board.tick();
        board.moveRight();
        board.tick();
        board.rotateRight();
        expect(board.toString()).to.equal(
`........T.
.......TTT
..........
..........
..........
..........
`
        );
    });

    it("wall kicks when rotated against the bottom", () => {
        board.drop(Tetromino.T_SHAPE);
        board.tick()
        board.tick()
        board.tick()
        board.tick()
        board.rotateRight();
        expect(board.toString()).to.equal(
`..........
..........
..........
..........
....T.....
...TTT....
`

        );
    });
    
    it("cannot be rotated when it is blocked by another tetromino", () => {
        board.drop(Tetromino.T_SHAPE);
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        board.tick();
        
        board.drop(Tetromino.T_SHAPE);
        board.tick();
        board.tick();
        board.tick();
        board.rotateLeft();
        expect(board.toString()).to.equal(
`..........
..........
....T.....
...TTT....
....T.....
...TTT....
`
        );
    });
});

describe("Falling I-shape tetrominoes", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
    });

    it("can be rotated left", () => {
        board.drop(Tetromino.I_SHAPE);

        board.rotateLeft();
        expect(board.toString()).to.equal(
`.....I....
.....I....
.....I....
.....I....
..........
..........
`

        );
    }); 

    it("can be rotated right", () => {
        board.drop(Tetromino.I_SHAPE);

        board.rotateRight();
        expect(board.toString()).to.equal(
`.....I....
.....I....
.....I....
.....I....
..........
..........
`
        );
    });
    
    it("can be rotated left twice", () => {
        board.drop(Tetromino.I_SHAPE);
        
        expect(board.toString()).to.equal(
`...IIII...
..........
..........
..........
..........
..........
`
        );
    });
});

describe("Falling O-shape tetrominoes", () => {
    let board;
    beforeEach(() => {
        board = new Board(10, 6);
    });

    it("cannot be rotated", () => {
        board.drop(Tetromino.O_SHAPE);

        board.rotateLeft();
        expect(board.toString()).to.equal(
`....OO....
....OO....
..........
..........
..........
..........
`
        );
    });
});
