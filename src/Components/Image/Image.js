import React from 'react';

function Image(props) {
  const { src, alt, className, ...rest } = props;
  return (
    <img
      className={`h-100 w-100 ${className}`}
      src={process.env.PUBLIC_URL + src}
      alt={alt ? alt : 'No Pic'}
      {...rest}
    />
  );
}

export default Image;
