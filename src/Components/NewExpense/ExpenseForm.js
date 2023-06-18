import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredData, setEnteredData] = useState({
    enteredData:{title:'', amount:'', date:''}
  })
  

  const titleChangeHandler = (event) => {
    setEnteredData((previousState)=>{
      return{...previousState,title:event.target.value}
    });};

  const amountChangeHandler = (event) => {
    setEnteredData((previosData)=>{
        return{
            ...previosData,amount:event.target.value
        }})};

  const dateChangeHandler = (event) => {
    setEnteredData((previosData)=>{
        return{
            ...previosData,date:event.target.value
        }});};
  const onSubmitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
        id : Math.random(),
        title : enteredData.title,
        amount : enteredData.amount,
        date : enteredData.date
    }
    props.ExpenseSubmitted(expenseData);
    setEnteredData(
        {title:'',amount:'',date:''}
    )

}

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={enteredData.title}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredData.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={enteredData.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;