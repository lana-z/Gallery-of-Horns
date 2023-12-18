import React, {useState} from 'react';
// import styles from './App.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import beasts from './beasts.json';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
    return(
      <>
        <Header title="Gallery of Horns" />
        <Gallery list={beasts}/>
        <Footer content="&copy; Lana Z 2023"/>
      </>
    );
}

export default App;