import { createAction } from '@reduxjs/toolkit';
import { MonthByYearRow } from '../../interfaces/month-by-year';

export const updateMonthByYearAaction = createAction<Array<MonthByYearRow>>('monthByYear/fetchData')
