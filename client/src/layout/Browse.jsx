import React from 'react';
import { Link } from 'react-router-dom';

import CardList from "../components/CardList";
import Filter from "../components/Filter";

import { GlobalProvider } from "../GlobalContext";

function Browse() {
    return (
        <div className="App">
            <GlobalProvider>
                <Filter />
                <CardList />
            </GlobalProvider>
        </div>
    );
}

export default Browse;