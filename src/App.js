import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Home/Footer/Footer';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';
import CheckOut from './components/CheckOut/CheckOut';
import Blogs from './components/Blogs/Blogs';
import AboutMe from './components/AboutMe/AboutMe';
import Login from './LoginPage/Login/Login';
import Register from './LoginPage/Register/Register';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
