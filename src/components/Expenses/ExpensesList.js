import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

function ExpensesList(props) {

    let expensesContent = <p className="call_back">Expense is not found...</p>

    if(props.items.length>0){

        expensesContent = props.items.map(expense => (<ExpenseItem  
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />))
    
  }
    return (
        <>
          {expensesContent}  
        </>
    )
}

export default ExpensesList
