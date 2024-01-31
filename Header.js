import React from 'react';
import {Link} from 'react-router-dm';
import bannerImg from '../images/restaurantFood.088c3dd386b046ca6ce7.jpg'

const Header = () =>{
    return(
     <div>
        <Header className='header'>
          <section>
            {/*banner texts*/}
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <link to="/booking"><button aria-label='On Click'>Reserve Table</button></link>
            </div>

            {/*banner image*/}
            <div className='banner-img'>
                <img src={bannerImg} alt=''/>
            </div>
          </section>
        </Header>
     </div>
    );
};

export default Header;