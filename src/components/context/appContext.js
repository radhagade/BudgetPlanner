import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'MODIFY_INCOME':
			return {
				...state,
				income: action.payload				
			};

		default:
			return state;
	}
};


const expensesList = () =>{
	//const [expenses, setExpenses] = useState([]);
	//useEffect(() => {
        //fetch("./responses/productsList.json")
        fetch("http://localhost:2002/expenditure")
            .then((res) => res.json())
            .then((response) => { //4
                 console.log(response)
				 initialState.expenses = response;                
            })
  //  }, []);
	
	  //fetch(`https://localhost:7104/Expenditure`).then(res=>res.json()).then(data=> initialState.expenses = data)
	//fetch('./expenses.json').then(res=>res.json()).then(data=> { console.log(data);initialState.expenses = data})
};
const initialState = {
	income: 10000,
	expenses: expensesList(),
	/* [
		{ id: 1, desc: 'Electricity Bill', cost: 1000 },
		{ id: 2, desc: 'Gas Bill', cost: 900 },
		{ id: 3, desc: 'Groceries', cost: 5000 },
	] ,*/
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				income: state.income,
				expenses: state.expenses,
				dispatch,
			}}
		>
			
			{props.children}
		</AppContext.Provider>
	);
};