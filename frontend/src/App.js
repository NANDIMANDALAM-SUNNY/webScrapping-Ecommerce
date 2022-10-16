import React,{useState,createContext} from 'react'
import logo from './logo.svg';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Upload from './components/Uploads/Upload';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import NavbarComponent from './components/Navbar//NavbarComponent';


export const store = createContext();



function App() {
  const [token,setToken] = useState(localStorage.getItem('jwt-token'));
  const [products,setProducts] = useState({});
  const [search,setSearch] = useState("");
	const [sort, setSort] = useState({ sort: "rating", order: "desc" });
	const [page, setPage] = useState(1);

  return (
   <>
    <store.Provider value={{token,setToken,products,setProducts,search,setSearch,sort, setSort,page, setPage}} >
        <Router>
        <NavbarComponent />
          <Routes>
              <Route exact path='/' element={<Home />  } />
              <Route exact path='/register' element={<Register /> } />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/forgot-password' element={<ForgotPassword /> } />
              <Route exact path='/resetpassword/:token' element={<ResetPassword /> } />
              {/* resetpassword */}
              <Route exact path='/upload' element={<Upload />} />
              <Route exact path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
    </store.Provider>
   </>
  );
}

export default App;
