import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

function Footer() {
    return <footer className="footer clearfix">
    <div>
        <div className="footerText">
            <div>Made with </div>
            <FontAwesomeIcon className="giveMeSapce" icon={faCoffee} />   
            <div>in Austin</div> 
            <div className="giveMeSapce"> &copy;2020</div>
        </div>
    </div>
</footer>
  }
  
  export default Footer;