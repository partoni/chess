class Figure{
    name;
    collor;
    logo;
    constructor(name,collor,logo){
        this.name=name
        this.collor=collor
        this.logo=logo
    }

    canMove(cell){
        if(cell.figure.collor===this.collor){
            return false
        }
        return true
    }
}
export default Figure