import React from 'react';

import './custom-buttom.styles.scss';

interface CustomButtonProps {
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick: () => void;
}

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: CustomButtonProps) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
