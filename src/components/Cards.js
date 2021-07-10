import React from 'react';
import img from '../images/room1.jpg'
import {Link } from 'react-router-dom';

function Cards() {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">10,000</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Booknow"><a href="#" class="btn btn-primary">Book Now</a></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">12,000</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Booknow"><a href="#" class="btn btn-primary">Book Now</a></Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">14,000</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Booknow"><a href="#" class="btn btn-primary">Book Now</a></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card" style={{ width: "18rem" }}>
                            <img src={img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">16,000</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Booknow"><a href="#" class="btn btn-primary">Book Now</a></Link>
                            </div>
                        </div>
                    </div>


                    
                </div>
            </div>
            


        </div>
    )
}

export default Cards
