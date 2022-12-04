import './collections-overview.styles.scss';

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  CollectionPreview  from '../collection-preview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

interface CollectionsOverviewProps {
	collections: {
		id: number;
		title: string;
		routeName: string;
		items: {
			id: number;
			name: string;
			imageUrl: string;
			price: number;
		}[];
	}[];
}

const CollectionsOverview: React.FC<CollectionsOverviewProps> = ({
  collections,
}) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)
