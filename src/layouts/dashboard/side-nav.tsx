import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import {
  Box,
  Drawer,
  Stack,
  useMediaQuery,
  Typography
} from '@mui/material';
import React from 'react';
import WhiteLogo from '../../assets/logo-white.png';
import { Scrollbar } from '@/components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';
import { Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';
export const SideNav = (props: { open: any; onClose: any; }) => {
  const {t}= useTranslation();
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
        },
        direction: 'ltr',
        background: '#084C71',
        color: '#000',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ px: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              width: '100%',
              justifyContent:"center",
              alignItems: "start",
              height: '67px',
              padding:"14px",
              zIndex: (theme) => theme.zIndex.appBar + 350,
            }}
          >
            <img src={WhiteLogo.src} className="App-logo" alt="logo" width={"100%"} />
          </Box>
        </Box>
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#ffffff" }}>{t("Main list")}</Typography>
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            {items.map((item: any, i) => {
              const active = item.path ? (pathname === item.path) : false;
              if (i === 5){
                return(
                  <>
                    <Typography variant="subtitle2" sx={{ color: "#ffffff" }}>{t("General settings")}</Typography>
                    <SideNavItem
                      active={active}
                      disabled={item.disabled}
                      external={item.external}
                      icon={item.icon}
                      key={item.title}
                      path={item.path}
                      title={item.title}
                      items={item.children}
                    />
                  </>
                )
              }
              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                  items={item.children}
                />
                );
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'grey.800',
            color: 'common.white',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'grey.800',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
