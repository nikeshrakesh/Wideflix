import React from 'react'
import "./simmer.scss"

const Simmereffect = () => {



  return (<>
    {Array.from({lenght:10}).map((el,i)=>{
        return <div key={i} className="listItem"></div>

    })}
{/* <div className="listItem"></div> */}
{/* <div className="listItem"></div> */}
{/* <div className="listItem"></div> */}
{/* <div className="listItem"></div> */}
{/* <div className="listItem"></div> */}
{/* <div className="listItem"></div> */}
{/* <div className="listItem"></div> */}
{/* <div className="listItem"></div> */}
  </>
   
   
   
  )
}

export default Simmereffect
