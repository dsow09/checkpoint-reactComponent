import React from 'react';
import './App.css';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
function App() {
  return (
   <React.Fragment>
    <h2> photo de mon profile : </h2>
    <ProfilePhoto/> 
    <hr/>
    <h2>Nom Complet : </h2>
    <FullName/>
    <hr/>
    <h2>Mon adresse :</h2>
    <Address/>
   </React.Fragment>

  );
}

export default App;
