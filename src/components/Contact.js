import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
const storeImg = require.context('../img', true);

function Contacto() {
    return ( 
        <div className="contacto">
            <section className="noticias">
                <h1>Descubrenos</h1>
                <div className="contMedia">
                    <div className="contSvg one">
                        <img src={storeImg(`./imgHome.svg`)} alt='we'/>
                    </div>

                    <div className="contSvg two">
                        <img src={storeImg(`./img03.svg`)} alt='we02'/>
                    </div>
                </div>
            </section>
            <h3>Redes Sociales</h3>
            <section className="redes">
                <div className="contRedes">
                    <AiFillInstagram/>
                    <p>@misionriqueza</p>
                </div>
                <div className="contRedes">
                    <AiFillFacebook/>
                    <p>@misionriqueza</p>
                </div>
                <div className="contRedes">
                    <p>Correo: </p>
                    <p>info@misionriqueza.com</p>
                </div>
            </section>
        </div>
     );
}

export default Contacto;