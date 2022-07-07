import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, {useEffect} from "react";
import {Home} from "./containers/Home";
import {Signin} from "./containers/Signin";
import {Signup} from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from 'react-redux';
import {isUserLoggedIn} from "./actions";
import { Products } from './containers/Products';
import { Orders } from './containers/Orders';
import { Category } from './containers/Category';


function App() {
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className='App'>
        <Routes>
          <Route path="/" exact element={<PrivateRoute><Home /></PrivateRoute>}></Route>
          <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>}></Route>
          <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>}></Route>
          <Route path="/category" element={<PrivateRoute><Category /></PrivateRoute>}></Route>

          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    </div>
  );
}

export default App;
