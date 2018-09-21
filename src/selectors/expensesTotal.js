const reducer = (accumulator, currentValue) => (
    accumulator + currentValue
);

const getExpensesTotal = (expenses) => {
    const amounts = expenses.map(expense =>  expense.amount);
    return amounts.reduce(reducer, 0);
};

export default getExpensesTotal;