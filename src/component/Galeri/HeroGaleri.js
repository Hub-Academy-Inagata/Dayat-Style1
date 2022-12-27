import React from 'react'

function HeroGaleri() {
    return (
        <>
            <section className='hero-tentang'>
                <div className='galeri-container container-fluid container-md'>
                    <h1>Galeri</h1>
                    <img src={require('../../img/hero-galeri.svg').default} alt='' />
                </div>
            </section>
        </>
    )
}

export default HeroGaleri