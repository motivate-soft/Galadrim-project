import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';



export default function Navigation() {

  return (
    <div class="topnav" id="myTopnav">
      <a href="#home" class="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <div class="dropdown">
        <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <Link href="#">Link 1</Link>
          <Link href="#">Link 2</Link>
          <Link href="#">Link 3</Link>
        </div>
      </div>
      <Link href="#about">About</Link>
    </div>
  );
}