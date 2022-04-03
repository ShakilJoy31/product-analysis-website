import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard'; 
import Blogs from './components/Blogs/Blogs'; 
import About from './components/About/About';
import Review from './components/ReviewAll/Review';
import NotFoundComponent from './components/NotFoundComponent/NotFoundComponent';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/review' element={<Review></Review>}></Route>

        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/about' element={<About></About>}></Route>

        <Route path='*' element={<NotFoundComponent></NotFoundComponent>}></Route>
      </Routes>
    </div>
  );
}

export default App;
