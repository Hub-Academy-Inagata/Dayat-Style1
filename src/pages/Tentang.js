import React from 'react'
import KeunggulanBeranda from '../component/Beranda/KeunggulanBeranda'
import GuruTentang from '../component/Tentang/GuruTentang'
import HeroTentang from '../component/Tentang/HeroTentang'
import ProfilTentang from '../component/Tentang/ProfilTentang'
import VideoTentang from '../component/Tentang/VideoTentang'


function Tentang() {
    return (

        <div>
            <HeroTentang />
            <ProfilTentang />
            <VideoTentang />
            <KeunggulanBeranda />
            <GuruTentang />
        </div>

    )
}

export default Tentang