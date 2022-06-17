import { createReducer } from '@reduxjs/toolkit'
import { MonthlyLimitationRow } from '../../interfaces/monthly-limitation-row';
import { fetchMonthlyLimitData } from '../actions/monthly-limitation-expense.action';

const initialState = {
    value: [] as Array<MonthlyLimitationRow>
}


const monthlyLimitReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchMonthlyLimitData, (state, action) => {
            state.value = action.payload
        })
});

export default monthlyLimitReducer;