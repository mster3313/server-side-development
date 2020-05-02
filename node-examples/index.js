var utils = require('./rectangle');

//Callback demo
utils(-2,5,(err,result) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("Permiter : " + result.perimeter);
        console.log("Area : " + result.area);
    }
});

console.log("Showing async executions with callbacks\n");



/*
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
*/



