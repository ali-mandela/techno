import React from 'react';
import OfferbodyComp from './Offerbody'
import '../css/Offer.css' 

const Offer = (e) => {
    console.log(e);
    return (<> 
    <div style={{backgroundColor:e.b,}} className='offerdivOuter'>
        <div className='offerdivInner'> 
            <div className='offerdivbody'>
                <h1>{e.title}</h1>
                <p style={{margin:"10px 0 90px 0",textAlign:"center"}}>{e.para}</p>
                <div className='offerbody'>
                <OfferbodyComp di={e.di}/> 
                </div>
                </div>
        </div>
    </div>  
    </>
    );
};

export default Offer;