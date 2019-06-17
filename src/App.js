import React from 'react';
import './assets/css/main.css'
import './assets/css/slide.css'


function App() {
  let infoSystem =
  <>
    <div className='grid-2'><span className='hour'>9:51</span></div>
    <div className='grid-2'>
        <ul className='info-system'>
            <li><img src={require('./assets/images/CellularConnection.png')} alt='' /></li>
            <li><img src={require('./assets/images/Wifi.png')} alt='' /></li>
            <li><img src={require('./assets/images/Capacity.png')} alt='' /></li>
        </ul>
    </div>
  </>;

  return (
      <div className='container'>
          <div className='squeeze'>
            <div className='squeeze-content'>
                <div className='phone-info'>
                    {infoSystem}
                </div>
                <header className='header-info'>
                  <div className='grid-3'><img src={require('./assets/images/Logo_NIKE.png')} className='nike' alt='' /></div>
                  <div className='grid-3'><h3 className='bottle'>Bottle</h3></div>
                  <div className='grid-3' style={{position : 'relative'}}><span className='point-notification'><img src={require('./assets/images/point.png')} alt='' /></span><img src={require('./assets/images/Notifications.png')} alt='' className='notification' /></div>
                </header>
                <section id="slider">
                    <div className='circle'>
                        <div id="slider-wrapper">
                            <div className="slide">
                                <img src={require('./assets/images/squeeze.png')}  alt='' />
                            </div>
                            <div className="slide">
                                <img src={require('./assets/images/squeeze2.png')} alt='' />
                            </div>
                            <div className="slide">
                                <img src={require('./assets/images/squeeze3.png')} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='clear-fix'></div>
                    <div id="slider-nav">
                        <a href="#" data-slide="0"><img src={require('./assets/images/blue-circle.png')} alt='' /></a>
                        <a href="#" data-slide="1"><img src={require('./assets/images/grey-circle.png')} alt='' /></a>
                        <a href="#" data-slide="2"><img src={require('./assets/images/green-circle.png')} alt='' /></a>
                    </div>
                </section>
                <section>
                    <div className='info-value'>
                        <h3 className='info-header'>Nike Hyperfuel 709ml</h3>
                        <p className='info-price'>$24.99</p>
                        <p className='info-text'>When you're carrying the Nike Hyperful Water Bottle there will be no ..</p>
                    </div>
                    <div id='sticky' className='header-bottle' style={{display : 'none'}}>
                        {infoSystem}
                        <div className='bottle-content' >
                            <span><img src={require('./assets/images/squeeze.png')} className='img-bottle' style={{width : '16px'}} alt='' /></span>
                            <span><h3 className='info-header header-sticky'>Nike Hyperfuel 709ml</h3></span>
                            <div className='clear-fix'></div>
                        </div>
                    </div>
                    <div className='clear-fix'></div>
                </section>
            </div>
            <section id='main-info'>
                 <div className='features'>
                      <h3 className='h-pattern'>Features</h3>
                      <div className='progress-bar'>
                          <span className='g22' >Capacity</span>
                          <span className='g58' ><div id="myProgress"><div id="myBar"></div></div></span>
                          <span className='g20' > 758ml</span>
                      </div>
                      <div className='progress-bar'>
                          <span className='g22' >Durability</span>
                          <span className='g58' ><div id="myProgress"><div id="myBar2"></div></div></span>
                          <span className='g20' > 70%</span>
                      </div>
                      <div className='progress-bar'>
                          <span className='g22' >Weight</span>
                          <span className='g58' ><div id="myProgress"><div id="myBar3"></div></div></span>
                          <span className='g20' > 300g</span>
                      </div>
                 </div>
                 <div className='des-list'>
                      <div className='clear-fix'></div>
                      <h3 className='h-pattern'>Description</h3>
                      <ul className='d-list'>
                          <li><p>Leakproof Puff Valve Spout to avoid splatters and  spills</p></li>
                          <li><p>BPA Free - Smaller carbon footprint!</p></li>
                          <li><p>Translucent body to track your consumption  throughout the day</p></li>
                      </ul>
                 </div>
                 <div className='des-text'>
                      <h3 className='h-pattern'>Description</h3>
                      <p>
                          When you're carrying the Nike Hyperful Water Bottle there will be no second guessing your
                          athletic ability. Constructed with an anti-leak valve that helps to prevent spills and
                          provides easy hydration while you're on the move,
                      </p>
                 </div>
                 <div className='rating'>
                    <h3 className='h-pattern'>Rating</h3>
                    <ul className='star-list'>
                        <li><img src={require('./assets/images/star.png')} alt='' /></li>
                        <li><img src={require('./assets/images/star.png')} alt='' /></li>
                        <li><img src={require('./assets/images/star.png')} alt='' /></li>
                        <li><img src={require('./assets/images/star.png')} alt='' /></li>
                        <li>4/5</li>
                    </ul>
                 </div>
            </section>
            <div className='footer'>
                <div className='btn'>
                    <button>
                        <span className='chat'><img src={require('./assets/images/message-square.png')} alt='' /><a href=''> Chat</a></span>
                        <span className='shopping'><img src={require('./assets/images/shopping-bag.png')} alt='' /><a href=''> Add to card</a></span>
                    </button>
                    <div className='line'>
                        <img src={require('./assets/images/rectangle.png')} alt='' />
                    </div>
                </div>
            </div>
          </div>
      </div>
  );
}

export default App;
