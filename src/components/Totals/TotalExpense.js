import React from "react";
import { Text, Tag } from "@chakra-ui/core";

import NumberFormat from "react-number-format";

export default function TotalExpense({totalExpense, totalExpensePercent}) {
  

  console.log('rendering')

  return (
    <div>
      <Text textAlign="right" fontSize="md">
        Total expenses
      </Text>
      <hr style={{ borderColor: "#4A5568" }} />
      <Text textAlign="right" fontSize="md" color="orange.500">
      <NumberFormat value={totalExpense} displayType={'text'} thousandSeparator={true} prefix={'- $'} />
      <Tag marginLeft='5px' size="sm" variantColor="orange" variant='outline'>
              {totalExpensePercent > 0 ? totalExpensePercent : '--'}%{" "}
            </Tag>
      </Text>
    </div>
  );
}
