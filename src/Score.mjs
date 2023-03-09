
export class Score {

    score;


    constructor() {
        this.score = 0;
    }

    incrementScore(linesCleared) {

        this.score += linesCleared * 40;
        
    }
}