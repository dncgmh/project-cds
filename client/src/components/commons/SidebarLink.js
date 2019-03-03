import React from 'react';
import { Route, Link } from 'react-router-dom';
const SidebarLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
      var active = match ? 'my-active' : '';
      return (
        <Link to={to} style={{ textDecoration: 'none' }}>
          <li className={`list-group-item dropdown-item ${active}`}>{label}</li>
        </Link>
      );
    }}
  />
);
export default SidebarLink;
