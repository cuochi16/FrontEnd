import "../css/GlobalStyle.css";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Header = () => {
   return (
    <header>     
        <img src="/assets/Images/BeDating-Logo.png" alt="" className="logo" />
    </header>
    );
};

export default Header;