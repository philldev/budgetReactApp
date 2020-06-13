import { useState } from "react";
import { useLocalStorage } from "./localstorage";
import { v4 as uuidv4 } from "uuid";

export const useData = () => {
  const [data, setData] = useState({
    Transactions: [],
  });

  const addTransaction = (item, type) => {
    let { description, value } = item;
    
    value = type === '-' ? `-${value}` : value

    console.log(type)

    const id = uuidv4();
    const newItem = {
      id,
      description,
      value: parseInt(value),
    };
    setData({ ...data, Transactions: [...data.Transactions, newItem] });
  };

  const deleteTransaction = (id) => {
    setData({
      ...data,
      Transactions: data.Transactions.filter((item) => item.id !== id),
    });
  };

  useLocalStorage(data, setData);

  return {
    data,
    addTransaction,
    deleteTransaction,
  };
};
