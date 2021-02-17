import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, image, size, history, match, linkUrl }) => (
    <div className={`${size} menu_item`} 
         onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className="background_image" style={{ backgroundImage: `url(${image})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

// Getting acees to the router props (history, location & match) with higher order component from react-router-dom
export default withRouter(MenuItem);
