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
  SvgIcon, Divider
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import MessageIcon from '@mui/icons-material/Message';
import ServiceSeoIcon from '@/assets/icons/serviceSeoIcon';
import ServiceEmailIcon from '@/assets/icons/serviceEmailIcon';
import ServiceAdsIcon from '@/assets/icons/serviceAdsIcon';
import ServiceSmsIcon from '@/assets/icons/serviceSmsIcon';
import ServiceSocialIcon from '@/assets/icons/serviceSocialIcon';
import ServiceCommerceeIcon from '@/assets/icons/serviceCommerceeIcon';

const { useRouter } = require('next/navigation');

const Page = () => {
  const {t}= useTranslation();
  const router = useRouter();
  const title = "Templates";
  const tabs = ["All", "Blog", "Email", "advertisements", "messages", "SEO", "Social Media", "digital marketing"];
  const sxAlignmentBox = {
    width: "23%",
    p: 1,
    px:3,
    py: 3,
    mx: 1,
    mb: 3,
    borderRadius: 2,
    boxShadow: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'stretch'
  }
  const card = [
    {
      title: "Blog Post",
      subtitle: "sub 1",
      description: "Create a blog post",
      icon: <ServiceSeoIcon />,
      favourite: true,
    },
    {
      title: "Email",
      subtitle: "sub 1",
      description: "Create an email Create an email Create an email Create an email Create an emailCreate an email Create an email Create an email",
      icon: <MessageIcon />,
      favourite: true,
    },
    {
      title: "Image",
      subtitle: "sub 1",
      description: "Create an image",
      icon: <ServiceEmailIcon />,
      favourite: false,
    },
    {
      title: "Video",
      subtitle: "sub 1",
      description: "Create a video",
      icon: <ServiceAdsIcon/>,
      favourite: true,
    },
    {
      title: "Video",
      subtitle: "sub 1",
      description: "Create a video",
      icon: <ServiceSmsIcon />,
      favourite: true,
    },
    {
      title: "Video",
      subtitle: "sub 1",
      description: "Create a video",
      icon: <ServiceSocialIcon />,
      favourite: true,
    },
    {
      title: "Video",
      subtitle: "sub 1",
      description: "Create a video",
      icon: <ServiceCommerceeIcon />,
      favourite: true,
    },
    {
      title: "Video",
      subtitle: "sub 1",
      description: "Create a video",
      icon: <ServiceCommerceeIcon/>,
      favourite: false,
    }
  ]

  const [selectedTab, setSelectedTab] = useState(0);

  const OnClickHandler = (id: string) => {
    router.push(`/Templates/${id}`);
  }

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
                <Typography variant="h6">{t(title)}</Typography>
                <Typography variant="subtitle2">Need to create a content? We got you covered! Checkout the list of templates that you can use</Typography>
              </Stack>
            </Stack>
            <Box sx={{ bgcolor: "#ffffff", p: 3 }}>
              <Grid sx={{ display: "flex" }}>
                {tabs.map((e, i) => (
                  // eslint-disable-next-line react/jsx-key
                  <Box sx={{
                    px: 3,
                    py: 1,
                    mx: 1,
                    borderBottom: 1,
                    borderColor: selectedTab === i ? "#000000" : "#ffffff",
                    cursor: "pointer",
                    fontSize: 14,
                    "&:hover": {
                      borderColor: "#000000",
                      transition: "background 1s, color 1s",
                    },
                  }} onClick={() => setSelectedTab(i)}>
                    {t(e)}
                  </Box>
                ))}
              </Grid>
              <Divider variant="middle" sx={{ mb: 2 }} />
              <Grid sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                width: "100%",
                //   "&:hover": {
                //     transition: ("#ffffff", {
                //   duration: 300,)
                // }
                //   }
              }}>
                {card.map((e) => (
                  // eslint-disable-next-line react/jsx-key
                  <Box sx={sxAlignmentBox}>
                    <Box>
                      <Grid sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                          {e.icon}
                        </Box>
                        {e.favourite ? <StarIcon sx={{ color: "#FF9D00" }} /> : <StarBorderIcon sx={{ color: "#FF9D00" }} />}
                      </Grid>
                      <Typography variant="h5" sx={{ pb: 0.2 }}>{e.title}</Typography>
                      <Typography variant="body2" sx={{ pb: 0.2 }}>{e.subtitle}</Typography>
                      <Divider variant="middle" sx={{ mb: .02 }} />
                      <Typography variant="subtitle2">{e.description}</Typography>
                    </Box>
                    <Button sx={{ bgcolor: "#ffffff", color: "#000000" }} onClick={() => OnClickHandler(e.title)}>Create</Button>
                  </Box>
                ))}
              </Grid>
            </Box>
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