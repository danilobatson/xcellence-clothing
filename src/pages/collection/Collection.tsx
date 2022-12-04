import React from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

type ItemsArray = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}[];

interface CollectionPageProps {
  collection: {
    id: number;
    items: ItemsArray;
    routeName: string;
    title: string;
  };
}

const Collection = ({ collection }: CollectionPageProps) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

interface StateInt {
  shop: {
    collections: {
      [key: string]: {
        id: number;
        items: ItemsArray;
        routeName: string;
        title: string;
      };
    };
  };
  cart: {
    hidden: boolean;
    cartItems: {
      id: number;
      name: string;
      imageUrl: string;
      price: number;
      quantity: number;
    }[];
  };
  user: {
    currentUser: {
      id: number;
      displayName: string;
      email: string;
      createdAt: string;
    };
  };
  directory: {
    sections: {
      title: string;
      imageUrl: string;
      id: number;
      linkUrl: string;
    }[];
  };
}

interface OwnProps {
	match: {
		params: {
			collectionId: string;
		};
	};
}

const mapStateToProps = (state: StateInt, ownProps: OwnProps) => {

  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(Collection);
