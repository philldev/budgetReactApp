export const itemPercentage = (isExpense, transaction, item) => {
  if (isExpense) {
    let percent;
    const totalIncome =
      transaction.map((t) => t.value).filter((v) => v > 0).length > 0
        ? transaction
            .map((t) => t.value)
            .filter((v) => v > 0)
            .reduce((acc, curr) => acc + curr)
        : 0;
    if (totalIncome > 0 && totalIncome - item.value > 0) {
      percent = Math.round((item.value / totalIncome) * 100);
    } else {
      percent = "--";
    }
    return percent;
  }
};

export const totalPercentage = (transaction, totalExpense) => {
  const totalIncome =
    transaction.map((t) => t.value).filter((v) => v > 0).length > 0
      ? transaction
          .map((t) => t.value)
          .filter((v) => v > 0)
          .reduce((acc, curr) => acc + curr)
      : 0;
  let percentage;

  if (totalIncome > 0 && totalIncome - totalExpense > 0) {
    // calculate percentage
    percentage = Math.round((totalExpense / totalIncome) * 100);
  } else {
    percentage = -1;
  }

  return percentage;
};
