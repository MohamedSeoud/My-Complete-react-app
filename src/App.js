import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App(props) {
  let newExpense='';
  const onNewExpenseSumbmitted = (event)=> {
    newExpense = event 
    console.log(newExpense);
  }





  return (
    <div className="App">
      <NewExpense
      newExpenseSumbmitted={onNewExpenseSumbmitted}></NewExpense>
      <Expenses newExpense={newExpense}>
      </Expenses>
    </div>
  );
}

export default App;
