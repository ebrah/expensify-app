
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