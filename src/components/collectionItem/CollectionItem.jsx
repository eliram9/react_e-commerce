import React from 'react';

import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
    const discountPrice = price - (price * 0.15);
    return ( 
        <div className="collection_item">
            {/*  */}
            <div className="like"><i class="far fa-heart"></i></div> {/*--==|| Furute feature||==-- */}
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection_footer">
                <span className="name">{name}</span>
                <div className="price">
                    <span style={{ marginRight: '10px', textDecoration: 'line-through' }}>{`$${price}`}</span>
                    <span className="discount_price" style={{ color: '#CF0063' }}>{`$${discountPrice}`}</span>
                </div>
                <br />
            </div>
            
        </div>
    );
}
 
export default CollectionItem;