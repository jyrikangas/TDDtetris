import { expect } from "chai";
import { ShuffleBag } from "../src/ShuffleBag.mjs";

describe("ShuffleBag", () => {
    it("should return every type of tetromino", () => {
        const bag = new ShuffleBag();
        const tetrominoes = [];
        for(let j = 0 ; j < 7 ; j++) {
            tetrominoes.push(bag.next());
        }
        expect(tetrominoes).to.have.lengthOf(7);
        expect(tetrominoes).to.have.members([
            "I",
            "J",
            "L",
            "O",
            "S",
            "T",
            "Z"
        ]);
    })
    it("should not return tetrominoes in the same order twice in a row", () => {
        let bag = new ShuffleBag();
        let tetrominoes = [];
        for(let j = 0 ; j < 7 ; j++) {
            tetrominoes.push(bag.next());
        }
        let tetrominoes2 = [];
        for(let j = 0 ; j < 7 ; j++) {
            tetrominoes2.push(bag.next());
        }
        console.log(tetrominoes, tetrominoes2);
        
        expect(tetrominoes).to.not.deep.equal(tetrominoes2);
    })
});