// Kiểm tra single
function getScoreDice(dice, num) {
  let sum = 0;

  while (dice.indexOf(num) != -1) {
    dice.splice(dice.indexOf(num), 1);
    sum += num === 5 ? 50 : num === 1 ? 100 : 0;
  }

  return [sum, dice];
}

// Kiểm tra 3 số trước
function getCheckThree(dice, numThreeStr, point) {
  let sum = 0;
  let diceStr = dice.join('');
  while (diceStr.includes(numThreeStr)) {
    sum += point;
    diceStr = diceStr.replace(numThreeStr, '');
  }

  return [sum, diceStr.split('')];
}

function score(dice) {
  let arrTemp = [...dice];
  arrTemp.sort((a, b) => a - b);

  const boardThree = [
    ['111', 1000],
    ['222', 200],
    ['333', 300],
    ['444', 400],
    ['555', 500],
    ['666', 600],
  ];

  let sum = 0;
  for (let bt of boardThree) {
    const check = getCheckThree(arrTemp, bt[0], bt[1]);
    let count = check[0];
    arrTemp = [...check[1]];
    sum += count;
  }

  arrTemp = arrTemp.map((e) => +e);

  // Kiểm tra 1, 5
  const [count1, arr1] = getScoreDice(arrTemp, 1);
  arrTemp = arr1;

  const [count5, arr5] = getScoreDice(arrTemp, 5);
  arrTemp = arr5;

  sum += count1 + count5;

  console.log(arrTemp, sum);
}

console.log(score([2, 3, 4, 6, 2]));
