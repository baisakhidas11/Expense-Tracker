import React,{ useState } from 'react';
import ExpenseDate from './ExpenseDate.js'; 
//r ekhaneo...
   import Card from './Card.js';
import './ExpenseItem.css';

function ExpenseItem(props){

    const [title, setTitle] =useState(props.title);
console.log('ExpenseItem evaluated by react');
  const clickHandler=() =>{
     // console.log('clicked!!!!');

setTitle('Updated!');

    
     console.log(title);
  };

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
</div>
<button onClick={clickHandler}>Change Title</button>
        </Card>
        </li>
        
    );
}

export default ExpenseItem;
