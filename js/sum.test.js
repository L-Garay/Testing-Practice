const SumFunctions = require("./sum");

test("adds two numbers correctly", () => {
  expect(SumFunctions.sumTwo(1, 2)).toBe(3);
  expect(SumFunctions.sumTwo(-1, 2)).toBe(1);
  expect(SumFunctions.sumTwo(-1, -2)).toBe(-3);
});

test("add three numbers correctly", () => {
  expect(SumFunctions.sumThree(1, 3, 5)).toBe(9);
  expect(SumFunctions.sumThree(1, -3, 5)).toBe(3);
  expect(SumFunctions.sumThree(1, 3, -5)).toBe(-1);
});

test("Should only add positive numbers", () => {
  expect(SumFunctions.sumOnlyPositive(-1, 5)).toBe("Stay Positive");
  expect(SumFunctions.sumOnlyPositive(1, -5)).toBe("Stay Positive");
  expect(SumFunctions.sumOnlyPositive(3, 6)).toBe(9);
});
