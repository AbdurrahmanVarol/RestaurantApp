import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { DefaultContextProvider } from './contexts/DefaultContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import AuthLayout from './layouts/AuthLayout';
import DefaultLayout from './layouts/DefaultLayout';
import Admin from './pages/Admin';
import CreateProduct from './pages/CreateProduct';
import Cart from './pages/Cart';
import OrderDetail from './pages/OrderDetail';
import Page404 from './pages/Page404';
import Page401 from './pages/Page401';
import Page500 from './pages/Page500';
import AdminLayout from './layouts/AdminLayout';

function App() {
  return (
    <div>
      <DefaultContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route index path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Route>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />}></Route>
              <Route element={<AdminLayout />}>
                <Route Route path='/admin' element={<Admin />}></Route>
                <Route path='/createProduct' element={<CreateProduct />}></Route>
              </Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/orderDetails' element={<OrderDetail />}></Route>
              <Route path='/page401' element={<Page401 />}></Route>
              <Route path='/page404' element={<Page404 />}></Route>
              <Route path='/page500' element={<Page500 />}></Route>
              <Route path='*' element={<Page404 />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </DefaultContextProvider>
    </div>
  );
}

export default App;
