import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/';
import './directory.styles.scss';


//TODO: Add type for sections
interface FixThisLater {
  [index: number]: { title: string; imageUrl: string; id: number, linkUrl: string };
}


const Directory = ({ sections } : FixThisLater) => {
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
