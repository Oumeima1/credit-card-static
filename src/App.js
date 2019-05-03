import React from 'react';
import logo1 from './logo1.png';
import logo2 from './logo2.png';
import './App.css';

function App() {
  return (
    <div className="credit-card">
       <div className="credit-card__name">CREDIT CARD</div>
       <div className="credit-card__logo1"> <img src={logo1} className="credit-card__logo1"/></div>
       <div className="credit-card__number">4355 8052 9789 2516</div>
       <div className="credit-card__info"> 
        <div className="credit-card__info_left">
          <div className="credit-card__info_numero">1255</div>
          <div className="credit-card__info_label">Oumeima RACHDI</div>
          <div className="credit-card__info_valid-date">
             <div> VALID DATE</div>
             <div> (MONTH/YEAR): </div>
             <div>11/50</div>
         </div>
         </div>
        <div className='credit-card__info_logo1'><img src={logo2} className="credit-card__info_logo" /></div>
       </div>
</div>
  );
}

export default App;
