'use strict';
const math = require("./index");

describe("Math Suite Addition", ()=> {
    test("it returns 0 with no input", ()=>{
        expect(math.add()).toBe(0);
    });
    test("it returns same number for single arguments", () => {
        expect(math.add(12)).toBe(12);
    });

    test("it adds 2 numbers", () => {
        expect(math.add(1, 2)).toBe(3);
    });

    test("it adds 3 numbers", () => {
        expect(math.add(1, 2, 12)).toBe(15);
    });


    test("it throws ann error for strings", () => {
        //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
        function testAddError(){
            math.add("1", 2);
        }
        expect(testAddError).toThrowErrorMatchingSnapshot();
    });

    test("it throws an error for non numeric values", () => {
        //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
        function testAddError() {
            math.add("-", 2, false);
        }
        expect(testAddError).toThrow();
    });
});

describe("Math Suite Multiplication", () => {

    test("it returns 0 with no input", () => {
        expect(math.multiply()).toBe(1);
    });
    test("it returns same number for single arguments", () => {
        expect(math.multiply(12)).toBe(12);
    });

    test("it multiplies 2 numbers", () => {
        expect(math.multiply(1, 2)).toBe(2);
    });

    test("it multiplies 3 numbers", () => {
        expect(math.multiply(1, 2, 12)).toBe(24);
    });
    
    test("it throws ann error for strings", () => {
        //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
        function testMultiplyError() {
            math.multiply("1", 2);
        }
        expect(testMultiplyError).toThrow();
    });

    test("it throws an error for non numeric values", () => {
        //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
        function testMultiplyError() {
            math.multiply("-", 2, false);
        }
        expect(testMultiplyError).toThrow();
    });
});