import React from 'react'
import Ellipse from '../assets/design/Ellipse.svg'
import Polygon from '../assets/design/Polygon.svg'
import Rectangle from '../assets/design/Rectangle.svg'
import Star from '../assets/design/Star.svg'

export default function Design() {
  return (
    <div className='design-top' style={{ width: '1.4rem', height: '1.4rem' }} >
        <img src={Star} alt="d1" />
        <img src={Ellipse} alt="d1" />
        <img src={Rectangle} alt="d1" />
        <img src={Polygon} alt="d1" />
    </div>
  )
}
