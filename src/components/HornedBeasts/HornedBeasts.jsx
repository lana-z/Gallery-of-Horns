import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HornedBeasts({beast, setSelected}) {
    const [favorited, setFavorited]=useState(0);
    const {image_url, title, description } = beast;
    
    function handleClick() {
        setFavorited(favorited +1);
    }

    function handleSelect(){
        setSelected(beast);
    }

    return (
        <>
            <Card className="card" style={{ width: '20rem', margin: '10px'}} >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} alt= {title}/>
                    <Card.Text>{description}</Card.Text>
                    <Button onClick={handleSelect} variant="secondary">Inspect this Beast 🧐</Button>
                    <Button onClick={handleClick} variant="secondary">Favorite 💖 {favorited}</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default HornedBeasts;