import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import GifGridItem from './GifGridItem';
// import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
//   const [images, setImages] = useState([]);
//   useEffect(() => {
//     getGifs( category )
//     .then( imgs => setImages( imgs )  );
//   }, [ category ]);

  const { data, loading } = useFetchGifs();

  console.log(data, loading);

  return (
    <>
    <h4>{category}</h4>
    { loading ? 'Cargando...' : 'Data Loaded'}
    {/* <div className="card-grid">
        {images.map(img  => {
          return (
            <GifGridItem  
            { ...img } 
            key={img.id}/>            
          );
        })}
      
    </div> */}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
