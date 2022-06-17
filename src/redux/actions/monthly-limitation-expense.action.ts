import { createAction } from '@reduxjs/toolkit';
import { MonthlyLimitationRow } from '../../interfaces/monthly-limitation-row';

export const fetchMonthlyLimitData = createAction<Array<MonthlyLimitationRow>>('monthlyLimitation/fetchMonthlyLimitData')
