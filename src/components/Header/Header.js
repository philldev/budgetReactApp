import React, { useContext } from "react";
import { Heading } from "@chakra-ui/core";
import { TransactionContext } from "../../context/TransactionContext";
import NumberFormat from "react-number-format";
import { calcBudget } from "../../utils/calculateTotal";

export default function Header() {
  const {transaction} = useContext(TransactionContext);

  const budget = calcBudget(transaction)

  return (
    <>

      <Heading as="h2" size='md'>
        Your available budget in June 2020
      </Heading>
      <Heading  color={budget > 0 ? "teal.500" : "orange.500"} as="h2" size="lg">
        <NumberFormat
          value={budget}
          displayType={"text"}
          thousandSeparator={true}
          prefix={budget > 0 ? "+ $" : " $"}
        />
      </Heading>
    </>
  );
}
