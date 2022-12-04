import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/';
import './directory.styles.scss';



type DirectoryObject = {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
};

type DirectoryArray = DirectoryObject[];

interface DirectoryProps {
  sections: DirectoryArray;
}

const Directory = ({ sections }: DirectoryProps) => {
  console.log('sections', sections);

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
