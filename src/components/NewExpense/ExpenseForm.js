import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [ent_title, setEnterTitle] = useState('');
    const [ent_amount, setEnterAmount] = useState('');
    const [ent_date, setEnterDate] = useState('');

    const titleChangeHandler = (event) =>{

        setEnterTitle(event.target.value);
    }
    const amountChangeHandler = (event)=>{
       
        setEnterAmount(event.target.value);
    }
    const dateChangeHandler = (event)=>{
        
        setEnterDate(event.target.value);
    }

    const SubmitHandler = (event) =>{

        event.preventDefault();
        const expendeData ={
            title: ent_title,
            amount: ent_amount,
            date: new Date(ent_date)
        }

        console.log(expendeData)
        props.onSaveExpenseData(expendeData)
    }
    return (
            <form onSubmit={SubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" placeholder="Enter the title" onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" placeholder="Enter the amount" onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2021-06-07" placeholder="Enter the Date" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        
    )
}

export default ExpenseForm
