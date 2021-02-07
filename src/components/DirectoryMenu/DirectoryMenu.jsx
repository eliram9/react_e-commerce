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
                    imageUrl: 'https://images.pexels.com/photos/1115700/pexels-photo-1115700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    id: uuid()
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
                    id: uuid()
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://images.unsplash.com/photo-1597248881519-db089d3744a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
                    id: uuid()
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000',
                    size: 'large',
                    id: uuid()
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.pexels.com/photos/4096982/pexels-photo-4096982.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    size: 'large',
                    id: uuid()
                }
            ]
        };
    }

    render() {
        return (
        <div className='directory_menu'>
            {this.state.sections.map(({ title, id, imageUrl, size }) => (
                <MenuItem key={id} 
                          title={title} 
                          image={imageUrl}
                          size={size}
                />
            ))}
        </div>
        );
    }
}

export default DirectoryMenu;
