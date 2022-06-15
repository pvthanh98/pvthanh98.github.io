import { createReducer } from '@reduxjs/toolkit'
import { DailyExpenseRow } from '../../interfaces/daily-expense-row';
import { updateDataAction } from '../actions/daily-expense.action';

const initialState = {
    value: [] as Array<DailyExpenseRow>
}


const dailyExpenseReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateDataAction, (state, action) => {
            state.value = action.payload
        })
});

export default dailyExpenseReducer;