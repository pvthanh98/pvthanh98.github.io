import { createReducer } from '@reduxjs/toolkit'
import { OverviewRow } from '../../interfaces/overview-row';
import { 
    fetchIncomeData,
    fetchRemainingData,
    fetchUsageData
} from '../actions/overview-expense.action';

const initialState = {
    usage: [] as Array<OverviewRow>,
    income: [] as Array<OverviewRow>,
    remaining: [] as Array<OverviewRow>
}


const overviewExpenseReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchIncomeData, (state, action) => {
            state.income = action.payload
        })
        .addCase(fetchRemainingData, (state, action) => {
            state.remaining = action.payload
        })
        .addCase(fetchUsageData, (state, action) => {
            state.usage = action.payload
        })
});

export default overviewExpenseReducer;