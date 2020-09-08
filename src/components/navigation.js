import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';


export default function Navigation() {

  return (
    <div className="topnav" id="myTopnav">
      <ul>
          <li><a href="#home" className="active">Qui sommes nous ?</a></li>
          <li><a href="#news">Nos expertises</a></li>
          <li><a href="#contact">Nos partenariats</a></li>
          <li><a href="#contact">Efisens Clic&Shop</a></li>
          <li><a href="#contact">Efisens Lab</a></li>
          <li><a href="#contact">Carrières</a></li>
          <li><a href="#contact">Nous contacter</a></li>
      </ul>
    </div>
  );
}