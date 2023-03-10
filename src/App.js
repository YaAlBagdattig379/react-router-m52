import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import {Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Posts from './Components/Posts/Posts';
import PostDetail from './Components/PostDetail/PostDetail';
import Countries from './Components/Countries/Countries';
import CountriDetail from './Components/CountriDetail/CountriDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/friends' element={<Friends/>}></Route>
         <Route path='/friend/:friendId'element={<FriendDetail></FriendDetail>}></Route>
         <Route path='/posts' element={<Posts></Posts>}>
           <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
         </Route>
         <Route path='/countries' element={<Countries></Countries>}></Route>
         <Route path='/country/:countriName' element={<CountriDetail></CountriDetail>}></Route>
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
