import React, { useState } from 'react';

function Register() {
    const [int, setInt] = useState(0);
    function nextP() {
        if (int===0) {
            setInt(1)
        }
        if (int===1) {
            setInt(2)
        }
    }
    function back() {
            
        if (int===0) {
            window.location.href="./login";
        }
        if (int===1) {
            setInt(0)
        }
        if (int===2) {
            setInt(1)
        }
    }
    return ( 
        <div className="register">
            <div className="contForm">
                <form className="form">
                    <div className="header">
                        <h3>Registrate Gratis</h3>
                    </div>
                    <div className="contBody">
                        {
                            int===0?<div className="contInput">
                            <label>Nombre</label>
                            <input type="text"/>
                            <label>Apellido</label>
                            <input type="text"/>
                            </div>:<></>
                        }
                        {
                            int===1?<div className="contInput">
                            <label>Correo</label>
                            <input type="email"/>
                            <label>Repetir Correo</label>
                            <input type="email"/>
                            </div>:<></>
                        }
                        {
                            int===2?<div className="contInput">
                            <label>Numero de Telefono</label>
                            <input type="number"/>
                            <label>Numero de Documento</label>
                            <input type="number"/>
                            <label>Select</label>
                            </div>:<></>
                        }
                    </div>
                    <div className="footer">
                        <input type="button" onClick={back} value="Volver"></input>
                        <input type="button" onClick={nextP} value="Siguiente"></input>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Register;