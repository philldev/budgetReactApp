import React, { useContext } from "react";
import { Text } from "@chakra-ui/core";
import { TransactionContext } from "../../context/TransactionContext";

export default function TotalExpense() {
  const transaction = useContext(TransactionContext);

  const totalExpense =
    transaction.map((t) => t.value).filter((v) => v < 0).length > 0
      ? Math.abs(
          transaction
            .map((t) => t.value)
            .filter((v) => v < 0)
            .reduce((acc, curr) => acc + curr)
        )
      : 0;

  return (
    <div>
      <Text textAlign="right" fontSize="md">
        Total expenses
      </Text>
      <hr style={{ borderColor: "#4A5568" }} />
      <Text textAlign="right" fontSize="md" color="orange.500">
        - {totalExpense}
      </Text>
    </div>
  );
}
