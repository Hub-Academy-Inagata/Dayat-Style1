import React from 'react'

function KeunggulanBeranda() {
    return (
        <>
            <section className="keunggulan-beranda">
                <div className="container-fluid container-md">
                    <h1>Keunggulan Sekolah Kami</h1>
                    <div className="row justify-content-center">
                        <div className="keunggulan-col col-sm-6 col-md-6 col-lg-4">
                            <div className="icon">
                                <img src={require('../../img/book.svg').default} alt='' />
                            </div>
                            <h4>Kurikulum Terbaru</h4>
                            <p>Menerapkan kurikulum terbaru agar siswa mendapat materi terbaru </p>
                        </div>
                        <div className="keunggulan-col col-sm-6 col-md-6 col-lg-4">
                            <div className="icon">
                                <img src={require('../../img/clock.svg').default} alt='' />
                            </div>
                            <h4>Efektifitas Waktu Belajar</h4>
                            <p>Waktu belajar yang dirancang agar para siswa tidak jenuh </p>
                        </div>
                        <div className="keunggulan-col col-sm-6 col-md-6 col-lg-4">
                            <div className="icon">
                                <img src={require('../../img/pen-tool.svg').default} alt='' />
                            </div>
                            <h4>Penyaluran Bakat dan Minat</h4>
                            <p>Berbagai macam kegitan akademik maupun non akademik  </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default KeunggulanBeranda