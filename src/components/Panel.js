import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
const storeImg = require.context('../img', true);
function Panel() {
    return ( 
        <>
            <div className="contLeft">
                <AiFillCaretLeft className="icon"/>
            </div>
            <div className="contImg">
                <img src={storeImg(`./b3.png`)} alt=""/>
            </div>
            <div className="contRigth">
                <AiFillCaretRight className="icon"/>
            </div>
        </>
     );
}

export default Panel;