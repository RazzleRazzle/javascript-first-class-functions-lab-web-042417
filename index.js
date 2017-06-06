function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function (num) {
    return num * multiplierValue
  }
}

function multiplier(multiplierValue, num) {
  return num * multiplierValue
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = createMultiplier.bind(null, 2)
var triplerWithBind = createMultiplier.bind(null, 3)
