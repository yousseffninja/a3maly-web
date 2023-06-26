import Head from 'next/head';
import {
  Box,
  Container,
  Typography,
  Stack,
} from '@mui/material';
import React from 'react';
import { DashboardLayout } from '@/layouts/dashboard/layout';
import { useTranslation } from 'react-i18next';
import { SubscrintionHeader } from '@/sections/dashboard/subscrintion-header';
import ServiceSeoIcon from '@/assets/icons/serviceSeoIcon';
import ServiceBlogIcon from '@/assets/icons/serviceBlogIcon';
import ServiceEmailIcon from '@/assets/icons/serviceEmailIcon';
import ServiceAdsIcon from '@/assets/icons/serviceAdsIcon';
import ServiceSmsIcon from '@/assets/icons/serviceSmsIcon';
import ServiceSocialIcon from '@/assets/icons/serviceSocialIcon';
import ServiceCommerceeIcon from '@/assets/icons/serviceCommerceeIcon';
import { ServiceList } from '@/sections/dashboard/service-list';
import { FavouriteTemplateList } from '@/sections/dashboard/favourite-template-list';

const Page = () => {
  const {t}= useTranslation();
  const title = "Dashboard";

  const services = [
    {
      title: "SEO",
      count: 346,
      icon: <ServiceSeoIcon />
    },
    {
      title: "Blog",
      count: 200,
      icon: <ServiceBlogIcon />
    },
    {
      title: "Email",
      count: 565,
      icon: <ServiceEmailIcon />
    },
    {
      title: "ads",
      count: 12,
      icon: <ServiceAdsIcon />
    },
    {
      title: "Messages",
      count: 34,
      icon: <ServiceSmsIcon />
    },
    {
      title: "Social Media",
      count: 12,
      icon: <ServiceSocialIcon />
    },
    {
      title: "E-commerce",
      count: 565,
      icon: <ServiceCommerceeIcon />
    },
  ]

  const bestTemplates = {
    count: 45,
    templates: [
      {
        title: "Blog titles",
        subtitle: "Blog",
        icon: <ServiceBlogIcon />,
        favourite: true,
      },
      {
        title: "Facebook posts",
        subtitle: "Social Media",
        icon: <ServiceSocialIcon />,
        favourite: true,
      },
      {
        title: "Ad description",
        subtitle: "ads",
        icon: <ServiceAdsIcon />,
        favourite: true,
      },
      {
        title: "Direct message",
        subtitle: "Messages",
        icon: <ServiceSmsIcon />,
        favourite: true,
      },
      {
        title: "Instagram hashtag generator",
        subtitle: "Social Media",
        icon: <ServiceSocialIcon />,
        favourite: true,
      },
      {
        title: "Welcome email",
        subtitle: "Email",
        icon: <ServiceEmailIcon />,
        favourite: true,
      },
    ],
  }

  return(
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
              <Typography variant="h4" sx={{ fontFamily: 'A Jannat LT', }}>{t(title)}</Typography>
            </Stack>
          </Stack>
          <SubscrintionHeader />
          <ServiceList services={services} />
          <Box sx={{ bgcolor: "#ffffff" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", px: 2, mt: 2 }}>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h6" sx={{ fontFamily: 'A Jannat LT', }}>{t("your favorite models")} </Typography>
                <Typography sx={{ color: "#00CDE7", ml: 2, fontFamily: 'A Jannat LT', }}>{bestTemplates.count}</Typography>
              </Box>
              <Typography variant="h6" sx={{ color: "#00CDE7", fontFamily: 'A Jannat LT', }}>{t("More")}</Typography>
            </Box>
            <FavouriteTemplateList bestTemplates={bestTemplates} />
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
