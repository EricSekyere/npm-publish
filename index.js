"use strict" 

function flatten(arr) {
    return Array.prototype.concat.apply([], arr);
}


let SimpleMath = { };
    /**
     * @param {x, y} a number to add
     * @return {number} return computed number.
     */
SimpleMath.add =  function(x,y){
        let total = 0;
        for (const key in flatten(Object.values(arguments))) {
            if (typeof arguments[key] !== "number") {
                throw new Error("Only numbers are allowed");
            } 
            total += arguments[key];
        }
        return total;
};

SimpleMath.multiply = function (x, y) {
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