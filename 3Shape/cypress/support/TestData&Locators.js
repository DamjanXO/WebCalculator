// locators.js



// Common parts of the locator strings
const calculatorInterface = "div#calculator-interface";
const calculatorScreen = "div#calculator-screen";
const functionalContainer = "div#functional-container";
const numsContainer = "div#numsContainer div.numbers-line";
const arithmeticContainer = "div#arithmetic-container";
const numbersLine = "div.numbers-line";
const button = "div.button";


export const locators = {

// Calculator Screen and Functional Buttons

  numsTop: `${calculatorInterface} ${calculatorScreen} div#screen-top p#nums-top`,
  numsBottom: `${calculatorInterface} ${calculatorScreen} div#screen-bottom p#nums-bottom`,
  negate: `${calculatorInterface} ${functionalContainer} ${button}#negate`,
  pi: `${calculatorInterface} ${functionalContainer} ${button}#pi`,
  pitext: `${calculatorInterface} ${functionalContainer} ${button}#pi`,
  euler: `${calculatorInterface} ${functionalContainer} ${button}#euler`,
  eulertext: `${calculatorInterface} ${functionalContainer} ${button}#euler`,
  factorial: `${calculatorInterface} ${functionalContainer} ${button}#factorial`,
  factorialtext: `${calculatorInterface} ${functionalContainer} ${button}#factorial`,
  ce: `${calculatorInterface} ${functionalContainer} ${button}#ce`,
  del1: `${calculatorInterface} ${functionalContainer} ${button}#del1`,
  del2: `${calculatorInterface} ${functionalContainer} ${button}#del1 img#del2`,


// Numbers Buttons

  num0: `${calculatorInterface} ${numbersLine} div#num0`,
  num1: `${calculatorInterface} ${numbersLine} div#num1`,
  num2: `${calculatorInterface} ${numbersLine} div#num2`,
  num3: `${calculatorInterface} ${numbersLine} div#num3`,
  num4: `${calculatorInterface} ${numbersLine} div#num4`,
  num5: `${calculatorInterface} ${numbersLine} div#num5`,
  num6: `${calculatorInterface} ${numbersLine} div#num6`,
  num7: `${calculatorInterface} ${numbersLine} div#num7`,
  num8: `${calculatorInterface} ${numbersLine} div#num8`,
  num9: `${calculatorInterface} ${numbersLine} div#num9`,
  clear: `${calculatorInterface} ${numbersLine} div#clear`,
  comma: `${calculatorInterface} ${numbersLine} div#comma`,


// Arithmetic Operations

  squareRoot: `${calculatorInterface} ${arithmeticContainer} ${button}#squareRoot`,
  cubeRoot: `${calculatorInterface} ${arithmeticContainer} ${button}#cubeRoot`,
  divide: `${calculatorInterface} ${arithmeticContainer} ${button}#divide`,
  multiply: `${calculatorInterface} ${arithmeticContainer} ${button}#multiply`,
  substract: `${calculatorInterface} ${arithmeticContainer} ${button}#substract`,
  sum: `${calculatorInterface} ${arithmeticContainer} ${button}#sum`,
  overX: `${calculatorInterface} ${arithmeticContainer} ${button}#overX`,
  overXtext: `${calculatorInterface} ${arithmeticContainer} ${button}#overX`,
  squarePower: `${calculatorInterface} ${arithmeticContainer} ${button}#squarePower`,
  squarePowertext: `${calculatorInterface} ${arithmeticContainer} ${button}#squarePower`,
  equalTo: `${calculatorInterface} ${arithmeticContainer} ${button}#equalTo`,
};




export const calcValues = {
    num1: "1", 
	num2: "2", 
	num3: "3", 
	num4: "4", 
	num5: "5", 
	num6: "6",
    num7: "7", 
	num8: "8", 
	num9: "9", 
	num0: "0", 
	comma: ",", 
	sum: "+",
    substract: "-", 
	divide: "÷", 
	multiply: "x", 
	factorial: "!",
	factorialtext: "n!",
	overX: "1/",
	overXtext: "1/x",
    equalTo: "=", 
	squareRoot: "√", 
	cubeRoot: "∛", 
	squarePower: "²",
	squarePowertext: "x²",
	negate:"+/-",
    pi: "3,1415926535897932384", 
	pitext: "π",
	euler: "2,7182818284590452353",
	eulertext: "e",
	numsTop: "",
	numsBottom:"0",
	ce: "CE",
	clear: "C"
};


export const elementsToTest = [
    "negate",
    "pitext",
    "eulertext",
    "factorialtext",
    "ce",
    "num7",
    "num8",
    "num9",
    "num4",
    "num5",
    "num6",
    "num1",
    "num2",
    "num3",
    "clear",
    "num0",
    "comma",
    "squareRoot",
    "cubeRoot",
    "divide",
    "multiply",
    "substract",
    "sum",
    "overXtext",
    "squarePowertext",
    "equalTo",
    "numsTop",
    "numsBottom",
  ];