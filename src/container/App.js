import React, { useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/core";
import Header from "../components/Header/Header";
import TotalExpense from "../components/Totals/TotalExpense";
import TotalIncome from "../components/Totals/TotalIncome";
import TransactionList from "../components/Transaction/TransactionList";
import TransactionInput from "../components/Input/TransactionInput";
import { TransactionContext } from "../context/TransactionContext";

function App() {
  const [state, setState] = useState({
    Transactions: [],
  });

  const addTransaction = (item) => {
    const {description, value} = item
    const id = uuidv4();
    const newItem = {
      id,
      description,
      value : parseInt(value)
    }
    setState({...state, Transactions:[...state.Transactions, newItem]})
  };

  const deleteTransaction = (id) => {
    setState({...state, Transactions: state.Transactions.filter(item => item.id !== id)})
  }

  return (
    <ThemeProvider>
      <CSSReset />
      <Flex
        maxWidth="320px"
        margin="0 auto"
        direction="column"
        textAlign="center"
        color='white'
        minH='100vh'
      >
        <TransactionContext.Provider value={state.Transactions}>
        <Header transactions={state.Transactions}/>
        <TotalExpense />
        <TotalIncome />
        <TransactionInput addTransaction={addTransaction} />
        <TransactionList  deleteTransaction={deleteTransaction}/>
        </TransactionContext.Provider>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
