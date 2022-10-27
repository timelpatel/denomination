function getDenomination(amount) {
  let remainingAmount = amount;
  let change = [0, 0, 0, 0, 0, 0, 0, 0];
  const coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

  for (let i = 0; i < coins.length; i++) {
    while (remainingAmount >= coins[i]) {
      change[i] = change[i] + 1;
      remainingAmount = (remainingAmount - coins[i]).toFixed(2);
    }
  }

  return change;
}
