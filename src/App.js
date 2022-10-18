
import Home from './components/Home';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import Contact from './components/Contact';
import Icons from './components/Icons';
import Productos from './components/Productos';
import Cookies from 'universal-cookie';
import News from './components/News';


function App() {
    const cookies = new Cookies();
    const [auteh, setAuteh] = useState(false);
    var [page, setPage] = useState(3);
    function changeHome() {
        setPage(0)
    }
    function changeContact() {
        setPage(1)
    }
    function changeProductos() {
        setPage(2)
    }
    function changeNews() {
      setPage(3)
    }
    function cerrarSesion() {
        cookies.remove('id', {path:"/login"});
        cookies.remove('user', {path:"/login"});
        window.location.href="./";
    }
    
  return (
    <div className="App">
      <div className='contStik'>
        <div className='infoLeft'>
          <div className='imgInfo'> 
            
          </div>
        </div>
        <div className='infoRight'>
          <a href="www.google.com">Unirme a Meet</a>
        </div>
      </div>
      <div className='header'>
        <NavBar changeContact={changeContact} changeHome={changeHome} changeProductos={changeProductos} auteh={auteh} cerrarSesion={cerrarSesion} changeNews={changeNews}/>
      </div>
      <div className='body'>
        {page===0?<Home/>:<></>}
        {page===1?<Contact/>:<></>}
        {page===2?<Productos/>:<></>}
        {page===3?<News/>:<></>}
      </div>
      <div className='footer'>
        <Icons/>
        <div className='text'>
        <p>Copyright Todos los derechos reservados. 2022 10 Octubre</p>
        </div>
      </div>
    </div>
  );
}

export default App;
