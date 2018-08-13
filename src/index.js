"use strict" 

const scripts = require("./utils/scripts");
const errorHandlers = require("./utils/errhandlers");

let SimpleMath = { };
    /**
     * @param  numbers to multiply
     * 
     * @return {number} return computed number.
     */
SimpleMath.add =  function(){
        let total = 0;
        for (const key in scripts.flatten(Object.values(arguments))) {
            if (!scripts.checkType(arguments[key], "number")) {
                throw errorHandlers.customError("Only numbers are allowed");
            } 
            total += arguments[key];
        }
        return total;
};
    /**
     * @param  numbers to multiply. More than two argument canbe provided, comma separated
     * 
     * @return {number} return computed number.
     */
SimpleMath.multiply = function () {
       let total = 1;
       for (const key in scripts.flatten(Object.values(arguments))) {
            if (!scripts.checkType(arguments[key], "number")) {
               throw  errorHandlers.customError("Only numbers are allowed");
            }
            total *= arguments[key];
        }
        return total;
};

SimpleMath.subtract = function (x, y){
    if(typeof x !== "number" )
    return x - y
}
module.exports = SimpleMath;