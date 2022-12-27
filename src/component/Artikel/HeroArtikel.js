import React from 'react'

function HeroArtikel() {
    return (
        <>
            <section className='hero-tentang'>
                <div className='container-fluid container-md'>
                    <img src={require('../../img/hero-artikel.svg').default} alt='' />
                </div>
            </section>
        </>
    )
}

export default HeroArtikel