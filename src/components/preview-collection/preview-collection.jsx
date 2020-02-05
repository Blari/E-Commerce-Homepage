import React from 'react';

import CollectionItem from '../../components/collection-iteam/collection-item'

import './preview.styles.scss';

const PreviewCollections = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default PreviewCollections;