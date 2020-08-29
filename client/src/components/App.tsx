import React from 'react';
import Map from './Map';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar data-testid="navbar-component" />
      <Map />
    </>
  );
}

export default App;
