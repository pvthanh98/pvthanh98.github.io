import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { OverviewPage } from './pages/overview.page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ExpenseByCategoryPage } from './pages/expense-by-category';
import { MonthlyLimitationPage } from './pages/monthly-limitation';
import styles from './App.module.css'
import { YearMonthlyPage } from './pages/monthly-year.page';
import { DailyExpensePage } from './pages/daily-expense.page';

function App() {
  return (
    <Router>
      <Container>
        <Grid item xs={12} md={12}>
          <ul className={styles.nav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/expense-daily">Daily</Link>
            </li>
            <li>
              <Link to="/expense-by-category">Category</Link>
            </li>
            <li>
              <Link to="/monthly-limitation">Limit</Link>
            </li>
            <li>
              <Link to="/expense-by-month">Year</Link>
            </li>
            <li>
              <Link to="/income">Income</Link>
            </li>
          </ul>
        </Grid>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/expense-by-category" element={<ExpenseByCategoryPage />} />
          <Route path="/monthly-limitation" element={<MonthlyLimitationPage />} />
          <Route path="/expense-by-month" element={<YearMonthlyPage />} />
          <Route path="/expense-daily" element={<DailyExpensePage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
