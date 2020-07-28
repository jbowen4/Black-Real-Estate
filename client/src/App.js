import React from 'react';
import CardList from "./components/CardList";
import Filter from "./components/Filter";
import { GlobalProvider } from "./GlobalContext";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Filter />
        <CardList />
      </GlobalProvider>
    </div>
  );
}

export default App;
