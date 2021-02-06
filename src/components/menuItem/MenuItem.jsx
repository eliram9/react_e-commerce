import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title }) => (
    <div className="menu_item">
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;
