import './gallery.module.css';
import HornedBeasts from '../HornedBeasts/HornedBeasts.jsx';


function Gallery({ list, filter, setSelected }) {
    const filtered = list.filter(beast =>
      filter === 'all' || beast.horns.toString() === filter);
  
    return (
      <div className="container">
        {filtered.map(beast => (
          <HornedBeasts 
            key={beast._id}
            beast={beast}
            setSelected={setSelected}
          />
        ))}
      </div>
    );
  }

export default Gallery;
