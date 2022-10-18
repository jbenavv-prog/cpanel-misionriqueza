import Card from "./Card";
import Somos from "./Somos";


function Home() {
    return ( 
        <div className="home">
            <div className="contWelcome">
                <div className="text">
                    <h1>MISIÓN RIQUEZA</h1>
                    <p>Ser capaz de superar la seguridad no te convierte en un hacker, de la misma forma que hacer un puente y un coche no te convierte en un ingeniero mecanico. Si tu empresa gasta más en café que en ciberseguridad serás hackeado, es más mereces ser hackeado</p>
                </div>
                
                <div className="img">
                    
                </div>
            </div>
            <div className="contInfo">
                <div className="cards">
                    <Card name="cuantico"/>
                    <Card name="blockchain"/>
                    <Card name="bigdata"/>
                </div>
                <div className="line">
                    <h2>Mision Riqueza</h2>
                    <p>Te brinda la mejor calidad en servicios y en la informacion, accede a operar en el mundo de una manera más clara, obten resultados más rapidos y tambien efectivos.</p>
                </div>
            </div>
            <div className="visMis">
                    <div className="cardM">
                        <b>Misión</b>
                        <p>Mision Riqueza tiene como mision contribuir al progreso de la sociedad, creando soluciones integrales, desarrollando proyectos que generen inversion con un sentido social y empresarial, utilizando los mejores recursos humanos con la invencion de nuevas tecnologias como lo son el sistema Cuantico, Big Data, y Blockchain.</p> 
                    </div>
                    <div className="cardM">
                        <b>Visión</b>
                        <p>Vision Riqueza Ser para el 2025 un grupo empresarial lider en Colombia y consolidarnos a nivel global como el principal grupo empresarial que apoya la sostenibilidad eficaz del medio ambiente, creando proyectos con impactos positivos para la sociedad con bases tecnologicas.</p>
                    </div>
            </div>
            <div className="contSomos">
                <Somos/>
            </div>
        </div>
     );
}

export default Home;