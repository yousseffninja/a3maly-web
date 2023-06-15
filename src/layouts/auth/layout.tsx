import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import React from 'react';
import Logo from '../../assets/logo.png';
import LoginBg from '../../assets/Login/login-bg.png';
import { useTranslation } from 'react-i18next';
// TODO: Change subtitle text

export const AuthLayout = (props: { children: any; }) => {
  const { children } = props;
  const {t} = useTranslation();

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        direction:"ltr"
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
          </Box>
          {children}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: `url(${LoginBg.src})`,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100%",
            '& img': {
              maxWidth: '100%'
            }
          }}
        >
        </Grid>
      </Grid>
    </Box>
  );
};

AuthLayout.prototypes = {
  children: PropTypes.node
};