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
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import AddCommentIcon from '@mui/icons-material/AddComment';
import MessageIcon from '@mui/icons-material/Message';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import EmailIcon from '@mui/icons-material/Email';

const Page = () => {
  const {t}= useTranslation();
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
      icon: <AddCommentIcon sx={{ color: "#007bff" }} />,
      favourite: true,
    },
    {
      title: "Email",
      subtitle: "sub 1",
      description: "Create an email Create an email Create an email Create an email Create an emailCreate an email Create an email Create an email",
      icon: <MessageIcon sx={{color: "#007bff"}} />,
      favourite: true,
    },
    {
      title: "Image",
      subtitle: "sub 1",
      description: "Create an image",
      icon: <CommentsDisabledIcon sx={{color: "#007bff"}} />,
      favourite: false,
    },
    {
      title: "Video",
      subtitle: "sub 1",
      description: "Create a video",
      icon: <EmailIcon sx={{ color: "#B02A37"}} />,
      favourite: true,
    },
    {
      title: "Video",
      subtitle: "sub 1",
      description: "Create a video",
      icon: <AddCommentIcon sx={{color: "#007bff"}} />,
      favourite: true,
    },
    {
      title: "Video",
      subtitle: "sub 1",
      description: "Create a video",
      icon: <AddCommentIcon sx={{color: "#007bff"}} />,
      favourite: true,
    },
    {
      title: "Video",
      subtitle: "sub 1",
      description: "Create a video",
      icon: <AddCommentIcon sx={{color: "#007bff"}} />,
      favourite: false,
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
                {card.map((e, i) => (
                  // eslint-disable-next-line react/jsx-key
                  <Box sx={sxAlignmentBox}>
                    <Box>
                      <Grid sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                        <SvgIcon fontSize="small" >
                          {e.icon}
                        </SvgIcon>
                        <SvgIcon fontSize="small">
                          {e.favourite ? <StarIcon sx={{ color: "#FF9D00" }} /> : <StarBorderIcon sx={{ color: "#FF9D00" }} />}
                        </SvgIcon>
                      </Grid>
                      <Typography variant="h5" sx={{ pb: 0.2 }}>{e.title}</Typography>
                      <Typography variant="body2" sx={{ pb: 0.2 }}>{e.subtitle}</Typography>
                      <Divider variant="middle" sx={{ mb: .02 }} />
                      <Typography variant="subtitle2">{e.description}</Typography>
                    </Box>
                    <Button sx={{ bgcolor: "#ffffff", color: "#000000" }}>Create</Button>
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