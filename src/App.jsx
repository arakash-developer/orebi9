import React from 'react'
// React router dom........................
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayOut from './RootLayOut';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignUp from './pages/SignUp';
import ProductInside from './pages/ProductInside';
import About from './pages/About';
import Contacts from './pages/Contacts';
import LogIn from './pages/LogIn';
import MyAccount from './pages/MyAccount';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// Routing setup.............................
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayOut />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/my/account' element={<MyAccount />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/sign/up' element={<SignUp />} />
      <Route path='/product/details' element={<ProductInside />} />
      <Route path='/about' element={<About />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path="*" element={<Error />}></Route>
    </Route>
  )
);
// Routing setup.............................



const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App