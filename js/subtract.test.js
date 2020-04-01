const subtract = require("./subtract");

test("subtracts two numbers properly", () => {
  expect(subtract(6, 3)).toBe(3);
});
