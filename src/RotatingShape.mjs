import { Rotations } from './ArikaRotations.mjs'
export class RotatingShape {

    shape;
    shapeType;
    rotations;
    rotationIndex;
    constructor(shape, shape_type, rotationIndex) {
        this.shape = shape.replace(/ /g, '').split(`\n`);
        this.shapeType=shape_type;

        console.log("1",this.rotationIndex)
        if (rotationIndex===undefined){
            if (this.shapeType==="I"||this.shapeType==="S"||this.shapeType==="Z"){
                this.rotationIndex=1;
            }else {
                this.rotationIndex=4;
                console.log("2",this.rotationIndex)
            }
        }else {
            this.rotationIndex=JSON.parse(JSON.stringify(rotationIndex));
        }

        console.log("3",this.rotationIndex)
        this.rotations =  {I: ["..I..\n..I..\n..I..\n..I..\n.....", ".....\n.....\nIIII.\n.....\n....."],
        O: ".OO\n.OO\n...",
        T: [".T.\nTTT\n...", ".T.\n.TT\n.T.", "TTT\n.T.\n...", ".T.\nTT.\n.T.", ".T.\nTTT\n...", ".T.\n.TT\n.T.", "TTT\n.T.\n...", "TTT\n.T.\n...", ".T.\nTT.\n.T."],
        S: ["....\n.SS.\nSS..\n....", "S...\nSS..\n.S..\n...."],
        Z: ["....\nZZ..\n.ZZ.\n....", "..Z.\n.ZZ.\n.Z..\n...."],
        J: ["....\nJJJ.\n..J.\n....", ".J..\n.J..\nJJ..\n....", "....\n.J..\nJJJ.\n....", "JJ..\n.J..\n.J..\n....","....\nJJJ.\n..J.\n....", ".J..\n.J..\nJJ..\n....", "....\n.J..\nJJJ.\n....", "JJ..\n.J..\n.J..\n....", "....\nJJJ.\n..J.\n...."],
        L: ["....\nLLL.\nL...\n....", "LL..\n.L..\n.L..\n....", "....\n..L.\nLLL.\n....", ".L..\n.L..\n.LL.\n....","....\nLLL.\nL...\n....", "LL..\n.L..\n.L..\n....", "....\n..L.\nLLL.\n....", ".L..\n.L..\n.LL.\n....","....\nLLL.\nL...\n...."]}
    }

    toString() {
        return this.shape.join(`\n`)+`\n`;
    }

    rotateRight() {
        var rotatedRight = this.rotateLeft().rotateLeft().rotateLeft();
        return rotatedRight;
    }
    rotateLeft()  {
        if (this.shapeType!=undefined){
            return this.rotateLeft2();
        }
        var rotatedLeft = "";
        for(let c = this.shape.length; c>0; c--) {
            for(let i = 0; i < this.shape.length; i++) {
                rotatedLeft = rotatedLeft.concat(this.shape[i].charAt(c-1))
            }
            if (c!=1){
                rotatedLeft = rotatedLeft.concat(`\n`)
            }
        }
        if (this.shape.toString().charAt(0)=="."){
            for(let i=0;i<rotatedLeft.length;i++){
                if (rotatedLeft.charAt(i)!=="." ){
                    if (rotatedLeft.charAt(i)==="I"){
                        if (i<5){
                            return new RotatingShape('.....\n.....\nIIII.\n.....\n.....')
                        }
                        return new RotatingShape('..I..\n..I..\n..I..\n..I..\n.....')
                    } 
                    else if(rotatedLeft.charAt(i)=="O"){
                        return this
                    }
                    else if(rotatedLeft.charAt(i)!=="\n"){
                        break;
                    }
                    
                }
        }
    }
        //rotatedLeft = this.correctPieceHeight(rotatedLeft)
        return new RotatingShape(rotatedLeft);
    }
    
    correctPieceHeight(shape) {
        var rotatedShape = shape.toString();
        for(let i = 0; i<this.shape[0].length; i++){
            if (rotatedShape.charAt(i)!==`.`){
                return new RotatingShape(rotatedShape, shape.shape_type, shape.rotationIndex);
            }
        }
        var correctedShape = rotatedShape.substr(this.shape.length+1)
        correctedShape = correctedShape.concat(`\n`+rotatedShape.substr(0,this.shape.length+2))
        correctedShape = correctedShape.substr(0, correctedShape.length-2);
        return new RotatingShape(correctedShape, shape.shapeType, shape.rotationIndex);
    }

    rotateLeft2() {
        console.log(this.shape)
        if (this.shapeType==="I"||this.shapeType==="S"||this.shapeType==="Z"){
            this.rotationIndex = 1-this.rotationIndex;
            return new RotatingShape(this.rotations[this.shapeType][Number(this.rotationIndex)], this.shape_type, this.rotationIndex)
        }else if (this.shapeType==="O"){
            return new RotatingShape(this.rotations[this.shapeType], this.shape_type)
        }else {
            let rotationIndex = (this.rotationIndex-1);
            if (this.rotationIndex<0){
                this.rotationIndex=7;
            }
            console.log(this.rotationIndex, this.rotations[this.shapeType][this.rotationIndex])
            return new RotatingShape(this.rotations[this.shapeType][rotationIndex], this.shape_type, rotationIndex)
        }


    }
}