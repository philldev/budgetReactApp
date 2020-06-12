import { Button, Input, FormControl } from "@chakra-ui/core";
import React, { useState, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

export default function TransactionInput() {
  const [item, setItem] = useState({
    description: "",
    value: "",
  });

  const { addTransaction } = useContext(TransactionContext);

  const handleInput = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.description !== "" && item.value !== "" && item.value !== 0) {
      addTransaction(item);
      setItem({
        description: "",
        value: "",
      });
    }
  };

  return (
    <form style={{marginBottom: '1rem'}} onSubmit={handleSubmit}>
      <FormControl
        marginBottom="5px"
      >
        <Input
          fontSize="xs"
          onChange={handleInput}
          name="description"
          value={item.description}
          type="text"
          color="black"
          placeholder="Description"
          isRequired
        />
        
      </FormControl>
      <FormControl marginBottom="5px">
      <Input
          fontSize="xs"
          type="number"
          color="black"
          value={item.value}
          onChange={handleInput}
          name="value"
          placeholder="Amount"
          isRequired
        />

      </FormControl>
      <Button type="submit" variantColor="blue" minW="100%">
        Submit
      </Button>
    </form>
  );
}
