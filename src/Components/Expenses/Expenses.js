
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {


  return (
    <ExpenseItem
      title={props.title}
      amount={props.amount}
      date={props.date}/>
  )
}

export default Expenses;