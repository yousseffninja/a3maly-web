import { DashboardLayout } from '@/layouts/dashboard/layout';
import React, { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Grid,
  SvgIcon
} from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';

const Page = () => {
  const {t}= useTranslation();
  const title = "Templates";
  const tabs = ["All", "Blog", "Email", "Image", "Video", "Social Media", "Content", "Other"];
  const card = [
    {
      title: "Blog Post",
      description: "Create a blog post",
      icon: <PlusIcon />
    },
    {
      title: "Email",
      description: "Create an email Create an email Create an email Create an email Create an emailCreate an email Create an email Create an email",
      icon: <PlusIcon />
    },
    {
      title: "Image",
      description: "Create an image",
      icon: <PlusIcon />
    },
    {
      title: "Video",
      description: "Create a video",
      icon: <PlusIcon />
    },
    {
      title: "Video",
      description: "Create a video",
      icon: <PlusIcon />
    },
    {
      title: "Video",
      description: "Create a video",
      icon: <PlusIcon />
    },
    {
      title: "Video",
      description: "Create a video",
      icon: <PlusIcon />
    }
  ]

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Head>
        <title>
          {t(title)} | Pronto
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h5">{t(title)}</Typography>
                <Typography variant="subtitle2">Need to create a content? We got you covered! Checkout the list of templates that you can use</Typography>
              </Stack>
            </Stack>
            <Grid sx={{ display: "flex" }}>
              {tabs.map((e, i) => (
                // eslint-disable-next-line react/jsx-key
                <Box sx={{
                  px: 3,
                  py: 1,
                  mx: 1,
                  borderRadius: 8,
                  boxShadow: 3,
                  cursor: "pointer",
                  color: (i === selectedTab) ? 'white' : '#2e2e3e',
                  backgroundColor: (i === selectedTab) ? '#2e2e3e' : 'white',
                  "&:hover": {
                    color: 'white',
                    backgroundColor: (i === selectedTab) ? '#2e2e3e' : '#1e1e2d',
                  },
                }} onClick={() => setSelectedTab(i)}>
                  {e}
                </Box>
              ))}
            </Grid>
            <Grid sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              width: "100%",
            }}>
              {card.map((e, i) => (
                // eslint-disable-next-line react/jsx-key
                <Box sx={{ width: "23%", p: 1, px:3, py: 3, mx: 1, mb: 3, borderRadius: 2, boxShadow: 3,}}>
                  <Grid sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                    <SvgIcon fontSize="small">
                      {e.icon}
                    </SvgIcon>
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  </Grid>
                  <Typography variant="h5" sx={{ pb: 1 }}>{e.title}</Typography>
                  <Typography variant="subtitle2">{e.description}</Typography>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;