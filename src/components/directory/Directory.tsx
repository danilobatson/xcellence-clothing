import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';


import MenuItem from '../menu-item/';
import './directory.styles.scss';

type DirectoryArray = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
}[];

interface DirectoryProps {
  sections: DirectoryArray;
}

const Directory: React.FC<DirectoryProps> = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
