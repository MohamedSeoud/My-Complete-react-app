import { useState } from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import ExpensesFilter from './Components/Expenses/ExpenseFilter';
import Card from './Components/Card/Card';
import ExpensesChart from './Components/Expenses/ExpenseChart';



const initialExpenses = [
  { id: 'e1',title: 'Toilet Paper',amount: 94.12,date: new Date(2020, 7, 14),},
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3',title: 'Car Insurance',amount: 294.67,date: new Date(2021, 2, 28),},
  { id: 'e4',title: 'New Desk (Wooden)',amount: 450,date: new Date(2021, 5, 12),},
];

function App(props) {
    const [expenses,setExpenses]= useState(initialExpenses);


  const onNewExpenseSumbmitted = (event)=> {
    setExpenses((previousExpense)=>{return[event,...previousExpense]})
  }

  
  const [filteredYear, setFilteredYear] = useState('2020');


  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

   let filteredExpenses =expenses.filter((x)=>{
    return(x.date.getFullYear().toString() === filteredYear.toString());});

   const filteredPreview = filteredExpenses.map((item) => {
    return(
    <Expenses
    key={item.id}
    title={item.title}
    amount={item.amount}
    date={item.date}/>
   )})
  


  return (
    <div className="App">
      <NewExpense newExpenseSumbmitted={onNewExpenseSumbmitted}/>

      <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length>0 ? <ExpensesChart expenses={filteredExpenses}/>: null}
      {filteredPreview.length===0 ? 
      <div className='__control'><h2 className='label'>Oops No Expense This Year.</h2></div>
      :filteredPreview}

      </Card>
    </div>
  );
}

export default App;
