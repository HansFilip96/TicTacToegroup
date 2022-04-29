import React, { useEffect } from 'react';
import './GridIndividual.css';

function Gridindividual({ coordinates, setBoxToValue, BoxSelections }) {
    function handleClick() {
        setBoxToValue(coordinates);
        console.log(BoxSelections);
    }
    return (
        <div>
            <button id='GridIndividual__Button' onClick={handleClick}>
                {BoxSelections[coordinates] == 'X' ? (
                    <img src='/assets/icon-x.svg' alt='' />
                ) : BoxSelections[coordinates] == 'O' ? (
                    <img src='/assets/icon-o.svg' alt='' />
                ) : null}
            </button>
        </div>
    );
}

export default Gridindividual;
