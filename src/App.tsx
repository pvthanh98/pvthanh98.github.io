import Container from '@mui/material/Container';
import { useEffect } from 'react';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import ProtectedRoute from './components/route/protected-route';
import { MyCV } from './pages/CV/my-cv.page';
import FinanceComponent from './pages/finance-index.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login';

function App() {
  return (
    <HashRouter>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<MyCV />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/finance/*" element={<FinanceComponent />} />
          </Route>
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
