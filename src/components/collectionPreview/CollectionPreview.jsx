import React from 'react';

import CollectionItem from '../collectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
    return ( 
        <div className='collection_preview'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <div className='preview'>
                {
                    //  to display 4 items only, filter() that create a new array with four objects.
                    items.filter((item, itemInd) => itemInd < 4)
                         .map(({ id, ...otherItemProps }) => (
                            <CollectionItem key={id} {...otherItemProps} />
                         ))
                }
            </div>
        </div>
    );
}
 
export default CollectionPreview ;