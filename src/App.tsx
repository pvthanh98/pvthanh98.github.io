import Container from '@mui/material/Container';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import ProtectedRoute from './components/route/protected-route';
import { MyCV } from './pages/CV/my-cv.page';
import FinanceComponent from './pages/finance-index.page';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login';
import { ProfilePage } from './pages/profile';
import UserContainer from './pages/user/user.container';
import { UserPage } from './pages/user/user.page';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<MyCV />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/finance/*" element={<FinanceComponent />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/user/*" element={<UserContainer />} />
        </Route>

      </Routes>
    </HashRouter>
  );
}

export default App;
