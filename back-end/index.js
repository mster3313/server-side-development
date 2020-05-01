var utils = require('./rectangle');

solveRect(2,5);
//solveRect(10,20);

//function declarations
function solveRect(x,y){
    console.log("Permiter : " + utils.perimeter(x,y));
    console.log("Area : " + utils.area(x,y));
}

//function expressions | anonymous functions
var x = function (x,y){
    console.log("Permiter : " + utils.perimeter(x,y));
    console.log("Area : " + utils.area(x,y));
};

x(2,5);

//arrow functions
const y = (x,y) => (x+y);


