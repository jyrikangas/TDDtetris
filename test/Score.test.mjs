import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { Score } from "../src/Score.mjs";

describe("score is", () => {
    it("0 at the beginning of the game", () => {
        let score = new Score();
        expect(score.score).to.equal(0);
    });
    
});