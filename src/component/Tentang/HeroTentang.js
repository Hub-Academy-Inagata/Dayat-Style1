import React from 'react'

function HeroTentang() {
    return (
        <>
            <section className='hero-tentang'>
                <div className='container-fluid container-md'>
                    <img src={require('../../img/tentang.svg').default} alt='' />
                </div>
            </section>
        </>
    )
}

export default HeroTentang