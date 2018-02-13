"use strict";
var functions;
(function (functions) {
    //Simple Function Example
    var squareItSimple = function (n) {
        return n * n;
    };
    document.writeln("Area of squareItSimple 3: " + squareItSimple(3));
    //Arrow Function I
    var squareItArrow = function (n) { return n * n; };
    document.writeln("Area of squareItArrow 4" + squareItArrow(4));
    //Arrow Function II
    var squareItArrowOptional;
    squareItArrowOptional = function (x, y) {
        if (y !== undefined) {
            return x * y;
        }
        return x * x;
    };
    document.writeln("Area of squareItArrowOptional 2 : " + squareItArrowOptional(2));
    document.writeln("Area of squareItArrowOptional 2, 8 : " + squareItArrowOptional(2, 8));
    //Arrow Function Object
    var squareItArrowObject;
    squareItArrowObject = function (rect) {
        return rect.x * rect.y;
    };
    var rectA = { x: 2, y: 20 };
    var rectB = { x: 10, y: 20 };
    document.writeln("Area of rectangle A: " + squareItArrowObject(rectA));
    document.writeln("Area of rectangle B: " + squareItArrowObject(rectB));
})(functions || (functions = {}));
//# sourceMappingURL=C:/Sunil/Education/Test/functions.js.map