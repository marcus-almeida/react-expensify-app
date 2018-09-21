import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={94.34} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={94.34} />);
    expect(wrapper).toMatchSnapshot();
});