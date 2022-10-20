import React from 'react';
import map from '../assets/map.png'
import pin from '../assets/pin.png'
import pin2 from '../assets/pin.png'
import pin3 from '../assets/pin.png' 
import '../css/Map.css';

const Map = () => {
    return (<>
    <div className='mapouter'>
        <div className='mapinner'>
        <div className='mapdiv'>
            <h1>OUR PRESENCE</h1>
            <div className='mapimg' style={{ backgroundImage: `url(${map})` }}>

                <div  >
                    <img className='map ml-32' src={pin} alt="" />
                    <img className='map mx-31 ' src={pin2} alt="" />
                    <img className='map mx-3' src={pin3} alt="" />  
                </div>
        </div>
        </div>
    </div>
       </div>
        </>);
};

export default Map;