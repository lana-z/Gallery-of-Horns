import {useState} from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import beasts from './beasts.json';
import 'bootstrap/dist/css/bootstrap.min.css';

import './src/app.css';


function App(){

    const [selected, setSelected] = useState(null);
    const [filter, setFilter] = useState('all');

    console.log(beasts);


    const handleFilter = (event) => {
      const value = event.target.value;
      setFilter(value === "All" ? "all" : value);
    };


    return(
   
      <>

        <Header title="~ Gallery of Horns ~" />
          <div className="filter-container">
          <h2>Welcome.</h2> 
          <br></br>
          <h3>Browse the beasts and pick your faves.</h3>
          <br></br>
              <label className="filter-label" htmlFor="horn-filter">Filter by Horns:</label>
              <select id="horn-filter" value={filter} onChange={handleFilter}>
                  <option value="All">All</option>
                  <option value="1">One Horn</option>
                  <option value="2">Two Horns</option>
                  <option value="3">Three Horns</option>
              </select>
          </div>

        <Gallery 
          list={beasts}
          filter={filter}
          setSelected={setSelected}
        />

        {selected && (
            <Modal
                onHide={() => setSelected(null)}
                show={!!selected}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-center w-100" id="contained-modal-title-vcenter">
                        {selected?.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center text-center">
                    <img src={selected?.image_url} alt={selected?.keyword} />
                    <p>{selected?.description}</p>
                    <h5>Horns: {selected?.horns}</h5>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button className="horn" onClick={() => setSelected(null)}>Close</Button> */}
                    
                </Modal.Footer>
            </Modal>
        )}
        <Footer content="&copy; Lana Z 2023"/>
      </>
    );
}

export default App;