import React from 'react';
import './services_page.css';
import servicesData from "../Services.components/services.data";

const ServicesPage = () => {
    return (
        <>
            <div className="services-container">
                <div className="services-overlay">
                    <div className="services-content">
                        <h4>
                            Services
                        </h4>
                    </div>
                </div>
            </div>
            <div className="card-container">
                {
                    servicesData.map(service => {
                        return (
                            <>
                                <div className="card-service">
                                    <div className="card-service-img">
                                        <img src={service.icon} alt={service.title}/>
                                    </div>
                                    <div className="card-service-content">
                                        <div className="card-service-title">
                                            <h3>
                                                {service.title}
                                            </h3>
                                        </div>
                                        <p>
                                            {service.description}
                                        </p>
                                        <button className="book-btn" type="submit">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>

        </>
    );
};

export default ServicesPage;