
export class ShuffleBag {

    bag;
    constructor() {
        this.bag = ["I", "J", "L", "O", "S", "T", "Z"]
        this.shuffle()
    }
    next() {
        let tetromino = this.bag.pop()
        if(this.bag.length === 0) {
            this.bag = ["I", "J", "L", "O", "S", "T", "Z"]
            this.shuffle()
        }
        return tetromino
        
    }
    shuffle() {
        for(let i = this.bag.length - 1 ; i > 0 ; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = this.bag[i]
            this.bag[i] = this.bag[j]
            this.bag[j] = temp
        }
    }
}