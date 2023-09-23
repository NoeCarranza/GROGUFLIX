import React from "react";
import '../css/footer.css';
import '../css/otros.css';

function Otros() {

    return (
        <div>

            {/* Seccion principal */}
            <section className="Principal">
                <h1 style={{
                    fontFamily: 'Oswald',
                    color: '#000000',
                    fontSize: '5rem',
                }}>Otros</h1>
                <div style={{
                    fontFamily: 'Oswald',
                    color: '#000',
                    fontSize: '2rem',
                }}>(acá iría lo del json)</div>
            </section>
        </div>

    )
}
export default Otros;