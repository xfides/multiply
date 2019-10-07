module.exports = function multiply(first, second) {

  let arrRFirst = first.split("").reverse();
  let arrRSecond = second.split("").reverse();

  let stack = [];

  for (let i = 0; i < arrRFirst.length; i++) {
    for (let j = 0; j < arrRSecond.length; j++) {
      let partMul = arrRFirst[i] * arrRSecond[j];

      if (stack[i + j] !== undefined) {
        stack[i + j] += partMul;
      } else {
        stack[i + j] = partMul;
      }
    }
  }

  // обрабатка стека, чтобы осталась одна цифра
  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let head = Math.floor(stack[i] / 10);
    stack[i] = num;

    // работаем с порядками
    if (stack[i + 1] !== undefined) {
      stack[i + 1] += head;
    } else if (head != 0) {
      stack[i + 1] = head;
    }
  }
  return stack.reverse().join("");

}
