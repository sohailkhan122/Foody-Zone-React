import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
       <div><img src="../Images/pexels-rajesh-tp-1624487.jpg" alt="food"  width={'133px'} height={'133px'}/></div>
      <div className='description'>
        <span>{props.name}</span>
        <p>{props.description}</p>
        <button>{props.price}</button>
      </div>
    </div>
  )
}

export default Card
