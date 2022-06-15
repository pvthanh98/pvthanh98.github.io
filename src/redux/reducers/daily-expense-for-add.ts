import { createReducer } from '@reduxjs/toolkit'
import { DailyExpenseRow } from '../../interfaces/daily-expense-row';
import { clearAddExpenseData, updateAddDataAction } from '../actions/daily-expense.action';

const initialState = {
    value: [] as Array<DailyExpenseRow>
}


const dailyAddExpenseReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateAddDataAction, (state, action) => {
            state.value.push(action.payload)
        })
        .addCase(clearAddExpenseData, (state, action) => {
            state.value = [];
        })
});

export default dailyAddExpenseReducer;