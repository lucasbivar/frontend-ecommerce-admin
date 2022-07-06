import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
import {Home} from "./containers/Home";
import {Signin} from "./containers/Signin";
import {Signup} from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<PrivateRoute><Home /></PrivateRoute>}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
