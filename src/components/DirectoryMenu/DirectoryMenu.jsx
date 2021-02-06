import React from 'react';
import uuid from 'react-uuid';

import MenuItem from '../menuItem/MenuItem';
import './DirectoryMenu.scss';

class DirectoryMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: uuid()
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: uuid()
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: uuid()
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: uuid()
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: uuid()
                }
            ]
        };
    }

    render() {
        return (
        <div className='directory_menu'>
            {this.state.sections.map(({ title, id }) => (
                <MenuItem key={id} 
                          title={title} 
                />
            ))}
        </div>
        );
    }
}

export default DirectoryMenu;
