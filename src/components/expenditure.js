import React, { useContext } from 'react';
import { AppContext } from './context/appContext';

const Expenditure = () => {
    const { expenses } = useContext(AppContext);
    
    const totalExpenses = expenses && expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

    return (
        <div className='alert alert-primary'>
            <span>Expenses: Rs {totalExpenses}</span>
        </div>
    )
} 
export default Expenditure;