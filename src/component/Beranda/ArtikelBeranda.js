import React from 'react'

function ArtikelBeranda() {

    const artikelStore = [
        {
            date: "12 Desember 2022",
            title: "Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah",
            text: "Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .",
        },
        {
            date: "12 Desember 2022",
            title: "Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah",
            text: "Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .",
        },
        {
            date: "12 Desember 2022",
            title: "Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah",
            text: "Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .",
        },
    ]

    return (
        <>
            <div className="artikel-beranda">
                <div className="container-fluid container-md">
                    <h1>Artikel</h1>
                    <p>Artikel terbaru seputar pendidikan</p>
                    <div className="row">
                        {
                            artikelStore.map((artikels, index) => {
                                return (
                                    <div className="col col-12 col-sm-6 col-md-4" key={index}>
                                        <div className="card">
                                            <img src={require('../../img/artikel-1.svg').default} className="card-img-top" alt="image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{artikels.title}</h5>
                                                <p className="card-text">{artikels.text}</p>
                                            </div>
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

export default ArtikelBeranda