import React from "react";
import { Text } from "@chakra-ui/core";

import NumberFormat from "react-number-format";

export default function TotalExpense({ totalExpense, totalExpensePercent }) {
  console.log("rendering");

  return (
    <div>
      <Text textAlign="right" fontSize="md" fontWeight='bold'>
        Expenses
      </Text>
      <hr style={{ borderColor: "#4A5568" }} />
      <Text paddingY="10px" textAlign="right" fontSize="md" color="orange.500">
        <NumberFormat
          value={totalExpense}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"- $"}
        />
        <span style={{ border: "1px solid #DD6B20", borderRadius: '5px', padding:'5px', marginLeft:'5px' }}>
          {totalExpensePercent > 0 ? totalExpensePercent : "--"}%{" "}
        </span>
      </Text>
    </div>
  );
}
