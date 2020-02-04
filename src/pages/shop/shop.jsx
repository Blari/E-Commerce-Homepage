import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/preview-collection/preview-collection';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectonProps }) => (
                    <CollectionPreview key={id} {...otherCollectonProps} />
                ))
            }
        </div>

    }
}

export default ShopPage;