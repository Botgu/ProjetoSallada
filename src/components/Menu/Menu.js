import React from 'react';

import { Header, HeaderTitle } from './styles.js'

const Menu = ({ title }) => {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
    </Header>
  )
}

export default Menu;