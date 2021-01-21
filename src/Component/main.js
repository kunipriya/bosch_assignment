import React from 'react';
import  LeftPanel from './leftPanel';
import  HeaderPanel from './headerPanel';
import  CenterPanel from './centerPanel';
import  '../App.css';



function Main() {
    return (
      <div className="mainsection">
          <div className="maininnersection">
                <div className="leftdivsection"><LeftPanel /></div>
                <div className="centerdivsection">
                    <div><HeaderPanel /></div>
                    <div><CenterPanel /></div> 
                </div>
          </div>
         
      </div>
    );
 
}

export default Main;
