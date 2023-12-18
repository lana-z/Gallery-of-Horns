import React from 'react';
import styles from './gallery.module.css';
import HornedBeasts from '../HornedBeasts/HornedBeasts.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery(props){
    console.log(props.list);
    return (
        <>
        <Container>
        <Row>
            {props.list.map((beasts, index)=> {
                    <Col key={beasts._id}>
                    <HornedBeasts 
                    title={beasts.title}
                    imageUrl={beasts.image_url}
                    description={beasts.description}
                    keyword={beasts.keyword}
                    horns={beasts.horns}
                    />
                    </Col>
                }
                )
            }
           </Row>
    </Container>
    </>
    )
}

export default Gallery;
