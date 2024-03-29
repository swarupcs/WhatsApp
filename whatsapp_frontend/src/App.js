import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { useSelector } from "react-redux";
function App() {
  const { user } = useSelector((state) => ({ ...state}));
  console.log(user);
  // console.log(user);

  return (
    <div className="dark">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
