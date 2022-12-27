import React from 'react'

function FotoGaleri() {
    const fotos = [
        {
            image: "./image/foto-1.png",
        },
        {
            image: "./image/foto-2.png",
        },
        {
            image: "./image/foto-3.png",
        },
        {
            image: "./image/foto-4.png",
        },
        {
            image: "./image/foto-5.png",
        },
        {
            image: "./image/foto-6.png",
        },
        {
            image: "./image/foto-7.png",
        },
        {
            image: "./image/foto-8.png",
        },
        {
            image: "./image/foto-9.png",
        },
        {
            image: "./image/foto-10.png",
        },
        {
            image: "./image/foto-11.png",
        },
        {
            image: "./image/foto-12.png",
        },

    ]

    return (
        <>
            <div className="artikel-beranda">
                <div className="container-fluid container-sm container-md">
                    <h1>Dokumentasi Sekolah</h1>
                    <div className="row">
                        {
                            fotos.map((foto, index) => {
                                return (
                                    <div className="col col-12 col-sm-6 col-md-4" key={index}>
                                        <div className="card">
                                            <img src={foto.image} className="card-img-top" alt="image" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FotoGaleri