import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();
export const GlobalDispatchContext = createContext();

export const GlobalProvider = ({ children }) => {    // props.children destructured
    const [filterDetails, setFilterDetails] = useState({
        searchText: '',
        type: 'all'
    })

    return (
        <GlobalContext.Provider value={filterDetails}>
            <GlobalDispatchContext.Provider value={setFilterDetails}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalContext.Provider>
    );
};