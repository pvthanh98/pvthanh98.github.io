import { createReducer } from '@reduxjs/toolkit'
import { CategoryExpenseRow } from '../../interfaces/category-expense-row';
import { 
    fetchDailyData,
    fetchMonthlyData,
    fetchYearlyData
} from '../actions/category-expense.action';

const initialState = {
    monthly: [] as Array<CategoryExpenseRow>,
    daily: [] as Array<CategoryExpenseRow>,
    yearly: [] as Array<CategoryExpenseRow>
}


const categoryExpenseReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchDailyData, (state, action) => {
            state.daily = action.payload
        })
        .addCase(fetchMonthlyData, (state, action) => {
            state.monthly = action.payload
        })
        .addCase(fetchYearlyData, (state, action) => {
            state.yearly = action.payload
        })
});

export default categoryExpenseReducer;