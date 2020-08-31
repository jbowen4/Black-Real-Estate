import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext, GlobalDispatchContext } from "../GlobalContext";
import { Link } from 'react-router-dom';

function Filter(props) {
    const types = ['all', 'realtor', 'loan-manager', 'lawyer', 'inspector', 'title-company'];

    const filterDetails = useContext(GlobalContext);
    const setFilterDetails = useContext(GlobalDispatchContext);

    function setType(type) {
        setFilterDetails({ ...filterDetails, type: type })
    }

    return (
        <Fragment>
            <div className="head">
                <Link to="/"><img className="logo" src="https://img.icons8.com/pastel-glyph/64/000000/home.png" /></Link>
                <div className="filterbox">
                    <div className="dropdown">
                        <button onClick="myFunction()" className="type-button" type="button" name="button">{filterDetails.type}</button>
                        <div id="myDropdown" className="dropdown-content">
                            {types.map(type => (
                                <a onClick={() => setType(type)}>{type}</a>
                            ))}
                        </div>
                    </div>
                    <div className="searchbox">
                        <input className="search" type="search" value={filterDetails.searchText} onChange={(e) => setFilterDetails({ ...filterDetails, searchText: e.target.value })} placeholder="Search location" />
                        <button className="search-button" type="button" name="button"></button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Filter;

