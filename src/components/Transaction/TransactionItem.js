import React from "react";
import { ListItem, Text, Icon } from "@chakra-ui/core";

export default function TransactionItem({ item, deleteTransaction }) {

  const handleDelete = () => {
    deleteTransaction(item.id)
  } 
 

  return (
    <>
      <ListItem
        className="transaction_item"
        borderBottom="1px solid #4A5568"
        marginBottom="5px"
        display="flex"
        justifyContent="space-between"
      >
        <Text>{item.description}</Text>
        <Text color={item.value > 0 ? "teal.500" : "orange.500"}>
          {item.value}{" "}
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
