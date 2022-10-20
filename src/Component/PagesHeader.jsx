import React from 'react'
import '../css/PagesNew.css'

const PagesHeader = (p) => {
  return (<>
  <div className='pagesouter' style={{ backgroundImage: `url(${ p.det.url})`}}>
    <div className='pagesinner'> 
        <div className='pagesHeaderBody'>
                          <h2>{p.det.top}</h2>
                            <h1>{p.det.title}</h1> 
                            <hr />
        </div>
    </div>
    </div> 
    
  </>)
}

export default PagesHeader