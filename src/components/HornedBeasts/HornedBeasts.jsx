import React from 'react';
import styles from 'hornedbeasts.module.css';

function HornedBeasts(props) {

  return (
    <>
        <div className='image-container'>
        <h2>{props.title}</h2>
        <img src={props.imageUrl} alt={props.title}/ title={props.title}>
        <p>{props.description}</p>
        </div>
    </>
  )
}

export default HornedBeasts;