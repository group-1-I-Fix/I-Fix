import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import './hero.css';

const images = [
    {
        image1:'assets/1.jpg',
        alt:'image1'
    },
    {
        image2:'assets/2.jpg',
        alt:'image2'
    },
    {
        image3:'assets/3.jpg',
        alt:'image3'
    }
]

const options = {
    // items: 1,
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
};

function Hero() {
    //options for slider owl

    return (
        <>
            <div className="title-section text-center mb-5 title">
                <h2 className="">Our Services</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            options={options}
                        >

                                    <div className="item" >
                                        <img src={'assets/1.jpg'} alt={images.alt} />
                                    </div>
                            <div className="item" >
                                <img src={'assets/2.jpg'} alt={images.alt} />
                            </div>  <div className="item" >
                            <img src={'assets/3.jpg'} alt={images.alt} />
                        </div>


                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;