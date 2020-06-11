import React, {useContext} from "react";
import { Text } from "@chakra-ui/core";
import { TransactionContext } from "../../context/TransactionContext";

export default function TotalIncome() {
  
  const transaction = useContext(TransactionContext)

  const totalIncome = transaction.length > 0 ? transaction.map(t => t.value).filter(v => v > 0).reduce((acc, curr) => acc + curr) : 0

  return (
    <div>
      <Text textAlign="right" fontSize="md">
        Total income
      </Text>
      <hr style={{ borderColor: "#4A5568" }} />
      <Text textAlign="right" fontSize="md" color="teal.300">
        + {totalIncome}
      </Text>
    </div>
  );
}
