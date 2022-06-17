import { createAction } from '@reduxjs/toolkit';
import { OverviewRow } from '../../interfaces/overview-row';

export const fetchUsageData = createAction<Array<OverviewRow>>('overviewExpense/fetchUsageData')
export const fetchIncomeData = createAction<Array<OverviewRow>>('overviewExpense/fetchIncomeData')
export const fetchRemainingData = createAction<Array<OverviewRow>>('overviewExpense/fetchRemainingData')