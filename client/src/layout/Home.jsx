import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Fragment>
            <div className="billboard"></div>
            <div className="container">
                <h1 className="title">Welcome to the Black Real Estate Community</h1>
                <Link to="/browse" className="container-btn">Get started</Link>
            </div>
            <div>
                <p>Are you a real estate professional?</p>
                <Link to="/form" className="container-btn">Sign Up here</Link>
            </div>
        </Fragment>
    );
}

export default Home;