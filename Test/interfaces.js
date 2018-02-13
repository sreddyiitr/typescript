"use strict";
var interfaces;
(function (interfaces) {
    //A function implementing interface
    // Difference between a simple function and this function is :Square
    var squareFunction = function (x) {
        return x * x;
    };
    //Function definition that implements interface
    //Note: interface variables as input to this function... Diff from above: function versus variables
    var rectangleAreaFunction;
    //Arrow Function Object
    rectangleAreaFunction = function (rect) {
        if (rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return (rect.h * rect.h);
    };
    var rectA = {
        h: 4,
        w: 100
    };
    document.writeln(" ** Inteface rectangle area: " + rectangleAreaFunction(rectA));
    var p = {
        name: "Your Name",
        kids: 4,
        age: 25,
        calcPets: function () {
            return this.kids * 2;
        },
        makeMeYounger: function (years) {
            if (this.age)
                this.age -= years;
        },
        greet: function (msg) {
            return msg + " " + this.name;
        }
    };
    var pets = p.calcPets();
    document.writeln("Number of pets: " + pets);
    document.writeln("Your age is: " + p.age);
    p.makeMeYounger(5);
    document.writeln(" and making you younger by 5 yrs.. then your age will be: " + p.age);
    function ratingsAverageFunction() {
        var ratings = [];
        var addRating = function (rating) {
            ratings.push(rating);
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (rating) {
                sum += rating;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var calculator = ratingsAverageFunction();
    calculator.addRating(4);
    calculator.addRating(3);
    calculator.addRating(5);
    console.log("Your average rating is: " + calculator.calcRating());
    document.writeln("Your average rating is: " + calculator.calcRating());
})(interfaces || (interfaces = {}));
//# sourceMappingURL=C:/Sunil/Education/Test/interfaces.js.map