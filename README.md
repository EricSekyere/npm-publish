# Custom-Simple-Math

> A simple math library

[![Build Status](https://travis-ci.org/EricSekyere/npm-publish.svg?branch=master)](https://travis-ci.org/EricSekyere/npm-publish)
[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)
[![Known Vulnerabilities](https://snyk.io/test/github/EricSekyere/npm-publish/badge.svg)](https://snyk.io/test/github/EricSekyere/npm-publish)

## Install
Using npm :
```bash
npm i -S custom-simple-math
```

## Usage

```javascript
const math = require('custom-simple-math');

let multNums = math.multiply(1,2,3,4,5);
console.log(multNums);

let addNums = math.add(1,2,3,4,5);
console.log(addNums);

let subNums = math.subtract(5 , 7);
console.log(subNums);

let divNums = math.divide(5 , -7);
console.log(divNums);

let divNums2 = math.divide(-14 , -7);
console.log(divNums2);

let avg = math.average(14, 25, 30, 5, 10);
console.log(avg);

let isEvenNum = math.isEven(14);
console.log(isEvenNum);
```

## License

[MIT](http://vjpr.mit-license.org)

