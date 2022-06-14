import Container from '@mui/material/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { MyCV } from './pages/CV/my-cv.page';
import FinanceComponent from './pages/finance-index.page';
import { HomePage } from './pages/home/home.page';

function App() {
  return (
    <Router basename="/">
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<MyCV />} />
          <Route path="/finance/*" element={<FinanceComponent />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
