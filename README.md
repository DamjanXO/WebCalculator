This repository contains end-to-end tests for the WebCalculator project using Cypress. 

## Getting Started

Follow these steps to set up and run the Cypress tests:

1. **Download Cypress App**:
   - Go to the following link: [Cypress App Download](https://download.cypress.io/app)
   - Download the Cypress app.

2. **Open Cypress App**:
   - After downloading, open the Cypress application (Cypress.exe).

3. **Select the 3Shape Folder**:
   - Inside the Cypress app, select the "WebCalculator" folder.
   ![Cypress1](https://github.com/DamjanXO/WebCalculator/assets/31394543/7a74caeb-9897-44ff-b6ff-d8db8c049080)

4. **Choose E2E Testing**:
   - Within the "WebCalculator" folder, select "e2e testing."
   ![Cypress2](https://github.com/DamjanXO/WebCalculator/assets/31394543/e761fee4-2827-4c18-a737-adcb924334e8)

5. **Select Chrome for Testing**:
   - In the "e2e testing" section, choose "Chrome" as the browser for your end-to-end testing.

6. **Start E2E Testing in Chrome**:
   - Click on "Start E2E testing in Chrome" to begin your end-to-end tests.
![cypress3](https://github.com/DamjanXO/WebCalculator/assets/31394543/4840a460-fd56-4b3c-b00f-4ec1409747c2)

7. **Choose Test File**:
   - From the list of test files, click on "calculator.cy.js" to run your specific test.
   ![Cypress4](https://github.com/DamjanXO/WebCalculator/assets/31394543/93411d5d-acb4-4fd3-bae2-cdbedd2dc924)




## Project Structure

In this repository, you'll find the following files and folders:

- `Calculator.cy.js`: This file serves as the primary test script.

- `support` folder:
  - `Commands.js`: Contains custom functions and commands used in the tests.
  - `TestCases.js`: Serves as the file for organizing and structuring the test sequences.
  - `TestData&Locators.js`: Stores test data and locators essential for test execution.
