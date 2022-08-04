class Figure{
    name;
    color;
    logo;
    constructor(name,color,logo){
        this.name=name
        this.color=color
        this.logo=logo
    }

    canMove(cell){
        if(cell.figure.color===this.color){
            return false
        }
        return true
    }
}
export default Figure