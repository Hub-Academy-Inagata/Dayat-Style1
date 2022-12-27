import React from 'react'
import { Link } from 'react-router-dom'

function PostArtikel() {

    const posts = [
        {
            image: './image/artikel-1.png',
            title: 'Teknik Belajar Tepat Agar Anak Tak Mudah Bosan',
            text: 'Menggunakan teknik belajar yang tepat sangatlkah penting agar anak bisa menyerap materi dengan baik namun tetap . . .'
        },
        {
            image: './image/artikel-2.png',
            title: 'Metode Tanya Jawab Untuk Evaluasi Materi Di Sekolah',
            text: 'Untuk mengetahui seberapa paham anak tentang materi yang diberikan, guru biasa mengadakan sesi tanya jawab agar . . .'
        },
        {
            image: './image/artikel-3.png',
            title: 'Berlibur Bersama Agar Anak Tidak Jenuh ',
            text: 'Anak tentunya akanjenuh jika terus menerus belajar, mereka juga perlu berlibur sejenak apalagi bersama dengan teman . . .'
        },
        {
            image: './image/artikel-4.png',
            title: 'Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah',
            text: 'Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .'
        },
        {
            image: './image/artikel-5.png',
            title: 'Permainan Yang Bagus Untuk Perkembangan Anak',
            text: 'Selain belajar, anak-anak tentunya perlu untuk bermain, namun permainan apasaja kah yang dapat membantu perkembangan . . .'
        },
        {
            image: './image/artikel-6.png',
            title: 'Di Sekolah Belajar, Di Rumah pun Apakah Harus Belajar?',
            text: 'Jika anak merasa dirinya sudah cukup hanya dengan belajar disekolah, kita sebagai orang tua harus bisa memberi . . .'
        },
        {
            image: './image/artikel-7.png',
            title: 'Tetap Menjaga Kesehatan Anak Selama Di Sekolah',
            text: 'Virus dan bakteri tentu ada dimana saja, oleh sebab itu kita perlu memperhatikan kesehatan anak agar tidak mudah tertular . . .'
        },
        {
            image: './image/artikel-8.png',
            title: 'Mewarnai Membantu Meningkatkan Kreativitas Anak?',
            text: 'Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa  . . .'
        },
        {
            image: './image/artikel-9.png',
            title: 'Perlukah Belajar Menggambar Dan Mewarnai Di Sekolah?',
            text: 'Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa . . .'
        },

    ]

    return (
        <>
            <div className="post-artikel">
                <div className="container-fluid container-sm container-md">
                    <div className="row">
                        <div className="col-post col-12 col-sm-12 col-md-6">
                            <img src={require('../../img/artikel-post.svg').default} className="card-img-top" alt="image" />
                        </div>
                        <div className="col-post col-12 col-sm-12 col-md-6">
                            <span className="col-post-dates"><p className='rounded-pill'>12 Desember 2021</p></span>
                            <h4>Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</h4>
                            <p>Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. . . </p>
                            <p>Penulis : Shinta A.P</p>
                            <span><Link to='/artikel/1' className='col-post-button'>Baca Selengkapnya</Link></span>

                        </div>
                    </div>
                    <div className="row">
                        {
                            posts.map((artikels, index) => {
                                return (
                                    <div className="col col-12 col-sm-6 col-md-4" key={index}>
                                        <div className="card">
                                            <img src={artikels.image} className="card-img-top" alt="image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{artikels.title}</h5>
                                                <p className="card-text">{artikels.text}</p>
                                                <span className="col-post-button"><p>Baca Selengkapnya</p></span>
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

export default PostArtikel