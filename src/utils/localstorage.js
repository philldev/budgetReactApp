import { useEffect } from "react";

const LOCAL_STORAGE_KEY = 'budgetapp'

export const useLocalStorage = (state, setState) => {
  useEffect(() => {
    const storageState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (setState.length !== -1) {
      setState(storageState);
    }
  }, [setState]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);
}