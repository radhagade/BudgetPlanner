import React, { useContext, useState } from 'react';
import { AppContext } from './context/appContext';

const Income = () => {
	const { income, dispatch} = useContext(AppContext);

	const onChangeIncome = (event) => {
        event.preventDefault();

		dispatch({
			type: 'MODIFY_INCOME',
			payload: parseInt(event.target.value),
		});
    };

	return (
		<div className='alert alert-secondary'>
			<span>Income: Rs </span>
			<input
				required='required'
				type='number'
				className='form-control-sm'
				id='editBudget'
				value={income}
				onChange={(event) => onChangeIncome(event)}				
			></input>
		</div>
	);
};

export default Income;