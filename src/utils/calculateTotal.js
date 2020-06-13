export const calcBudget = (transaction) => {
  const budget =
    transaction.length > 0
      ? transaction.map((t) => t.value).reduce((acc, curr) => acc + curr)
      : 0;

  return budget    
} 

export const calcTotalExpense = (transaction) => {

  const totalExpense =
    transaction.map((t) => t.value).filter((v) => v < 0).length > 0
      ? Math.abs(
          transaction
            .map((t) => t.value)
            .filter((v) => v < 0)
            .reduce((acc, curr) => acc + curr)
        )
      : 0;

  return totalExpense

}

export const calcTotalIncome = (transaction) => {

  const totalIncome =
    transaction.map((t) => t.value).filter((v) => v > 0).length > 0
      ? Math.abs(
          transaction
            .map((t) => t.value)
            .filter((v) => v > 0)
            .reduce((acc, curr) => acc + curr)
        )
      : 0;

  return totalIncome

}