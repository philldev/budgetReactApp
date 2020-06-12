import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import { ListItem, Text, Icon, Tag } from "@chakra-ui/core";
import { TransactionContext } from "../../context/TransactionContext";
import { itemPercentage } from "../../utils/itemPercentage";

export default function TransactionItem({ item }) {
  const { transaction, deleteTransaction } = useContext(TransactionContext);

  const handleDelete = () => {
    deleteTransaction(item.id);
  };

  const isExpense = item.value < 0 ? true : false;

  const percent = itemPercentage(isExpense,transaction, item)

  return (
    <>
      <ListItem
        className="transaction_item fade_in"
        borderBottom="1px solid #4A5568"
        marginBottom="5px"
        display="flex"
        justifyContent="space-between"
        paddingBottom='5px'
      >
        <Text>{item.description}</Text>
        <Text color={item.value > 0 ? "teal.500" : "orange.500"}>
          <NumberFormat
            value={item.value}
            displayType={"text"}
            thousandSeparator={true}
            prefix={item.value > 0 ? "+ $" : " $"}
          />
          {isExpense ? (
            <Tag marginLeft='5px' size="sm" variantColor="orange" variant='outline'>
              {percent}%{" "}
            </Tag>
          ) : (
            ''
          )}
          <span onClick={handleDelete}>
            <Icon
              className="delete_icon"
              name="delete"
              size="15px"
              color="red.500"
            />
          </span>
        </Text>
      </ListItem>
    </>
  );
}
