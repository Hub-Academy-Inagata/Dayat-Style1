import React from 'react'
import { Link } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa'

function GuruTentang() {
    return (
        <>
            <div className="guru-tentang">
                <div className="container-fluid container-sm container-md">
                    <h1>Guru & Staff</h1>
                    <div className="dokumentasi">
                        <p>Perkenalkan Anggota Sekolah Ini</p>
                        <span><Link className='all-link'>Lihat Semua <FaGreaterThan /></Link></span>
                    </div>
                    <div className="row">
                        <div className="col col-6 col-sm-6 col-md-3">
                            <img src={require('../../img/guru-1.svg').default} alt='guru1' />
                            <h5>Jeannete Ong</h5>
                            <p>Kepala Sekolah</p>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-3">
                            <img src={require('../../img/guru-2.svg').default} alt='guru2' />
                            <h5>John Smith</h5>
                            <p>Kepala Staff</p>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-3">
                            <img src={require('../../img/guru-3.svg').default} alt='guru3' />
                            <h5>Lidya M.P</h5>
                            <p>Guru Matematika</p>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-3">
                            <img src={require('../../img/guru-4.svg').default} alt='guru4' />
                            <h5>William</h5>
                            <p>Guru Fisika</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuruTentang