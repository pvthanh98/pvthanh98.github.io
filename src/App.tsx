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
import { MyCV } from './pages/CV/my-cv.page';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<MyCV />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
