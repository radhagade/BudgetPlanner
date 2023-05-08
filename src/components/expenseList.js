import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './context/appContext';
import ExpenseItem from './expenseItem';

const ExpenseList = ({ expenses }) => {
   const { expenses } = useContext(AppContext);

    return (
        <ul className='list-group'>
            {expenses && expenses.map((expense) => (
                <ExpenseItem id={expense.id} desc={expense.desc} cost={expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList