import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@mui/material';

const CustomBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ m: 2 }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
        Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const formatted = value.charAt(0).toUpperCase() + value.slice(1);

        return isLast ? (
          <Typography color="text.primary" key={to}>
            {formatted}
          </Typography>
        ) : (
          <Link key={to} to={to} style={{ textDecoration: 'none', color: '#1976d2' }}>
            {formatted}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
