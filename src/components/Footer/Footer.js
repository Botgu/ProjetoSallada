import React from 'react';

import { Rodape, FooterTitle } from './styles.js'

const Footer = ({ title }) => {
  return (
    <Rodape>
      <FooterTitle>{title}</FooterTitle>
    </Rodape>
  )
}

export default Footer;