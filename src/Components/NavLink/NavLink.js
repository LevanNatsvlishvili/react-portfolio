import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinkComponent(props) {
  const { to, children, ...rest } = props;

  return (
    <NavLink to={to} {...rest}>
      {children}
    </NavLink>
  );
}

export default NavLinkComponent;
