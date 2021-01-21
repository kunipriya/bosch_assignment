import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaFeatherAlt } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
const LeftPanel=()=>{
 return(
        <div className="leftsection">
          <div className="iconmaindiv"><Link to="/"><FaHome  size="35" color="white" /></Link></div> 
           <div className="iconmaindiv"><Link to="/setting"><FaFeatherAlt size="35" color="white" /></Link></div>
           <div className="iconmaindiv"><Link to="/privacy_policy"><FaEye size="35" color="white" /></Link></div>
           <div className="iconmaindiv"><Link to="password"><FaFileAlt size="35" color="white" /></Link></div>
       </div>
    
    )
   
} 


export default  LeftPanel;