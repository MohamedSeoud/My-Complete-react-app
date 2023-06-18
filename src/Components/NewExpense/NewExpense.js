import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const newExpenseSumbmitted=(event)=>{
        props.newExpenseSumbmitted(event)
    }

  return (
    <div className='new-expense'>
      <ExpenseForm ExpenseSubmitted={newExpenseSumbmitted}/>
    </div>
  );
};

export default NewExpense;