import React from 'react';
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/Collection';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'

interface ShopPageProps {
	match: {
		isExact: boolean;
		path: string;
		url: string;
	};
}

const ShopPage = ({ match } : ShopPageProps): JSX.Element => {

  return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
  };


export default ShopPage;
