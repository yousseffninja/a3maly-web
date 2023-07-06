import { Box, Typography } from '@mui/material';
import React from 'react';
import SeoIcon from '@/assets/icons/main/seo-icon';
import BlogIcon from '@/assets/icons/main/blog-icon';
import EmailIcon from '@/assets/icons/main/email-icon';
import FinanceIcon from '@/assets/icons/main/finance-icon';
import MessageIcon from '@/assets/icons/main/message-icon';
import SocialIcon from '@/assets/icons/main/social-icon';
import MarktingIcon from '@/assets/icons/main/markting-icon';
import IdeaIcon from '@/assets/icons/main/idea-icon';
import { useTranslation } from 'react-i18next';

export const Items = () => {
  const {t}= useTranslation();
  const content = [
    {
      icon: <SeoIcon />,
      title: "SEO",
    },
    {
      icon: <BlogIcon />,
      title: "Blogs",
    },
    {
      icon: <EmailIcon />,
      title: "Emails",
    },
    {
      icon: <FinanceIcon />,
      title: "Finances",
    },
    {
      icon: <MessageIcon />,
      title: "Messages",
    },
    {
      icon: <SocialIcon />,
      title: "Socials",
    },
    {
      icon: <MarktingIcon />,
      title: "Markting",
    },
    {
      icon: <IdeaIcon />,
      title: "SEO",
    },
  ]

  return (
    <Box sx={{
      width: "100%",
      bgcolor: "#F8F7FA",
      borderRadius: "230px 0px 230px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mt: 5,
    }}>
      <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 30, fontWeight: 700, color: "#000000", textAlign: "center", mt: 10, width: "50%" }}>
        {t("Here are some of the content that Business can help you create for your digital marketing campaigns")}
      </Typography>
      <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 20, fontWeight: 400, color: "#4C5D77", textAlign: "center", mt: 5, width: "50%" }}>
        {t("We are the ultimate environment for apps, extensions, and resources available to all creators, powered by artificial intelligence.")}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: 'wrap', width: "100%", mb: 10, px: 10 }}>
        {content.map((item, index) => (
          <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", my: 10, mx: 15, width: 50, height: 50 }}>
            <Box sx={{ width: 70, height: 70, bgcolor: "#FF5895", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
              {item.icon}
            </Box>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 15, fontWeight: 700, color: "#000000", textAlign: "center", mt: 2, width: 100 }}>
              {t(item.title)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}