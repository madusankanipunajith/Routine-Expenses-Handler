import React,{ useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Papers',
    amount: 94.12,
    date: new Date(2020,7,14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 30.59,
    date: new Date(2020,8,14)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 130.12,
    date: new Date(2020,12,14)
  }
]

function App() {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    })
      
  }

  return (

    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
