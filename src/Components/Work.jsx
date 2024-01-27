import React from 'react'
import WorkCard from './WorkCard';
import WorkData from './WorkData';
import"./WorkCard.css";
const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'></h1>
      <div className='project-container'>
        {WorkData.map((val, ind) =>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                source={val.source}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work