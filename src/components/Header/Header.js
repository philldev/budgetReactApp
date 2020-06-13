import React, { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { calcBudget } from "../../utils/calculateTotal";
import Date from "./Date";
import Budget from "./Budget";

export default function Header() {
  const {transaction} = useContext(TransactionContext);

  const budget = calcBudget(transaction)

  return (
    <>

      <Date/>
      <Budget budget={budget}/>
    </>
  );
}
