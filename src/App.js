import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Income from './components/income';
import Balance from './components/balance';
import Expenditure from './components/expenditure';
import ExpenseList from './components/expenseList';
import AddExpenseForm from './components/addExpenseForm';
import { AppProvider } from './components/context/appContext';

const App = () => {


  const [expenses, setExpenses] = useState(null);
  useEffect(() => {
     fetch('http://localhost:2002/expenditure')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setExpenses(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);


  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Income />
          </div>
          <div className='col-sm'>
            <Expenditure />
          </div>
          <div className='col-sm'>
            <Balance />
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList/>
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>

  );
};

export default App;
