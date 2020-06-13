import React from "react";
import { Text } from "@chakra-ui/core";
import NumberFormat from "react-number-format";

export default function TotalIncome({totalIncome}) {

  return (
    <div>
      <Text textAlign="right" fontSize="md" fontWeight='bold'>
        Income
      </Text>
      <hr style={{ borderColor: "#4A5568" }} />
      <Text  paddingY="10px" textAlign="right" color="teal.300">
      <NumberFormat value={totalIncome} displayType={'text'} thousandSeparator={true} prefix={'+ $'} />
      </Text>
    </div>
  );
}
