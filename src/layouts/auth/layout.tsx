import PropTypes from 'prop-types';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import React, { useEffect } from 'react';
import LoginBg from '../../assets/Login/login-bg.png';
import RegisterBg from '../../assets/Login/register-bg.png'
import { useTranslation } from 'react-i18next';
import {useRouter} from 'next/router';

export const AuthLayout = (props: { children: any; }) => {
  const { children } = props;
  const router = useRouter();
  const {t} = useTranslation();

  useEffect(() => {
    console.log(router.asPath)
  }, [])

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
            background: router.asPath === "/auth/login" ? `url(${LoginBg.src})` : router.asPath === "/auth/register" ? `url(${RegisterBg.src})` : null,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
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