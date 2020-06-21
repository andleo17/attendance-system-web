import React from 'react';
import '../style/App.css';
import '../style/bootstrap.css'
import Header from './Header';
import NavLateral from './NavLateral';
import Footer from './Footer';
import Employeed from './Employeed';
import LicenseType from './LicenseType'

function App() {
  return (
    <div  >
      
      {/* <Header /> */}
      <LicenseType />
      <NavLateral />
      <Footer />
    </div>
  );
}


export default App;


// <div >
//       </div>
