import { Box, Typography } from '@mui/material';
import React from 'react';
import CompanyIcon from '@/assets/icons/main/company-icon';
import UsersIcon from '@/assets/icons/main/users-icon';
import WordsIcon from '@/assets/icons/main/words-icon';
import FeedbackIcon from '@/assets/icons/main/feedback-icon';
import { useTranslation } from 'react-i18next';

export const Stats = () => {
  const {t}= useTranslation();
  const items =[
    {
      icon: <CompanyIcon />,
      count: "12,500+",
      description: "Companies that use our software",
      color: "#FF9900"
    },
    {
      icon: <UsersIcon />,
      count: "3,000,000+",
      description: "Companies that use our software",
      color: "#7737FF"
    },
    {
      icon: <WordsIcon />,
      count: "10,000,000+",
      description: "Words created",
      color: "#FB5392"
    },


    {
      icon: <FeedbackIcon />,
      count: "275,000+",
      description: "Positive reviews",
      color: "#69C85A"
    },
  ]

  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      mb: 5
    }}>
      <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 30, fontWeight: 700, color: "#000000", textAlign: "center", mt: 10, width: "50%" }}>
        {t("With distinct advantages")}
      </Typography>
      <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 20, fontWeight: 400, color: "#4C5D77", textAlign: "center", mt: 5, width: "50%" }}>
        {t("Join us and see why our users love us")}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {items.map((item, index) => (
          <Box key={index} sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: 5,
            mt: 10,
          }}>
            <Box sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {item.icon}
            </Box>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 30, fontWeight: 700, color: `${item.color}`, textAlign: "center", ml: 5 }}>
              {item.count}
            </Typography>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 20, fontWeight: 400, color: "#4C5D77", textAlign: "center", mt: 5, }}>
              {t(item.description)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}