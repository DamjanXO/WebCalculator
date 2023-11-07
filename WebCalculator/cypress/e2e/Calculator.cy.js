import {locators, calcValues, elementsToTest} from "../support/TestData&Locators"; // Import data and locators
import testCases from "../support/TestCases"; // Import test cases

let topScreen = "";

describe("Calculator Content Tests", () => {

  beforeEach(() => {
    cy.visit("https://filip-spasovski.github.io/Simple-Web-Calculator/");
  });

  // Iterate through elementsToTest array
  elementsToTest.forEach((element) => {
    // Extract the element name and value
    const elementName = element.replace("text", "");
    const elementValue = calcValues[element];

    // Create a test description based on elementName
    const testDescription = (elementName === "pi" || elementName === "euler") ?
      `Should have text "${elementValue}" in ${elementName} and value "${calcValues[elementName]}"` :
      `Should have text "${elementValue}" in ${elementName}`;

    it(testDescription, () => {
      // Check if the element has the expected text
      cy.get(locators[element]).should("have.text", elementValue);

      // If the element is "pi" or "euler," perform additional action
      if (elementName === "pi" || elementName === "euler") {
        cy.get(locators[element]).click();
        cy.TopBottomInterface("", calcValues[elementName]);
      }
    });
  });
});

describe("Calculator Sequence Test", () => {
  beforeEach(() => {
    // Before each test, visit the calculator webpage
    cy.visit("https://filip-spasovski.github.io/Simple-Web-Calculator/");

  });

  testCases.forEach((operations, index) => {
    // Create a formatted string of the operations for the test description
    const formattedOperations = operations.map((item) => typeof item === "number" ? item : `'${item}'`);

    it(`Performs Calculator Sequence: [${formattedOperations.join(", ")}]`, () => {
      let resultText = "";
      // Loop through each operation in the test data
      for (let i = 0; i < operations.length; i++) {
        // Get the current operation/number from the test data
        const currentElement = operations[i];

        // Handle the current currentElement based on its type (number or operation)
        if (typeof currentElement === "number") {
          // If the currentElement is a number, it represents a numeric input

          resultText += currentElement; // Update the result text with the numeric value

          cy.getNumber(currentElement); // Call the custom currentElement to input the number
          topScreen += " " + `${calcValues[currentElement]}`;
        } else {
          // If the currentElement is not a number, it represents a calculator operation

          
          const prevValue = operations[i - 1]; // Value before the operation
          const nextValue = operations[i + 1]; // Value after the operation

          resultText += calcValues[currentElement]; // Update the result text with the current operation's value

          
          switch (currentElement) {
            // Binary operations 
            case "multiply":
            case "sum":
            case "divide":
            case "substract":

              cy.binaryOperation(currentElement, prevValue); 
              break;

              // Unary operations and equality check
            case "squarePower":
            case "factorial":
            case "overX":
            case "squareRoot":
            case "cubeRoot":
			
              topScreen += "";
              cy.unaryOperation(currentElement, resultText, nextValue); 
              i++;
              break;
            case "equalTo":
			
              cy.unaryOperation(currentElement, resultText, nextValue); 
              i++; // Skip the next value in the array since it's the final result of the sequence
              break;

              // Constants pi and euler
            case "pi":
            case "euler":
              
              cy.unaryOperation(currentElement, resultText, calcValues[currentElement]);
              break;
			case "clear":
			
			  topScreen += "";
              cy.unaryOperation(currentElement, resultText, nextValue); 
              i++;
              break;
          }
        }
        
      }
      cy.TopScreen("reset"); // Reset the top screen for the next operation
    });
  });
});