import { createReducer } from '@reduxjs/toolkit'
import { MonthByYearRow } from '../../interfaces/month-by-year';
import { updateMonthByYearAaction } from '../actions/month-by-year-expense.action';

const initialState = {
    value: [] as Array<MonthByYearRow>,
}


const monthByExpenseReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateMonthByYearAaction, (state, action) => {
            state.value = action.payload
        })
});

export default monthByExpenseReducer;