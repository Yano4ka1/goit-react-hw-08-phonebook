import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { authSelectors } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ToastContainer } from 'react-toastify';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing  = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


    return isRefreshing ?  (
      'Fetching user data...'
    ) : (
     <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home /> } />
            <Route path="/register" element={
              <RestrictedRoute redirectTo="/contacts" component={<Register />} />}
            />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}/>
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}/>
        </Route>
      </Routes>
      
      <ToastContainer
      autoClose={3000}
      theme="colored"
      position="bottom-right"
      />
      </>
    );
}

export default App;