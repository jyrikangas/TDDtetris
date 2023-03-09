
export class Score {

    score;
    level;


    constructor() {
        this.score = 0;
        this.level = 1;
    }

    incrementScore(linesCleared) {

        if (linesCleared === 1) {
            this.score += 40 * this.level;
        }
        if (linesCleared === 2) {
            this.score += 100 * this.level;
        }
        if (linesCleared === 3) {
            this.score += 300 * this.level;
        }
        if (linesCleared === 4) {
            this.score += 1200 * this.level;
        }
        
    }
}