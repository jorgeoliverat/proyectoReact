import React from 'react'

import "../Footer/Footer.css"

export const Footer = () => {
    return (
    <footer className='generalFooter'>
    <div className='container-fluid'>
        <div className='row p-4 bg-light text-dark'>
            <div className='col'>
                <p className='h6'>© 2022 Jorge Olivera</p>
            </div>
            <div className='col text-center'>
                <p className='h6'></p>
            </div>
            <div className='col text-center'>
                <p className='h5'>Kuna Store</p>
            </div>
        </div>
    </div>
    </footer>
    )
}
