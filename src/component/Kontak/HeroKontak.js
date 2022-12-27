import React from 'react'

function HeroKontak() {
    return (
        <>
            <section className='hero-tentang'>
                <div className='kontak-container container-fluid container-md'>
                    <h1>Hubungi Kami</h1>
                    <img src={require('../../img/hero-kontak.svg').default} alt='' />
                </div>
            </section>
        </>
    )
}

export default HeroKontak