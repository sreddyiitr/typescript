module interfaces {
    
    //Simple interface with a function def
    interface Square {
        (n: number) : number;
    }

    //A function implementing interface
    // Difference between a simple function and this function is :Square
    var squareFunction : Square = (x: number) => {
        return x * x;
    }

    //A function with object as Input
    interface Rectangle {
        h: number;
        w?: number;
    }

    //Function definition that implements interface
    //Note: interface variables as input to this function... Diff from above: function versus variables
    var rectangleAreaFunction : (rect : Rectangle) => number;

    //Arrow Function Object
    rectangleAreaFunction = (rect : Rectangle) => {
        if(rect.w !== undefined) {
            return rect.h * rect.w;
        }
        return (rect.h * rect.h);
    }

    var rectA : Rectangle = {
        h : 4,
        w : 100
    };
    document.writeln(" ** Inteface rectangle area: " + rectangleAreaFunction(rectA));

    //An interface with both variables and functions
    interface Person {
        name: string;
        age ?: number;
        kids : number;
        calcPets : () => number;
        makeMeYounger : (year: number) => void;
        greet : (msg : string) => string;
    }

    var p: Person = {
        name : "Your Name",
        kids : 4,
        age : 25,
        calcPets : function() {
            return this.kids * 2;
        },
        makeMeYounger : function (years: number) {
            if(this.age) this.age -= years;
        },
        greet : function (msg : string) {
            return msg + " " + this.name;
        }
    };

    var pets = p.calcPets();
    document.writeln("Number of pets: " + pets);

    document.writeln("Your age is: " + p.age);
    p.makeMeYounger(5);
    document.writeln(" and making you younger by 5 yrs.. then your age will be: " + p.age);

    //A function implementing an interface returning an object (with methods in interface)
    interface ratingsAverageCalculator {
        addRating : (rating: number) => void;
        calcRating : () => number;
    }

    function ratingsAverageFunction() : ratingsAverageCalculator {

        var ratings : number[] = [];
        var addRating = (rating : number) => {
            ratings.push(rating);
        }
        var calcRating = () => {
            var sum:number = 0;
            ratings.forEach(rating => {
                sum += rating;
            });
            return sum/ratings.length;
        }

        return {
            addRating : addRating,
            calcRating : calcRating
        }
    }

    var calculator = ratingsAverageFunction();
    calculator.addRating(4);
    calculator.addRating(3);
    calculator.addRating(5);
    console.log("Your average rating is: " + calculator.calcRating());
    document.writeln("Your average rating is: " + calculator.calcRating());
}