import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  
  
  console.log(typeof title, title);
  console.log(typeof imageUrl, imageUrl);
  console.log(typeof size, size);
  console.log(typeof history,  history);
  console.log(typeof linkUrl, linkUrl);
  console.log(typeof match, match);

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
