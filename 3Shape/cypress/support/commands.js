// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {locators, calcValues} from "../support/TestData&Locators"; // Adjust the path to your locators file

let topScreen = "";

Cypress.Commands.add("TopBottomInterface", (topText, bottomText) => {
  // Check if topText and bottomText are defined
  if (topText === undefined || bottomText === undefined) {
    // Throw an error if any of the arguments are missing
    throw new Error("Missing argument(s) for TopBottomInterface");
  }

  // Assert that the text of elements with locators.numsTop matches topText
  cy.get(locators.numsTop).should("have.text", topText);

  // Assert that the text of elements with locators.numsBottom matches bottomText
  // Convert any periods (.) to commas (,) in the text for display
  cy.get(locators.numsBottom).should("have.text", bottomText.toString().replace(".", ","));
});

Cypress.Commands.add("getNumber", (GetNumber) => {
  let bottomScreen = ""; // Initialize an empty sequence
  const formattedNumber = GetNumber.toString().replace(".", ",");
  const digits = (Math.abs(GetNumber).toString().replace(".", ",") + (GetNumber < 0 ? "-" : "")).split("");

  digits.forEach((digit) => {
    bottomScreen += digit;

    // Determine the action based on the digit
    const action = digit === "," ? "comma" :
                 digit === "-" ? "negate" :
                 `num${digit}`;

    // Dynamically click on the element associated with the digit
    cy.get(locators[action]).click();

    // Call TopBottomInterface with the appropriate arguments
    cy.TopBottomInterface(topScreen, digit === "-" ? formattedNumber : bottomScreen);
  });

  // Set the top screen with the final formatted number
  cy.TopScreen(" " + formattedNumber);
});

Cypress.Commands.add("TopScreen", (newValue) => {
	// Reset 'topScreen' if 'newValue' is "reset"
    // Otherwise, append 'newValue' to 'topScreen'
  topScreen = newValue === "reset" ? "" : topScreen + newValue;
});

Cypress.Commands.add("binaryOperation", (operation, value) => {
  // Set the top screen with the binary operation symbol
  cy.TopScreen(" " + `${calcValues[operation]}`);

  // Click the binary operation button
  cy.get(locators[operation]).click().then(() => {
    // Call TopBottomInterface with the updated screens
    cy.TopBottomInterface(topScreen, value);
  });
});

Cypress.Commands.add("unaryOperation", (operation, result, value) => {
  switch (operation) {
    // Handle squareRoot, cubeRoot, and overX operations
    case "overX":
    case "squareRoot":
    case "cubeRoot":
      if (
        (operation === "squareRoot" && result[0] === "-") ||
        (operation === "overX" && result[0] === "0")
      ) {
        // Handle special case when the result is negative for squareRoot or zero for overX
        cy.get(locators[operation]).click().then(() => {
          topScreen = "";
          cy.TopBottomInterface(`${topScreen}`, value);
        });
      } else {
        // Handle the common logic for squareRoot, cubeRoot, and overX
        cy.get(locators[operation]).click().then(() => {
          topScreen = topScreen.slice(1);
          cy.TopBottomInterface(" " + `${calcValues[operation]}(${topScreen})`, value);
        });
      }
      break;

    // Handle squarePower and factorial operations
    case "squarePower":
    case "factorial":
      if (operation === "factorial" && result[0] === "-") {
        // Handle special case when the result is negative for factorial
        cy.get(locators[operation]).click().then(() => {
          topScreen = "";
          cy.TopBottomInterface(`${topScreen}`, value);
        });
      } else {
        // Handle the common logic for squarePower and factorial
        cy.get(locators[operation]).click().then(() => {
          topScreen = topScreen.slice(1);
          cy.TopBottomInterface(" " + `(${topScreen})${calcValues[operation]}`, value);
        });
      }
      break;

    case "equalTo":
      // Handle the equalTo operation
      cy.get(locators[operation]).click().then(() => {
        cy.TopScreen(" " + `${calcValues[operation]}`)}).then(() => {
          cy.TopBottomInterface(topScreen, value);
      });
      break;

    case "pi":
    case "euler":
      // Handle pi and euler operations
      cy.get(locators[operation]).click().then(() => {
        cy.TopBottomInterface(topScreen, value);
        cy.TopScreen(" " + `${calcValues[operation]}`);
      });
      break;
	  
	case "clear":
      // Handle C operation
      cy.get(locators[operation]).click().then(() => {
        cy.TopBottomInterface("", value);
      });
      break;

    default:
      // Handle the default case, if needed
      break;
  }
});








