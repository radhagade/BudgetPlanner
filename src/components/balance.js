import React, { useContext } from 'react';
import { AppContext } from './context/appContext';

const Balance = () => {
	const { expenses, income } = useContext(AppContext);

	const totalExpenses = expenses && expenses.reduce((total, item) => {
		return (total = total + item.cost);
	}, 0);

	const alertType = totalExpenses > income ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert ${alertType}`}>
			<span>Balance: Rs {income - totalExpenses}</span>
		</div>
	);
};

export default Balance;