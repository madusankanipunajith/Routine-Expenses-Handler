import React,{useState} from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

  const [filter_year, setFilterYear] = useState('2020');

  const filterChangeHandler = (selected_year) =>{
    setFilterYear(selected_year);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filter_year;
  })

  
  return (
    <Card className="expenses">

      <ExpensesFilter selected={filter_year} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      
    </Card>
  );
}

export default Expenses;
