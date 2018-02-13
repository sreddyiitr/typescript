module functions {

    //Simple Function Example
    var squareItSimple = function (n: number) {
        return n * n;
    }
    document.writeln("Area of squareItSimple 3: " + squareItSimple(3));

    //Arrow Function I
    var squareItArrow = (n: number) => n*n;
    document.writeln("Area of squareItArrow 4" + squareItArrow(4));

    //Arrow Function II
    var squareItArrowOptional : (x:number, y?:number) => number;
    squareItArrowOptional = (x:number, y?:number) => {
        if(y !== undefined) {
            return x * y;
        }
        return x * x;
    }
    document.writeln("Area of squareItArrowOptional 2 : " + squareItArrowOptional(2));
    document.writeln("Area of squareItArrowOptional 2, 8 : " + squareItArrowOptional(2, 8));

    //Arrow Function Object
    var squareItArrowObject : (rect : {x: number; y:number;}) => number;
    squareItArrowObject = (rect : {x: number; y:number;}) => {
        return rect.x * rect.y;
    }

    var rectA = {x: 2, y: 20};
    var rectB = {x: 10, y: 20};

    document.writeln("Area of rectangle A: " + squareItArrowObject(rectA));
    document.writeln("Area of rectangle B: " + squareItArrowObject(rectB));
}