import React from 'react';
export function Signature({ h, w }: any) {
  const imageStyle = {
    height: h,
    width: w,
    backgroundImage: `url('https://rb.gy/x67pye')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    display: 'inline-block',
  };
  return <span style={imageStyle}></span>;
}

Signature.defaultProps = {
  h: '4rem',
  w: '6rem',
};
