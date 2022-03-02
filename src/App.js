import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import Signup from "./Pages/Signup";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const App = () =>  {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
