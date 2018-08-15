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

/**
 * @param  {x} first number for expression
 * @param  {y} second number to subtract from the first
 * @return {number} return computed number.
 */
SimpleMath.subtract = function (x, y){
    if (!scripts.checkType(x, "number") || !scripts.checkType(y, "number"))
    {
        throw errorHandlers.customError("Only numbers are allowed");
    }
    return x - y;
}


module.exports = SimpleMath;
