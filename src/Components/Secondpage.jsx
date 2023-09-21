import React from 'react'
import { Link } from 'react-router-dom'

export default function Secondpage() {
  return (
    <section className='snap' id='secondpage'>
            <div className='page-text'>
                <section className='top-section'>
                    <h1>Model Y</h1>
                    <h3>From $39,390*</h3>
                    <p>After Federal Tax Credit & Est. Gas Savings</p>
                </section>
                <section className='bottom-section'>
                    <section className='button-section'>
                        <Link to='/' className='big-buttons order-button'>Order Now</Link>
                        <Link to='/' className='big-buttons demo-button'>Demo Drive</Link>
                    </section>
                    <p>*Price before incentives and savings is $50,490, excluding taxes and fees. Subject to change.</p>
                    <Link>Learn about est. gas savings.</Link>
                </section>
            </div>  
    </section>
  )
}
