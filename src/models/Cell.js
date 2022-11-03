class Cell{
    x;
    y;
    figure;
    available=false;
    id;

    constructor(x,y,figure,id){
        this.x = x
        this.y = y
        this.figure = figure
        this.id = id
    }
    addFigure(newFigure){
        
        this.figure=newFigure
        // if(newFigure.collor!==this.figure.collor){this.figure=newFigure}
        
    }
    removeFigure(){
        this.figure = null
    }
    
}
export default Cell