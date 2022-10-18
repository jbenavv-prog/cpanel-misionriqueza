import Store from "./Store";
import React, { useState } from 'react';
import dbs from '../db/services.json'
import dbp from '../db/products.json'
function Productos() {
    const [store, setStore] = useState(0);
    function change() {
        if (store===0) {
            setStore(1)
        }else{
            setStore(0)
        }
    }
    const [dataS, setDataS] = useState(dbs);
    const [dataP, setDataP] = useState(dbp);
    const [select, setSelect] = useState("");
    function selectN(name) {
        setSelect(name)
    }
    return ( 
        <div className="productos">
            <section className="store">
                <div className="contCatalogo">
                    <input type="button" value="Servicios" onClick={change} />
                    <input type="button" value="Productos" onClick={change} />
                </div>
                {store===0?
                <div className="contProduct">
                    {
                        dataS.map(data => (
                            <Store name={data.name} desc={data.desc} price={data.price}/>
                        ))
                    }
                </div>:
                <></>
                }
                {store===1?
                    <div className="contProduct">
                        {
                            dataP.map(data => (
                                <Store name={data.name} desc={data.desc} price={data.price} />
                            ))
                        }
                    </div>:
                    <></>
                }
                
            </section>
            <section className="form">
                <h2>Más Informacion del Servicio o Producto</h2>
                <p>Nombre del Producto o Servicio</p>
                <b>{select}</b>
            </section>
        </div>
     );
}

export default Productos;