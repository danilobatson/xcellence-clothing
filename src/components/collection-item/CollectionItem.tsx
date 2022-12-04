import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

interface CollectionItemTypes {
  name: string;
  price: number;
  imageUrl: string;
  id: number;
}
interface CollectionItemProps{
  item: CollectionItemTypes;
  addItem: (item: CollectionItemTypes) => void;
}

const CollectionItem = ({ item, addItem }: CollectionItemProps) => {
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

interface DispatchProps {
  type: string;
  payload: CollectionItemTypes;
}

const mapDispatchToProps = (dispatch: (a: DispatchProps) => void) => ({
  addItem: (item: CollectionItemTypes) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
