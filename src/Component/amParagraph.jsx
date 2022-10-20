import React from 'react'
import amparagraphdetails from '../Pages/Data'
import '../css/amparagraph.css'

const Amparagraph = () => {
  return (<>
    {amparagraphdetails.map((props)=>{
            return(<>
                <div className='ampara' >
                    <div className='amparaindex'> 
                    <span>{props.index}</span>
                    
                    </div>
                    <div className='amparadetails'>
                       <h1>{props.title}</h1>
                       <p>{props.p1}</p>
                       <p>{props.p2}</p>
                    </div>
                </div>
            </>)
    })}
  </> )
}

export default Amparagraph