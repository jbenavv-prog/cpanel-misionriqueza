
import {useForm } from'react-hook-form';
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink } from "react-router-dom";
import media from '../img/video.mp4';
import axios from 'axios';
import Cookies from 'universal-cookie';
function Login() {
    const cookies = new Cookies();
    const {register, handleSubmit} = useForm();
    const [model, setModel] = useState(0);
    let url = 'http://localhost:3004/users';
    async function conexionDb(db) {
        await axios.get(url, {params:{user: db.user, password: db.password}})
        .then(response =>{
            return response.data;
        })
        .then(response=>{
            if (response.length===1) {
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path:'/login'});
                cookies.set('user', respuesta.user, {path:'/login'});
                alert(`Bienvenido  ${respuesta.user}`)
                window.location.href="./";
            }else{
                alert('El usuario o la contraseña no son correctos')
            }
        })
        .catch(error =>{console.log(error)})
    }
    function next() {
        setModel(1)
    }
    function back() {
        if(model===0){
            window.location.href="./";
        }else{
            setModel(0)
            window.location.href="./login";
        }
        
    }
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return ( 
        <div className="login">
            <div className='contImg'>
            <video loop  muted autoPlay>
                <source src={media} type="video/mp4"/>
            </video>
            </div>
            <div className="form">
                <div className='header'>
                    <h1>Mision Riqueza</h1>
                    <p>Para el Mundo</p>
                </div>
                <form onSubmit={handleSubmit(conexionDb)} className="contForms">
                    <div className='contForm'>
                        {model===0?<div className='contInputs'>
                            <p>Usuario</p>
                            <input type="text" {...register('user',{required:true})} />
                        </div>:<></>}
                        {model===1?<div className='contInputs'>
                            <p>Contraseña</p>
                            <input type="password" {...register('password',{required:true})} />
                            <div className='reCaptha'>  
                                <ReCAPTCHA
                                    sitekey="6LcMXHciAAAAAMWpmVMizLLL7V1CzFrtVseWsRvI"
                                    onChange={onChange}
                                />
                            </div>
                        </div>:<></>}
                    </div>
                    <div className='contBtn'>
                        <button className='btn v' onClick={back}>Volver</button>
                        {model===1?<button className='btn i' type='submit'>Iniciar Session</button>:
                            <button className='btn s' onClick={next}>Siguiente</button>
                        }
                        
                    </div>
                </form>
                <NavLink className="btnR" to="/register">
                        Registrate
                </NavLink>
            </div>
        </div>
     );
}

export default Login;