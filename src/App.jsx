
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import MyUrls from './Pages/MyUrls';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/myUrls" element={<MyUrls />}></Route>
      </Routes>
    </>
  )
}

export default App
