import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from './context/appContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
        
	};

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.desc}
			<div>
				<span className="badge-primary badge-pill mr-3">
					Rs {props.cost}
				</span>
				<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
			</div>
		</li>
	);
};

export default ExpenseItem;