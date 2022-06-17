import { createAction } from '@reduxjs/toolkit';
import { CategoryExpenseRow } from '../../interfaces/category-expense-row';

export const fetchDailyData = createAction<Array<CategoryExpenseRow>>('categoryExpense/fetchDailyData')
export const fetchMonthlyData = createAction<Array<CategoryExpenseRow>>('categoryExpense/fetchMonthlyData')
export const fetchYearlyData = createAction<Array<CategoryExpenseRow>>('categoryExpense/fetchYearlyData')