import React from "react";
import '../css/footer.css';
import '../css/otros.css';
import ListaOtros from "../components/listOtros";



function Otros() {

    return (
        <div className="Otros">
            <h1 style={{
                fontFamily: 'Oswald',
                color: '#ffffff',
                fontSize: '5rem',
                paddingBottom: '20px',
                margin:'0'
            }}>OTROS VIDEOS</h1>
            <ListaOtros url={"/videos/"} />
        </div>

    )
}
export default Otros;