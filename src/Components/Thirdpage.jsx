import React from 'react'
import { Link } from 'react-router-dom'

export default function Thirdpage() {
  return (
    <section className='snap' id='thirdpage'>
        <div className='page-text'>
            <section className='top-section'>
                <h1>Model S</h1>
                <h3>From $71,090*</h3>
                <p>After Federal Tax Credit & Est. Gas Savings</p>
            </section>
            <section className='bottom-section'>
                <section className='button-section'>
                    <Link to='/' className='big-buttons order-button'>Order Now</Link>
                    <Link to='/' className='big-buttons demo-button'>Demo Drive</Link>
                </section>
                <p>*Price before incentives and savings is $74,990, excluding taxes and fees. Subject to change.</p>
                <Link>Learn about est. gas savings.</Link>
            </section>
        </div>  
    </section>
  )
}
