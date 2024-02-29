import React from 'react'

//image
import Visa from '../assets/visa.svg'
import { useName } from '../hooks/useName'

export default function Card() {
  const { name } = useName()

  return (
    <div className='basecard'>
      <div className="card">
        <div className='top-card'>
          <label>S</label>
          <img src={Visa} alt="visa-icon" />
        </div>
        <div className="bot-card">
          <p>085-085</p>
          <div className='credentials'>
          <p>{name}</p>
          <p>09/29</p>
          </div>
        </div>        
      </div>
      
    </div>
  )
}
