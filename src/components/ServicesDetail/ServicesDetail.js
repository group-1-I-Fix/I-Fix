// import React from "react";
// import './services_detail.css'
//
//
//
// const ServicesDetail = () =>
// {
//     return (
//     <>
//     {/*    <div id="booking" className="section">*/}
//     {/*        <div className="section-center">*/}
//     {/*            <div className="container">*/}
//     {/*                <div className="row">*/}
//     {/*                    <div className="col-md-5">*/}
//     {/*                        <div className="booking-cta">*/}
//     {/*                            <h1>Make your reservation for {service.title}</h1>*/}
//     {/*                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam*/}
//     {/*                                numquam at</p>*/}
//     {/*                        </div>*/}
//     {/*                    </div>*/}
//     {/*                    <div className="col-md-6 col-md-offset-1">*/}
//     {/*                        <div className="booking-form">*/}
//     {/*                            <form onSubmit={handleSubmit}>*/}
//     {/*                                <div className="row">*/}
//     {/*                                    <div className="col-md-6">*/}
//     {/*                                        <div className="form-group">*/}
//     {/*                                            <label className="form-label">Name</label>*/}
//     {/*                                            <input className="form-control"*/}
//     {/*                                                   type="text"*/}
//     {/*                                                   placeholder="Enter your name"*/}
//     {/*                                                   value={loggedUserNow.firstName + " " + loggedUserNow.lastName}*/}
//     {/*                                                   readOnly*/}
//     {/*                                            />*/}
//     {/*                                        </div>*/}
//     {/*                                    </div>*/}
//     {/*                                    <div className="col-md-6">*/}
//     {/*                                        <div className="form-group">*/}
//     {/*                                            <label className="form-label">Email</label>*/}
//     {/*                                            <input className="form-control"*/}
//     {/*                                                   type="email"*/}
//     {/*                                                   placeholder="Enter your email"*/}
//     {/*                                                   value={loggedUserNow.email} readOnly*/}
//     {/*                                            />*/}
//     {/*                                        </div>*/}
//     {/*                                    </div>*/}
//     {/*                                </div>*/}
//     {/*                                <div className="row">*/}
//     {/*                                    <div className="col-md-6">*/}
//     {/*                                        <div className="form-group">*/}
//     {/*                                            <label className="form-label">Date of Service</label>*/}
//     {/*                                            <input className="form-control"*/}
//     {/*                                                   value={reservation.date}*/}
//     {/*                                                   onChange={handleChange}*/}
//     {/*                                                   type="date" required*/}
//     {/*                                                   min="2021-12-27"/>*/}
//     {/*                                        </div>*/}
//     {/*                                    </div>*/}
//     {/*                                    <div className="col-md-3 col-sm-6">*/}
//     {/*                                        <div className="form-group">*/}
//     {/*                                            <label className="form-label">Start Time</label>*/}
//     {/*                                            <input*/}
//     {/*                                                value={reservation.startTime}*/}
//     {/*                                                onChange={handleChange}*/}
//     {/*                                                className="form-control"*/}
//     {/*                                                name="startTime"*/}
//     {/*                                                type="time"*/}
//     {/*                                                min="09:00"*/}
//     {/*                                                max="18:00"*/}
//     {/*                                                required*/}
//     {/*                                            />*/}
//     {/*                                        </div>*/}
//     {/*                                    </div>*/}
//     {/*                                    <div className="col-md-3 col-sm-6">*/}
//     {/*                                        <div className="form-group">*/}
//     {/*                                            <label className="form-label">End Time</label>*/}
//     {/*                                            <input*/}
//     {/*                                                className="form-control"*/}
//     {/*                                                name="finishTime"*/}
//     {/*                                                type="time"*/}
//     {/*                                                min="09:00"*/}
//     {/*                                                max="18:00"*/}
//     {/*                                                required*/}
//     {/*                                                value={reservation.finishTime}*/}
//     {/*                                                onChange={handleChange}*/}
//     {/*                                            />*/}
//     {/*                                        </div>*/}
//     {/*                                    </div>*/}
//     {/*                                </div>*/}
//     {/*                                <div className="row">*/}
//     {/*                                    <div className="col-md-6">*/}
//     {/*                                        <div className="form-group">*/}
//     {/*                                            <label className="form-label">Phone</label>*/}
//     {/*                                            <input className="form-control" type="tel"*/}
//     {/*                                                   required placeholder={'Enter phone number'}*/}
//     {/*                                                   value={reservation.mobile}*/}
//     {/*                                                   onChange={handleChange}*/}
//     {/*                                                   min="10"/>*/}
//     {/*                                        </div>*/}
//     {/*                                    </div>*/}
//     {/*                                    <div className="col-md-6">*/}
//     {/*                                        <div className="form-group">*/}
//     {/*                                            <label className="form-label">Total</label>*/}
//     {/*                                            <span className="form-control">{reservation.startTime && reservation.finishTime*/}
//     {/*                                                ? (*/}
//     {/*                                                    ((Number(newFTime) - Number(newSTime)) / 100) **/}
//     {/*                                                    service.price*/}
//     {/*                                                ).toFixed(2)*/}
//     {/*                                                : 0}</span>*/}
//     {/*                                        </div>*/}
//     {/*                                    </div>*/}
//     {/*                                </div>*/}
//     {/*                                <div className="form-btn">*/}
//     {/*                                    <button className="submit-btn">Book Now</button>*/}
//     {/*                                </div>*/}
//     {/*                            </form>*/}
//     {/*                        </div>*/}
//     {/*                    </div>*/}
//     {/*                </div>*/}
//     {/*            </div>*/}
//     {/*        </div>*/}
//     {/*    </div>*/}
//     {/*</>*/}
//     );
// }
//
// export default ServicesDetail;
//
