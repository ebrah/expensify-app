import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm  from './ExpenseForm';
import {editExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends React.Component{

  onSubmit = (expense) => {
   this.props.editExpense({id: this.props.expense.id}, expense);
   this.props.history.push('/');
  }

  onRemove = () => {
    this.props.removeExpense({id : this.props.expense.id});
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
         <h1> Edit Expense Page. </h1>  
         <ExpenseForm
          expense = {this.props.expense}
          onSubmit = {this.onSubmit}
         />
  
         <button onClick={this.onRemove}>remove</button>
  
     </div>
    );
  }
}
// const EditExpense = (props) => {
//     // console.log(props);

// }

const mapStateToProps = (state, props) => ({
  expenses: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
   editExpense : (id, expense) => dispatch(editExpense(id, expense)),
   removeExpense : (data) => dispatch(removeExpense(data))
});

 export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);