"use strict";



let scripts = {};

scripts.flatten = function(arr) {
    return Array.prototype.concat.apply([], arr);
}

scripts.checkType  = function(value, objtype){
    return typeof value === objtype;
}


module.exports = scripts;