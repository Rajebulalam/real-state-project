import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from './Pages/About/About';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {

  // Used for Animation
  useEffect(() => {
    AOS.init({
      easing: 'ease',
      once: false,
    });
  }, [])

  return (
    <div className='main'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='coming' element={<About></About>}></Route>
        <Route path='contact' element={<ContactPage></ContactPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
