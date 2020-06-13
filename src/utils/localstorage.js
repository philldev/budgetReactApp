import { useEffect } from "react";

const LOCAL_STORAGE_KEY = 'budgetapp'

export const useLocalStorage = (state, setState) => {
  useEffect(() => {
    if (!state) {
      const storageState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      setState(storageState);
    }
  },);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);
}