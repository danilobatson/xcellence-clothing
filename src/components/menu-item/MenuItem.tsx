import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size: string;
  history: any;
  linkUrl: string;
  match: {
    isExact: boolean;
    path: string;
    url: string;
  };
}

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}: MenuItemProps) => {
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
