import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
// const useAuth = () => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (!accessToken) return false;
//     return true;
// }

const ProtectedRoute = () => {
    const isAuth = useSelector((state:RootState)=>state.isAuth);
    // const isAuth = useAuth();
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isAuth.value ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;