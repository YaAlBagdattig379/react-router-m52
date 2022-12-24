import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import {Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/friends' element={<Friends/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      {/* <Home></Home>
      <Friends></Friends>
      <About></About> */}
    </div>
  );
}

export default App;
