import React from 'react';

import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
    return ( 
        <div className='collection_preview'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <div className='preview'>
                {
                    //  to display 4 items only, filter() that create a new array with four objects.
                    items.filter((item, itemInd) => itemInd < 4)
                         .map((item) => (
                            <div key={item.id}>{item.name}</div>
                         ))
                }
            </div>
        </div>
    );
}
 
export default CollectionPreview ;