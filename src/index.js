"use strict" 

function flatten(arr) {
    return Array.prototype.concat.apply([], arr);
}


let SimpleMath = { };
    /**
     * @param  numbers to multiply
     * 
     * @return {number} return computed number.
     */
SimpleMath.add =  function(){
        let total = 0;
        for (const key in flatten(Object.values(arguments))) {
            if (typeof arguments[key] !== "number") {
                throw new Error("Only numbers are allowed");
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
       for (const key in flatten(Object.values(arguments))) {
            if (typeof arguments[key] !== "number") {
                throw new Error("Only numbers are allowed");
            }
            total *= arguments[key];
        }
        return total;
};

module.exports = SimpleMath;