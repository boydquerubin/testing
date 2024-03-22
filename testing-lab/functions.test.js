const { returnTwo, greeting, add } = require("../wanted-queries/functions.js");

describe("Formatting Strings", () => {
  test("returnTwo should return 2", () => {
    let expected = 2;
    let actual = returnTwo();
    expect(actual).toBe(expected);
  });

  test("greeting should greet with 'Hello,' name. Where name is the value of the name parameter", () => {
    let name = "James";
    let expected = `Hello, ${name}`;
    let actual = greeting(name);

    expect(actual).toBe(expected);
  });

  test("greeting should greet with 'Hello,' name. Where name is the value of the name parameter", () => {
    let name = "Jill";
    let expected = `Hello, ${name}`;
    let actual = greeting(name);

    expect(actual).toBe(expected);
  });

  test("add should add num1 and num2", () => {
    let num1 = 1;
    let num2 = 2;
    let expected = num1 + num2;

    let actual = add(num1, num2);

    expect(actual).toBe(expected);
  });

  test("add should add num1 and num2", () => {
    let num1 = 5;
    let num2 = 9;
    let expected = num1 + num2;

    let actual = add(num1, num2);

    expect(actual).toBe(expected);
  });
});

// THIS IS FROM FUNCTIONS.JS
// CHANGE IN PACKAGE.JSON, CHANGE TEST TO "JEST"
// function returnTwo(int) {
//   return 2;
// }

// function greeting(name) {
//   return `Hello, ${name}`;
// }

// function add(num1, num2) {
//   return num1 + num2;
// }

// module.exports = {
//   returnTwo,
//   greeting,
//   add,
// };
