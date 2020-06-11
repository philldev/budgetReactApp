import { Button, Input, FormControl,   } from "@chakra-ui/core";
import React, { useState } from "react";

export default function TransactionInput({ addTransaction }) {
  const [item, setItem] = useState({
    description: "",
    value: "",
  });

  const handleInput = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(item.description !== '' && item.value !== '' && item.value !== 0 ) {
      addTransaction(item)
      setItem({
        description:'',
        value:'',
      })
    } else {
      console.log('input field empty')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        display="flex"
        justifyContent="space-between"
        marginBottom="10px"
      >
        <Input
          fontSize="sm"
          flexBasis="72%"
          onChange={handleInput}
          name="description"
          value={item.description}
          type="text"
          color="black"
          placeholder="Description"
          isRequired
        />
        <Input
          fontSize="sm"
          flexBasis="25%"
          type="number"
          color="black"
          value={item.value}
          onChange={handleInput}
          name="value"
          placeholder="Value"
          isRequired
        />
      </FormControl>
      <Button type="submit" variantColor="blue" minW="100%">
        Submit
      </Button>
    </form>
  );
}
