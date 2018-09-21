import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expensesTotal';
import getVisibleExpenses from '../selectors/expenses';


export class ExpensesSummary extends React.Component {

	render() {
		return (
            <div>
            <p>
                Viewing {this.props.expenseCount} {this.props.expenseCount === 1 ? 'expense' : 'expenses'} totaling {numeral(this.props.expensesTotal).format('$0,0.00')}
            </p>
			</div>
		);
	}
}


const mapStateToProps = (state) => ({ 
    expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
    expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
});


export default connect(mapStateToProps)(ExpensesSummary);
