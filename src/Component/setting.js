import React from 'react';
import  '../App.css';
import  LeftPanel from './leftPanel';
import  HeaderPanel from './headerPanel';

function Setting() {
    return (
        <div className="mainsection">
          <div className="maininnersection">
                <div className="leftdivsection"><LeftPanel /></div>
                <div className="centerdivsection">
                    <div><HeaderPanel /></div>
                    <div className="settingData">No data</div> 
                </div>
          </div>
         
      </div>
    );
 
}

export default Setting;
