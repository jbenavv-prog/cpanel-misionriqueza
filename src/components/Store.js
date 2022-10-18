
const storeImg = require.context('../img', true);
function Store({name, desc, price}) {
    return ( 
        <div className="contStore">
            <div className="contImgs">
           
            </div>
            <div className="contDes">
                <b>{name}</b>
                <p>{desc}</p>
                <p>{price}</p>
            </div>
        </div>
     );
}

export default Store;