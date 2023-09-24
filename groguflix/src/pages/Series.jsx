import React from "react";
import '../css/series.css';
import ListaSeries from '../components/listSeries'


function Series() {


    return (
        <div className="Series">
            <h1 style={{
                fontFamily: 'Oswald',
                color: '#ffffff',
                fontSize: '5rem',
            }}>SERIES</h1>
            <ListaSeries url={"/videos/"} />
        </div>

    )
}
export default Series;