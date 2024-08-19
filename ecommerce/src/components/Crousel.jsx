import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../index.css'

function Crousel() {
    const images = [
        {
            "id": "0",
            "image_url": "https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?size=626&ext=jpg&ga=GA1.1.1169818247.1716448097&semt=sph",
        },
        {
            "id": "1",
            "image_url": "https://img.freepik.com/free-photo/happy-beautiful-couple-posing-with-shopping-bags-violet_496169-2215.jpg?size=626&ext=jpg&ga=GA1.1.1169818247.1716448097&semt=sph",
        },
        {
            "id": "3",
            "image_url": "https://image.shutterstock.com/image-photo/fashion-shopping-friends-choice-clothes-260nw-2472680639.jpg",
        },
    ]
    return (
        <Carousel className='carousel' autoPlay infiniteLoop>
            {images.map(image => <img src={image.image_url} alt='pics' />)}
        </Carousel>
    )
}

export default Crousel