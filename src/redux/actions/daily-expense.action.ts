import { createAction } from '@reduxjs/toolkit'
import { DailyExpenseRow } from '../../interfaces/daily-expense-row'

export const updateDataAction = createAction<Array<DailyExpenseRow>>('dailyExpense/updateData')
export const updateAddDataAction = createAction<DailyExpenseRow>('dailyExpense/updateAddData')
export const clearAddExpenseData = createAction('dailyExpense/clearAddExpenseData')