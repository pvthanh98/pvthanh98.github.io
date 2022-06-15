import { configureStore } from '@reduxjs/toolkit'
import dailyExpenseReducer from './reducers/daily-expense.reducer';
const store = configureStore({
  reducer: {
    dailyExpense: dailyExpenseReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export {
    store
}