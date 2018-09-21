import getExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should get correct expenses total', () => {
    const total = getExpensesTotal(expenses, 33);
    expect(total).toBe(114195);
});

test('should get correct total with empty expense array', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('should get correct total with one expense', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});