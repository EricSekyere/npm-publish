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
        expect(testAddError).toThrow();
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

describe("Math Suite Subtraction", () => {

  test("it returns a negative number  for large subtractions", () => {
    expect(math.subtract(1, 2)).toBe(-1);
  });

  test("it subtracts two numbers", () => {
    expect(math.subtract(9, 7)).toBe(2);
  });

  test("it subtracts two numbers", () => {
    expect(math.subtract(5, -7)).toBe(12);
  });

  test("it throws an error for strings", () => {
    //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
    function testSubtractError() {
      math.subtract("1", 2);
    }
    expect(testSubtractError).toThrow();
  });

  test("it throws an error for non numeric values", () => {
    //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
    function testSubtractError() {
      math.subtract(2, false);
    }
    expect(testSubtractError).toThrow();
  });
});


describe("Math Suite Divison", () => {

    test("it returns a negative value for a single negative denominator", () => {
    expect(math.divide(4, -2)).toBe(-2);
    });

    test("it returns a negative value for a single negative numerator", () => {
      expect(math.divide(-4, 2)).toBe(-2);
    });

    test("it returns a positive value for a negative denominator and a negative numerator", () => {
      expect(math.divide(-4, -2)).toBe(2);
    });

    test("it divides two numbers", () => {
        expect(math.divide(14, 7)).toBe(2);
    });

    test("it should return decimals for larger divisors", () => {
        expect(math.divide(7, 14)).toBe(0.5);
        expect(math.divide(3, 14)).toBe(3/14);
        expect(math.divide(5, 35)).toBe(5/35);   
    });

    test("it should return decimals uneven divisions", () => {
      expect(math.divide(5, 3)).toBe(5/3);
      expect(math.divide(15,33)).toBe(15/33);
    });

    test("it throws an error for 0 disivions", () => {
      //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
      function testDivideError() {
        math.divide(4, 0);
      }
      expect(testDivideError).toThrow();
    });

    test("it throws an error for strings", () => {
        //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
        function testDivideError() {
            math.divide("1", 2);
        }
        expect(testDivideError).toThrow();
    });

    test("it throws an error for non numeric values", () => {
        //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
        function testDivideError() {
        math.divide(2, false);
        }
        expect(testDivideError).toThrow();
    });
});




describe("Math Suite Average", () => {

  test("it returns 0 for not arguments", () => {
    expect(math.average()).toBe(0);
  });

  test("it returns the same number for single arguments", () => {
    expect(math.average(5)).toBe(5);
    expect(math.average(-4)).toBe(-4);
  });

  test("it returns the the average for a number of argumets", () => {
    expect(math.average(-4, 6, 10)).toBe(4);
    expect(math.average( 6, 10)).toBe(8);
    expect(math.average(5, 10)).toBe(7.5);
  });

  test("it throws an error for strings", () => {
    //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
    function testAverageError() {
      math.average("1", 2);
    }
    expect(testAverageError).toThrow();
  });

  test("it throws an error for non numeric values", () => {
    //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
    function testAverageError() {
      math.average(2, false);
    }
    expect(testAverageError).toThrow();
  });
});


describe("Math Suite isEven", () => {

  test("it returns true for even numbers", () => {
    expect(math.isEven(4)).toBe(true);
    expect(math.isEven(100)).toBe(true);
    expect(math.isEven(3000)).toBe(true);
  });

  test("it returns false for even numbers", () => {
    expect(math.isEven(9)).toBe(false);
    expect(math.isEven(1035)).toBe(false);
    expect(math.isEven(2037)).toBe(false);
  });

  test("it throws an error for strings", () => {
    //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
    function testisEvenError() {
      math.isEven("1");
    }
    expect(testisEvenError).toThrow();
  });

  test("it throws an error for non numeric values", () => {
    //wrap the code in a function, otherwise the error will not be caught and the assertion will fail.
    function testisEvenError() {
      math.isEven(false);
    }
    expect(testisEvenError).toThrow();
  });
});