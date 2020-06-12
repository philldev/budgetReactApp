import React from "react";
import { Text } from "@chakra-ui/core";
import NumberFormat from "react-number-format";

export default function TotalIncome({totalIncome}) {

  return (
    <div>
      <Text textAlign="right" fontSize="md">
        Total income
      </Text>
      <hr style={{ borderColor: "#4A5568" }} />
      <Text  textAlign="right" fontSize="md" color="teal.300">
      <NumberFormat value={totalIncome} displayType={'text'} thousandSeparator={true} prefix={'+ $'} />
      </Text>
    </div>
  );
}
