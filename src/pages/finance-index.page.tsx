import { Grid } from '@mui/material';
import { OverviewPage } from '../pages/overview.page';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ExpenseByCategoryPage } from '../pages/expense-by-category';
import { MonthlyLimitationPage } from '../pages/monthly-limitation';
import styles from './finance.module.css'
import { YearMonthlyPage } from '../pages/monthly-year.page';
import { DailyExpensePage } from '../pages/daily-expense.page';
import { MyCV } from '../pages/CV/my-cv.page';
import { NavComponent } from '../components/common/nav/nav';

function FinanceComponent() {
  return (
      <Routes>
        <Route path="/" element={<OverviewPage />}  />
        <Route path="/expense-by-category" element={<ExpenseByCategoryPage />} />
        <Route path="/monthly-limitation" element={<MonthlyLimitationPage />} />
        <Route path="/expense-by-month" element={<YearMonthlyPage />} />
        <Route path="/expense-daily" element={<DailyExpensePage />} />
        {/* <Route path="/about" element={<MyCV />} /> */}
      </Routes>
  );
}

export default FinanceComponent;
