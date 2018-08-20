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


/**
 * @param  {x} first number for expression
 * @param  {y} second number to divide with the first
 * @return {number} return computed number.
 */
SimpleMath.divide = function (x, y) {
    if (!scripts.checkType(x, "number") || !scripts.checkType(y, "number")) {
        throw errorHandlers.customError("Only numbers are allowed");
    }
    if(y == 0){
        throw errorHandlers.customError("Error: Cannot divide by 0");
    }
    return x / y;
}


/**
 * @param  numbers to compute average of. More than two argument canbe provided, comma separated
 * 
 * @return {number} return computed number.
 */

SimpleMath.average = function () {
  if (arguments.length < 1)
  for (const key in scripts.flatten(Object.values(arguments))) {
       for (const key in scripts.flatten(Object.values(arguments))) {
         if (!scripts.checkType(arguments[key], "number")) {
           throw errorHandlers.customError("Only numbers are allowed");
         }
         total += arguments[key];
       }
       return total/ argsLength;
};


/**
 * @param  {x} value to check
 * 
 * @return {boolean} return true or false if number is even.
 */

SimpleMath.isEven = function (x) {
   if (!scripts.checkType(x, "number")) {
        throw errorHandlers.customError("Only numbers are allowed");
    }
    return x % 2 == 0;

};

module.exports = SimpleMath;
