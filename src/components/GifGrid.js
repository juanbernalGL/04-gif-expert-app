import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";


const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs( category );

  console.log(images, loading);

  return (
    <>
    <h4 className="animate__animated animate__fadeIn">{category}</h4>
    { loading && <p className="animate__animated animate__flash">Cargando...</p> } 
    <div className="card-grid">
        {images.map(img  => {
          return (
            <GifGridItem  
            { ...img } 
            key={img.id}/>            
          );
        })}
      
    </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
