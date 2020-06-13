import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Flex,
} from "@chakra-ui/core";
import React, { useState, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { useEffect } from "react";

export default function TransactionInput() {
  const [item, setItem] = useState({
    description: "",
    value: "",
  });

  const [select, setSelect] = useState("+");

  const [bg, setBg] = useState('tomato')

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

      addTransaction(item, select);
      setItem({
        description: "",
        value: "",
      });
    }
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  useEffect(() => {

    if (select === '+' ) {
      setBg('#319795')
    } else {
      setBg('tomato')
    }

  }, [select])


  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={handleSubmit}>
      <FormControl marginBottom="5px">
        <FormLabel htmlFor="description">Description</FormLabel>
        <Input
          fontSize="xs"
          onChange={handleInput}
          name="description"
          value={item.description}
          type="text"
          color="black"
          placeholder="Transaction note"
          isRequired
        />
      </FormControl>
      <FormControl marginBottom="20px">
        <FormLabel htmlFor="value">Amount</FormLabel>
        <Flex justifyContent="space-between">
          <Input
            fontSize="xs"
            type="number"
            color="black"
            value={item.value}
            onChange={handleInput}
            name="value"
            placeholder="$--"
            flexBasis="75%"
            isRequired
          />
          <Select
            backgroundColor={bg}
            borderColor={bg}
            color="white"
            flexBasis="20%"
            onChange={handleSelect}
            value={select}
          >
            <option value="+">+</option>
            <option value="-">-</option>
          </Select>
        </Flex>
        <FormHelperText fontSize="xs" id="email-helper-text" textAlign='right'>
          Select transaction type 
        </FormHelperText>
      </FormControl>
      <Button type="submit" variantColor="blue" minW="100%">
        Submit
      </Button>
    </form>
  );
}
