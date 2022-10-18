
//import { NavLink } from "react-router-dom";
function NavBar({changeHome, changeContact, changeProductos, auteh, cerrarSesion, changeNews}) {
    return ( 
        <div className="navBar">
            <div className="title">
                <div className="contTitle">
                    <h3>MR</h3>
                    <p>Para el mundo</p>
                </div>
            </div>
            <div className="btns">
                <div className="contBtn">
                    <button className="btn" onClick={changeNews}>Noticias.</button>
                </div>
                <div className="contBtn">
                    <button className="btn" onClick={changeHome}>Nosotros</button>
                </div>
                <div className="contBtn">
                    <button className="btn" onClick={changeProductos}>Productos</button>
                </div>
                <div className="contBtn">
                    <button className="btn" onClick={changeContact}>Contacto</button>
                </div>
                <div className="contBtn l">
                    {/*auteh?
                        <NavLink className="btnL" to="/login">
                            Iniciar Session
                        </NavLink>:
                        <button className="btnL" onClick={cerrarSesion}>
                            Cerrar Session
                        </button>*/
                    }
                </div>
            </div>
        </div>
     );
}

export default NavBar;