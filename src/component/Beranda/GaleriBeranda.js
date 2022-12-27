import React from 'react'
import { Link } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa'

function GaleriBeranda() {
    return (
        <>
            <div className="galeri-beranda">
                <div className="container-fluid container-md">
                    <h1>Galeri</h1>
                    <div className="dokumentasi">
                        <p>Dokumentasi Sekolah</p>
                        <span><Link className='all-link' to='/galeri'>Lihat Semua <FaGreaterThan /></Link></span>
                    </div>
                    <div className="row">
                        <div className="col col-6 col-sm-6 col-md-3">
                            <img src={require('../../img/galeri-1.svg').default} alt='geleri1' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-3">
                            <img src={require('../../img/galeri-2.svg').default} alt='geleri2' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-3">
                            <img src={require('../../img/galeri-3.svg').default} alt='geleri3' />
                        </div>
                        <div className="col col-6 col-sm-6 col-md-3">
                            <img src={require('../../img/galeri-4.svg').default} alt='geleri4' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GaleriBeranda