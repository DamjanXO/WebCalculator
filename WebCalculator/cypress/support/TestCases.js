const testCases = [
  // For binary operations (add, subtract, divide, multiply), the format is: [input1, 'operation', input2, 'equalTo', expected result]
  // For unary operations (squarePower, factorial, overX, squareRoot, cubeRoot), the format is: [input, 'operation', expected result]
  // For binary operations with pi and euler (add, subtract, divide, multiply), the format is: [input, 'operation', pi/euler, 'equalTo', expected result]


  // Binary Operations (add, subtract, divide, multiply)
  [-52, 'clear', 0],
  [24, 'sum', 19, 'equalTo', 43], 
  [199.7, 'sum', -105.5, 'equalTo', 94.19999999999999],
  [-352.56, 'sum', 143.35, 'equalTo', -209.21],
  [-548.95, 'sum', -426.612, 'equalTo', -975.5620000000001],
  
  [42, 'substract', 23, 'equalTo', 19],
  [72.34, 'substract', -16.83, 'equalTo', 89.17],
  [-39.12, 'substract', 51.75, 'equalTo', -90.87],
  [-88.977, 'substract', -13.567, 'equalTo', -75.41],
  [-42.2, 'substract', -23.5, 'equalTo', -18.700000000000003],
  [42.2, 'substract', -23.5, 'equalTo', 65.7],

  
  [42, 'divide', 23, 'equalTo', 1.826086956521739],
  [455.5, 'divide', -151.12, 'equalTo', -3.0141609317098994],
  [-24.64, 'divide', 4.84, 'equalTo', -5.090909090909091],
  [-60.234, 'divide', -10.345, 'equalTo', 5.8225229579507],
  
  [42.7, 'multiply', 23, 'equalTo', 982.1],
  [32.43, 'multiply', -7.56, 'equalTo', -245.17079999999999],
  [-55.39, 'multiply', 9.82, 'equalTo', -543.9298],
  [-17.877, 'multiply', -13.765, 'equalTo', 246.07690499999998],

  // Unary Operations (squarePower, factorial, overX, squareRoot, cubeRoot)
  [42.5, 'squarePower', 1806.25],
  [-42, 'squarePower', 1764],
  [0, 'squarePower', 0],
  
  [5.3, 'factorial', 636],
  [-6, 'factorial', 'Invalid input'],
  [0, 'factorial', 1],
  
  [5.4, 'overX', 0.18518518518518517],
  [-6, 'overX', -0.16666666666666666],
  [0, 'overX', 'Invalid input'],
  
  [5.8, 'squareRoot', 2.4083189157584592],
  [-6, 'squareRoot', 'Invalid input'],
  [0, 'squareRoot', 0],
  
  [6.7, 'cubeRoot', 1.885203631020986],
  [-6, 'cubeRoot', -1.8171205928321397],
  [0, 'cubeRoot', 0],
  
  // Binary Operations with pi and euler (add, subtract, divide, multiply)
  [542.321, 'sum', 'euler', 'equalTo', 545.039281828459],
  [24, 'sum', 'pi', 'equalTo', 27.141592653589793],
  [542.321, 'sum', 'euler', 'equalTo', 545.039281828459],
  [-23.45, 'substract', 'pi', 'equalTo', -26.591592653589792],
  [224.568, 'substract', 'euler', 'equalTo', 221.84971817154096],
  [12.76, 'divide', 'pi', 'equalTo', 4.061634147705169],
  [-34.67, 'divide', 'euler', 'equalTo', -12.754380225413907],
  [1.2345, 'multiply', 'pi', 'equalTo', 3.8782961308565995],
  [-52.612, 'multiply', 'euler', 'equalTo', -143.01424355888727]
  

  
];

export default testCases;

