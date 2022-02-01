import { useState } from "react";

import Expenses from "./components/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 50.4,
    date: new Date(2020, 5, 11),
  },

  {
    id: "e2",
    title: "Electricity Bills",
    amount: 500.4,
    date: new Date(2019, 7, 20),
  },
  {
    id: "e3",
    title: "Food",
    amount: 124.4,
    date: new Date(2021, 4, 11),
  },
  {
    id: "e4",
    title: "Clothes",
    amount: 345.4,
    date: new Date(2020, 1, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return[expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      
    </div>
  );
};

export default App;
