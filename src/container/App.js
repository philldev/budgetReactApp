import React from "react";
import "./App.css";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
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

        <TransactionContext.Provider value={{ 
          transaction : data.Transactions,
          addTransaction,
          deleteTransaction
          }}>
          <main>
          <Header transactions={data.Transactions} />
          <Totals/>
          <TransactionInput  />
          <TransactionList  />
          </main>
        </TransactionContext.Provider>
      
    </ThemeProvider>
  );
}

export default App;
