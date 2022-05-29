import React from 'react';

function Image(props) {
  const { src, alt, className, ...rest } = props;
  return (
    <img
      className={` ${className}`}
      src={process.env.PUBLIC_URL + src}
      alt={alt ? alt : 'No Pic'}
      {...rest}
    />
  );
}

export default Image;
