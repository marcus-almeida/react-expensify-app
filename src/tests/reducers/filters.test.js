import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy amount', () => {
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducers(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducers(undefined, {
        type: 'SET_TEXT_FILTER',
        text: 'filter value'
    });
    expect(state.text).toBe('filter value');
});

test('should set start date filter', () => {
    const date = moment();
    const action = {
        type: 'SET_START_DATE',
        date
    };
    const state = filtersReducers(undefined, action);

    expect(state.startDate).toEqual(date);
});

test('should set end date filter', () => {
    const date = moment();
    const action = {
        type: 'SET_END_DATE',
        date
    };
    const state = filtersReducers(undefined, action);

    expect(state.endDate).toEqual(date);
});

