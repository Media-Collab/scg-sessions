/**
 * What is JavaScript (js)?
 * https://developer.mozilla.org/es/docs/Web/JavaScript
 * https://www.youtube.com/watch?v=YOlr79NaAtQ
 *
 * Where you can learned?
 * https://learnxinyminutes.com/docs/javascript/
 *
 * Which is the state of JS?
 * https://stateofjs.com/
 *
 * What you can do with JS?
 * https://www.youtube.com/watch?v=qY2JD78kShQ&t=2s
 */

/**
 * Download Node.js LTS: https://nodejs.org/es/
 * You can run code using command line and tipping node <filename.js>
 * or select code with the 'Code Runner' extension
 */

/**
 * When you create a variable you can use var, let or const
 * You can view the difference in medium.com docs
 * Don't start a variable with a number or symbol
 */

let var1 = "Hello";
console.log(var1);
console.log(typeof var1);

var1 = 10;
console.log(var1);
console.log(typeof var1);

const VAR2 = true;
console.log(VAR2);
console.log(typeof VAR2);

// TypeError: Assignment to 'constant' variable.
VAR2 = 2.34; // ERROR
console.log(VAR2);
console.log(typeof VAR2);

/**
 * In javascript you can create a function with the key word 'function',
 * add a name to identify
 * and you can add arguments to use with the function in (arg1)
 */

function PrintHelloWorld() {
  console.log("Hello World");
}

// call/execute the function
PrintHelloWorld();

function mystery(a, b) {
  if (a <= 0 && b <= 0) {
    return 1;
  }
  if (a % 2 == 0) {
    return a + mystery(b, b - 1);
  } else {
    return b + mystery(a + 1, b);
  }
}

console.log(mystery(6, 2));

/**
 * Least Common Multiple
 */

function mcd(a, b) {
  return b === 0 ? a : mcd(b, a % b);
}

function mcm(a, b) {
  return (a * b) / mcd(a, b);
}

console.log(mcm(3, 7));

function rareMethod() {
  let letras = [
    "W",
    "A",
    "B",
    "T",
    "L",
    "H",
    "E",
    "J",
    "O",
    "P",
    "M",
    "T",
    "R",
  ];

  let n = letras.length;
  let izq = 0;
  let der = 0;
  let aux = 0;
  let res = "";
  let i;
  for (i = 0; i < n; i++) {
    if (aux > n) {
      console.log("quit");
      break;
    }
    der = aux + 1;
    while (der >= izq) {
      if (der == izq) {
        res += letras[aux];
        aux = aux + izq;
      }
      der--;
    }
    izq++;
  }
  return res;
}

console.log(rareMethod());
