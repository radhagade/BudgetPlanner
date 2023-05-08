import React, { useContext, useState } from 'react';
import { AppContext } from './context/appContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
    const [desc, setDesc] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            desc: desc,
            cost: parseInt(cost),
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
        setDesc('')
        setCost('')
    };
    return (
        <form onSubmit={onSubmit}>
            <div className='row justify-content-around'>
                <div className='col-sm'>
                    <label for='desc'>Description</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='desc'
                        value={desc}
                        onChange={(event) => setDesc(event.target.value)}
                        placeholder="Enter expense description..."
                    ></input>
                </div>
                <div className='col-sm'>
                    <label for='cost'>Cost in Rs</label>
                    <input
                        required='required'
                        type='number'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                        placeholder="Enter cost..."
                    ></input>
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-4'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;