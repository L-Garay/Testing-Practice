const sumFunctions = {
  sumTwo: function(num1, num2) {
    let res = num1 + num2;
    return res;
  },

  sumThree: function(num1, num2, num3) {
    let res = num1 + num2 + num3;
    return res;
  },

  sumOnlyPositive: function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
      return "Stay Positive";
    }
    let res = num1 + num2;
    return res;
  }
};

module.exports = sumFunctions;
