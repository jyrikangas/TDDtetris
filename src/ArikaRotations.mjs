
export class Rotations {
    rotations = {I: ["..I..\n..I..\n..I..\n..I..\n.....", ".....\n.....\nIIII.\n.....\n....."],
                 O: [".OO\n.OO\n..."],
                 T: ["TTT\n.T.\n...", ".T.\nTT.\n.T.", ".T.\nTTT\n...", ".T.\n.TT\n.T.", "TTT\n.T.\n...", ".T.\nTT.\n.T.", ".T.\nTTT\n...", ".T.\n.TT\n.T.", "TTT\n.T.\n..."],
                 S: ["....\n.SS.\nSS..\n....", "S...\nSS..\n.S..\n...."],
                 Z: ["....\nZZ..\n.ZZ.\n....", "..Z.\n.ZZ.\n.Z..\n...."],
                 J: ["....\nJJJ.\n..J.\n....", ".J..\n.J..\nJJ..\n....", "....\n.J..\nJJJ.\n....", "JJ..\n.J..\n.J..\n....","....\nJJJ.\n..J.\n....", ".J..\n.J..\nJJ..\n....", "....\n.J..\nJJJ.\n....", "JJ..\n.J..\n.J..\n....", "....\nJJJ.\n..J.\n...."],
                 L: ["....\nLLL.\nL...\n....", "LL..\n.L..\n.L..\n....", "....\n..L.\nLLL.\n....", ".L..\n.L..\n.LL.\n....","....\nLLL.\nL...\n....", "LL..\n.L..\n.L..\n....", "....\n..L.\nLLL.\n....", ".L..\n.L..\n.LL.\n....","....\nLLL.\nL...\n...."]}
    
    
    getRotations(shape_type) {
        return this.rotations[shape_type]
    }
}