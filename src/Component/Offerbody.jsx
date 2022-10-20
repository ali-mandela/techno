import React from 'react'
import {Link} from 'react-router-dom'
import {offerbodydata} from '../Pages/Data'
import '../css/OfferBody.css'

const OfferbodyComp = (pp) => {
        console.log(pp);
  return (<>
  {offerbodydata.map((po)=>{
        
        return(<>
                <div className={po.index===Number(pp.di)? "skropay offerbodyComp" :"offerbodyComp"}>
            <div className='offerbodyCompleft'>
                    <img src={po.url} alt={""}/>
            </div>
            <div className='offerbodyCompright'>
                    <h2>{po.title}</h2>
                    <p>{po.body}</p>
                    <span><Link to={po.link}>Know More</Link></span>
                    
            </div>
    </div>
        </>) 

  })}
    
  </>)
}

export default OfferbodyComp