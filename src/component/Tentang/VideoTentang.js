import React from 'react'
import ReactPlayer from 'react-player'

function VideoTentang() {
    return (
        <>
            <div className="video-tentang">
                <div className="container-fluid container container-sm container-md">
                    <h1>Video Profil</h1>
                    <p>Berikut adalah video profil dari sekolah kami</p>
                    <div className="video-wrapper">
                        <ReactPlayer className='video-player' url='https://www.youtube.com/watch?v=AUPnG-VidS8' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoTentang