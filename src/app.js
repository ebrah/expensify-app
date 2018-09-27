
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore  from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import Rout from './components/Route';
import {addExpense } from './actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
// import {edit}


const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({description: 'Gas bill', createdAt:1000 }));
store.dispatch(addExpense({description: 'Rent', amount:109500 }));

// store.dispatch(editExpense());

// store.dispatch(setTextFilter('bill'));

// setTimeout(() => { 
//    store.dispatch(setTextFilter('bill'));
// }, 3000);

console.log(store.getState());

const Jsx = () => (
    <Provider store={store}>
       <Rout/>
    </Provider>
);

ReactDOM.render(<Jsx/>, document.getElementById('container'));