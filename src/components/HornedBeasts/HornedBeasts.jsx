import React, { useState } from 'react';
// import styles from 'hornedbeasts.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeasts(props) {
    let [favorited, setFavorited]=useState(0);
    
    function handleClick() {
        setFavorited(favorited +1);
    }

    return (
        <>
            <Card style={{ width: '20rem', margin: '10px'}}>
                <Card.Img variant="top" src={props.imageUrl} alt= {props.keyword}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.description}
                    </Card.Text>
                    <Button onClick={handleClick} variant="primary">Favorite {favorited}</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default HornedBeasts;