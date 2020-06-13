import React, { useContext } from "react";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";
import { totalPercentage } from "../../utils/itemPercentage";
import { calcTotalExpense, calcTotalIncome } from "../../utils/calculateTotal";
import { TransactionContext } from "../../context/TransactionContext";

export default function Totals() {

  const {transaction} = useContext(TransactionContext);

  const totalExpense = calcTotalExpense(transaction)

  const totalIncome = calcTotalIncome(transaction)

  const totalExpensePercent = totalPercentage(transaction, totalExpense)


  return (
    <div className="totals" style={{marginBottom : '1rem'}}>
      <TotalIncome totalIncome={totalIncome} />
      <TotalExpense totalExpense={totalExpense} totalExpensePercent={totalExpensePercent} />
    </div>
  );
}
