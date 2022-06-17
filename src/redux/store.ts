import { configureStore } from '@reduxjs/toolkit'
import dailyExpenseReducer from './reducers/daily-expense.reducer';
import dailyExpenseAddData from './reducers/daily-expense-for-add';
import authReducer from './reducers/auth.reducer';
import overviewExpenseReducer from './reducers/overview-expense.reducer';
import categoryExpenseReducer from './reducers/category-expense.reducer';
import monthlyLimitReducer from './reducers/limit-expense.reducer';
import monthByExpenseReducer from './reducers/month-by-year.reducer';
const store = configureStore({
  reducer: {
    dailyExpense: dailyExpenseReducer,
    dailyExpenseAddData: dailyExpenseAddData,
    isAuth: authReducer,
    overviewExpense: overviewExpenseReducer,
    categoryExpense: categoryExpenseReducer,
    monthlyLimitReducer: monthlyLimitReducer,
    monthByYear: monthByExpenseReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export {
  store
}