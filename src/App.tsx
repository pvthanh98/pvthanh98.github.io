import {
  Routes,
  Route,
  // HashRouter,
  BrowserRouter
} from "react-router-dom";
import ProtectedRoute from './components/route/protected-route';
import { publicRoutes, privateRoutes } from './routes/route.routes';

function App() {
  const renderPublicRoutes = () => {
    return publicRoutes.map(route => {
      const LayoutContainer = route.layout;
      const Component = route.component
      const Element = (
        <LayoutContainer>
           <Component {...route.componentProps} />
        </LayoutContainer>
      )
      return <Route key={route.path} path={route.path} element={Element} />
    })
  }

  const renderPrivateRoutes = () => {
    const PrivateRouteComponents  = privateRoutes.map(route => {
      const LayoutContainer = route.layout;
      const Component = route.component
      const Element = (
        <LayoutContainer>
           <Component {...route.componentProps}/>
        </LayoutContainer>
      )
      return <Route key={route.path} path={route.path} element={Element} />
    })
    return (
      <Route element={<ProtectedRoute />}>
        {PrivateRouteComponents}
      </Route>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        {renderPublicRoutes()}
        {renderPrivateRoutes()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
