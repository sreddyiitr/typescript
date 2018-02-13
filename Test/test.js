"use strict";
var SimpleCounter = /** @class */ (function () {
    function SimpleCounter() {
    }
    SimpleCounter.prototype.count = function () {
        document.writeln('Im counting now.... 1... 2.. 3');
        console.log('all done');
    };
    return SimpleCounter;
}());
var count = new SimpleCounter();
count.count();
//# sourceMappingURL=C:/Sunil/Education/Test/test.js.map