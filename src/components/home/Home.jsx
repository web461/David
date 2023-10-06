import React from 'react'
import "./Home.css";
import Social from './Social';
import Data from './Data';
import Scrolldown from './Scrolldown';

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className='home_container container grid'>
            <div className='home_content grid'>
                 <Social />
                 <div className="div home_img">

                 </div>
                 <Data />
            </div>
      <Scrolldown />

        </div>
    </section>
  )
}

export default Home