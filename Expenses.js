import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem.js';
import Card from './Card.js';
import './Expenses.css';
import ExpensesFilter from './NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';

const Expenses=(props) =>{
  const[filteredYear, setFilteredYear]=useState('2020');

const filterChangeHandler = selectedYear => {
 setFilteredYear(selectedYear);
};

const filteredExpenses =props.items.filter(expense =>{
  return expense.date.getFullYear().toString()===filteredYear;
});

//let expensesContent =<p>No expenses found.</p>;
/*if(filteredExpenses.length > 0){
  expensesContent= filteredExpenses.map((expense) => (
    <ExpenseItem
    key={expense.id}
     title={expense.title}
      amount={expense.amount} 
      date={expense.date}
      />
      ));
}*/

 return(

<div>
<Card className="expenses">
  <ExpensesFilter 
  selected={filteredYear}
   onChangeFilter={filterChangeHandler}
   />
  
   <ExpensesChart expenses= {filteredExpenses} />
  <ExpensesList items={filteredExpenses}/>
    </Card>
 </div>
    );
}
export default Expenses;
