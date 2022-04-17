import React, {useState} from 'react';
import Expenses from './components/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';


//import ExpenseItem from './components/ExpenseItem.js';
 // ekhne .js chilo na

 import logo from './logo.svg';
import './App.css';
const DUMMY_EXPENSES= [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App=() =>{
const[expenses, setExpenses]=useState(DUMMY_EXPENSES);

const addExpenseHandler= expense=> {
 setExpenses(prevExpenses => { 
return[expense, ...prevExpenses];
 });
};


  /*return React.createElement('div',
  {},
  React.createElement('h2',{},"Lets Get Started"),
  React.createElement(Expenses, { items:expenses })
  );*/

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />   //ai code a prob hyc atai white screen hyc
       <h2>Lets Get Started</h2>
       <Expenses Item={expenses}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

  return(
<div>
 <NewExpense onAddExpense={addExpenseHandler}/>
  <Expenses items={expenses}/>
</div>
  );
}

export default App;
