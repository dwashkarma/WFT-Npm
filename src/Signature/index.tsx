import React from 'react';
const Images = require('../images/WFT.jpg');

interface SignatureProps {
  h?: string;
  w?: string;
}
export function Signature({ h, w }: SignatureProps) {
  const imageStyle = {
    height: h,
    width: w,
    backgroundImage: `url('https://rb.gy/x67pye')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    display: 'inline-block',
  };
  return <img style={imageStyle} src={Images} alt="image" />;
}

Signature.defaultProps = {
  h: '4rem',
  w: '6rem',
};
