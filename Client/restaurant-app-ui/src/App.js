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
              <Route path='/admin' element={<Admin />}></Route>
              <Route path='/createProduct' element={<CreateProduct />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/orderDetails' element={<OrderDetail />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </DefaultContextProvider>
    </div>
  );
}

export default App;
