import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
// import './style/main.css'
// import './style/main.css.map'
import Navbar from './component/Navbar';
import Post from './component/Post';
import Artikel from './pages/Artikel';
import Beranda from './pages/Beranda';
import Galeri from './pages/Galeri';
import Kontak from './pages/Kontak';
import Tentang from './pages/Tentang';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/tentang-kita' element={<Tentang />} />
          <Route path='/galeri' element={<Galeri />} />
          <Route path='/artikel' element={<Artikel />} />
          <Route path='/artikel/1' element={<Post />} />
          <Route path='/kontak' element={<Kontak />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
