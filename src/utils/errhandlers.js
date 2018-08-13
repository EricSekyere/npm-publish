"use strict";


let ErrorHandlers = {};

ErrorHandlers.customError =  function (errorMessage) {
    return new Error(errorMessage);
}

module.exports  = ErrorHandlers;