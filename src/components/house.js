import React from 'react'
import '../css/house.css'
import {BackArrow} from './BackArrow';
<link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet"></link>


const house = () => {
  return (
    <section className='love-bg'>
        <svg viewBox="0 0 1320 300">
            <text className='love' x="50%" y="50%" dy=".35em" text-anchor="middle">
                je t'aime épouse moi
            </text>
        </svg>
        <BackArrow />
    </section>
  )
}

export default house