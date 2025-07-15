import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import User from './components/User';
import Counter from './components/Counter';
import TodoApp from './pages/TodoApp';
import State from './pages/State';
import Footer from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Sale from './components/Sale';
import ProductPage from './pages/ProductPage';
import ProductDetail from './pages/Productdetails';
import Login from './pages/Login';
import SocialPost from './pages/Post';




function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/todo" element={<TodoApp/>} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<SocialPost />} />

        </Routes>
     
     {/* <TodoApp /> */}
     {/* <State /> */}
     {/* <About /> */}
     {/* <Counter /> */}
     {/* <User/> */}
     {/* <Footer /> */}
    </div>
  );
}

export default App;
