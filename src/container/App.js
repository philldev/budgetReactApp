import React from "react";
import "../App.css";
import { ThemeProvider, CSSReset, Flex } from "@chakra-ui/core";
import Header from "../components/Header/Header";
import TransactionList from "../components/Transaction/TransactionList";
import TransactionInput from "../components/Input/TransactionInput";
import { TransactionContext } from "../context/TransactionContext";
import Totals from "../components/Totals/Totals";
import { useData } from "../utils/state";



function App() {
  const {data, addTransaction, deleteTransaction} =  useData()

  return (
    <ThemeProvider>
      <CSSReset />
      <Flex
        maxWidth="320px"
        margin="100px auto"
        direction="column"
        textAlign="center"
        color="white"
        minH="100vh"
        paddingX='1rem'
      >
        <TransactionContext.Provider value={{ 
          transaction : data.Transactions,
          addTransaction,
          deleteTransaction
          }}>
          <Header transactions={data.Transactions} />
          <Totals/>
          <TransactionInput  />
          <TransactionList  />
        </TransactionContext.Provider>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
