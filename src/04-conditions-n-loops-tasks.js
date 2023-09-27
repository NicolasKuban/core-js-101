/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result = '';
  // console.log(num % 3)
  // console.log(num % 5)
  if (!(num % 3)) {
    result += 'Fizz';
  }
  if (!(num % 5)) {
    result += 'Buzz';
  }
  if (result) {
    return result;
  }
  return num;
}
// console.log(getFizzBuzz(6))


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}
// console.log(getFactorial(1))


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let result = 0;
  for (let i = n1; i < n2 + 1; i += 1) {
    result += i;
  }
  return result;
}
// console.log(getSumBetweenNumbers(-1,1))

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const ab = (a + b - c) > 0;
  const ac = (a - b + c) > 0;
  const bc = (-a + b + c) > 0;
  // console.log(ab, ac, bc)
  // console.log(Boolean(ab), Boolean(ac), Boolean(bc))
  if (ab && ac && bc) {
    return true;
  }
  return false;
}
// console.log(isTriangle(10,10,10))

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  if (
    rect1.left >= rect2.left + rect1.width
      || rect1.top >= rect2.top + rect2.height
      || rect1.left + rect1.width <= rect2.left
      || rect1.top + rect1.height <= rect2.top
  ) {
    return false;
  }

  return true;
}
// console.log(doRectanglesOverlap(
//     { top: 0, left: 0, width: 10, height: 10 },
//     { top: 5, left: 5, width: 20, height: 20 }
//     ))


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const left = (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2;
  const right = circle.radius ** 2;
  // console.log(left, right)
  return ((left < right));
}
// console.log(isInsideCircle(
//   { center: { x:0, y:0 }, radius:10 },  { x:0, y:10 }
// ))


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const temp = new Map();
  let result = null;
  for (let i = 0; i < str.length; i += 1) {
    // console.log(str[i])
    const char = str[i];
    if (temp.has(char)) {
      temp.set(char, temp.get(char) + 1);
    } else {
      temp.set(char, 1);
    }
  }
  const keys = Array.from(temp.keys());
  const values = Array.from(temp.values());
  // console.log(keys);
  // console.log(values);
  for (let i = 0; i < keys.length; i += 1) {
    if (values[i] === 1) {
      result = keys[i];
      break;
    }
  }
  // for (const [key, value] of temp) {
  //   if (value === 1) {
  //     result = key;
  //     break;
  //   }
  // }

  return result;
}
// console.log(findFirstSingleChar('abracadabra'));


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  let aTemp = a;
  let bTemp = b;
  if (aTemp > bTemp) {
    [aTemp, bTemp] = [bTemp, aTemp];
  }
  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';
  return `${start}${aTemp}, ${bTemp}${end}`;
}
// console.log(getIntervalString(5, 3, true, true))


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  let result = '';
  // console.log(str);
  for (let i = str.length; i > 0; i -= 1) {
    // console.log(i, str[i-1])
    result += str[i - 1];
  }
  return result;
}
// console.log(reverseString('The quick brown fox jumps over the lazy dog'))


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  let result = 0;
  let num1 = num;
  // let i = 1000
  while (num1) {
  //   i -= 1
  //   if (!i) {
  //     break
  //   }
    // console.log(result * 10, num % 10)
    result = (num1 % 10) + (result * 10);
    num1 = Math.floor(num1 / 10);
    // console.log(num)
  }
  return result;
}
// console.log(reverseInteger(1234567890123))


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let result = 0;
  let flag = false;
  const ccnTemp = String(ccn);
  for (let i = ccnTemp.length - 1; i >= 0; i -= 1) {
    let temp = Number(ccnTemp[i]);
    if (flag) {
      temp *= 2;
      if (temp > 9) {
        // temp = Math.floor((temp / 10) + (temp % 10));
        temp -= 9;
      }
    }
    result += temp;
    flag = !flag;
  }
  // let i = 1000
  // while (ccnTemp) {
  //   let temp = 0;
  //   // i -= 1
  //   // if (!i) {
  //   //   break
  //   // }
  //   temp = ccnTemp % 10;
  //   console.log(temp)
  //   ccnTemp = Math.floor(ccnTemp / 10);
  //   // console.log(temp, " =>")
  //   if (flag) {
  //     temp *= 2;
  //     if (temp > 9) {
  //       // temp = Math.floor((temp / 10) + (temp % 10));
  //       temp -= 9
  //     }
  //   }
  //   // console.log(temp)
  //   console.log("=",temp)
  //   result += temp;
  //   flag = !flag;
  // }
  return !((result % 10));
}
// console.log(isCreditCardNumber(54891243456789010))


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let result = 0;
  let num1 = num;

  // let i = 1000
  while (num1) {
    result += num1 % 10;
    num1 = Math.floor(num1 / 10);
  }

  if (result > 9) {
    result = getDigitalRoot(result);
  }

  return result;
}
// console.log(getDigitalRoot(165536))


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const brackets = new Map([
    ['[', ']'],
    ['{', '}'],
    ['(', ')'],
    ['<', '>'],
  ]);
  const stack = [];
  // let i = 0
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    // i += 1
    // console.log(char)
    if (brackets.has(char)) {
      stack.push(char);
      // console.log(i, "добавил ", char)
    } else if (brackets.get(stack.at(-1)) === char) {
      // console.log(i, "убрал ", char)
      stack.pop();
    } else {
      // console.log('break')
      return false;
    }
  }
  return !(stack.length);
}
// console.log(isBracketsBalanced('{[(<{[]}>)]}'))


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  const result = [];
  let num1 = num;
  while (num1) {
    result.push(num1 % n);
    num1 = Math.floor(num1 / n);
  }
  return result.reverse().join('');
}
// console.log(toNaryString(365,2))


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const pathes1 = pathes.map((value) => value.split('/'));
  const pathesLength = pathes1.map((value) => value.length);
  const min = Math.min(...pathesLength);
  // console.log(...pathes1)
  // console.log(min)

  let resultLength = 0;
  for (let i = 0; i < min; i += 1) {
    // console.log("i = ", i)
    const check = pathes1[0][i];
    let flag = false;

    for (let j = 0; j < pathes1.length; j += 1) {
      // console.log(pathes1[j][i] === check)
      // console.log(pathes1[j][i], " = ", pathes1[0][i])
      if (pathes1[j][i] !== check) {
        // console.log("==========")
        flag = true;
        resultLength = i;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  // console.log(resultLength)
  return (resultLength > 0) ? `${pathes1[0].slice(0, resultLength).join('/')}/` : '';
}
// console.log(getCommonDirectoryPath(
//   // ['/web/images/im1age1.png', '/web/images/image2.png'] //  => '/web/images/'
//   // ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] // => ''
//   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] // => '/'
//   // ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] // => '/'
// ))

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const result = [];
  for (let k = 0; k < m1.length; k += 1) {
    result.push([]);
    for (let i = 0; i < m2[0].length; i += 1) {
      let temp = 0;
      for (let j = 0; j < m2.length; j += 1) {
        temp += m1[k][j] * m2[j][i];
        // console.log(`a${k}${j} * b${j}${i} = ${m1[k][j]} * ${m2[j][i]}`)
      }
      result[k].push(temp);
    }
    // console.log(result[k]);
  }
  return result;
}
// console.log(getMatrixProduct(
//   [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
//   [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// ))

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const winX = (value) => value === 'X';
  const win0 = (value) => value === '0';
  const temp = [[], [], [], [], [], [], [], []];
  // console.log(...temp)
  // console.log(position[0].length)
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (i === j) {
        temp[6].push(position[i][j]);
      }
      if (2 - i === j) {
        // console.log(`${i}-${j} => ${position[i][j]}`)
        temp[7].push(position[i][j]);
      }
      temp[i].push(position[i][j]);
      temp[i + 3].push(position[j][i]);
      // console.log(`${i}-${j} => ${position[i][j]}`)
    }
    // console.log(temp1)
    // console.log(temp2)
  }
  // console.log("diagonal1", temp3)
  // console.log("diagonal2", temp4)
  // console.log(...temp)
  for (let i = 0; i < temp.length; i += 1) {
    // console.log(i,temp[i].every(win0))
    // console.log(i,temp[i].every(winX))
    if (temp[i].every(win0)) {
      return '0';
    }
    if (temp[i].every(winX)) {
      return 'X';
    }
  }
  return undefined;
}
// console.log(evaluateTicTacToePosition(
//   [["X" ,"X" , ],
//   [ "0","0" ,"0" ],
//   [ "X", ,"X" ]]
// ))

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
