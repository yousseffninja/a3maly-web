import { Box, Typography } from '@mui/material';
import Step1 from '@/assets/main/step-1.png';
import Step2 from '@/assets/main/step-2.png';
import Step3 from '@/assets/main/step-3.png';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Steps = () => {
  const {t}= useTranslation();
  return (
    <Box sx={{ mt: 8 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={Step1.src} alt={"step-1"} width={"400px"}  />
        <Box sx={{ width: 400, display: "flex", alignItems: "center", my: 15,  }}>
          <Box>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 30, fontWeight: 700, color: "#000000", direction: "ltr" }}>
              {t("Choose your template")}
            </Typography>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 20, fontWeight: 400, color: "#888888", direction: "ltr" }}>
              {t("My Business comes with over 40 pre-built templates to help boost your digital marketing including blog articles, social media posts, and video scripts.")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: 400, display: "flex", alignItems: "center", ml: 15 }}>
          <Box>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 30, fontWeight: 700, color: "#000000", direction: "ltr" }}>
              {t("Describe your topic")}
            </Typography>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 20, fontWeight: 400, color: "#888888", direction: "ltr" }}>
              {t("Enter a few sentences about what you want to write as the input, as well as the tone you're looking for. My business will take it from there.")}
            </Typography>
          </Box>
        </Box>
        <img src={Step2.src} alt={"step-1"} width={"400px"}  />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={Step3.src} alt={"step-1"} width={"400px"}  />
        <Box sx={{ width: 400, display: "flex", alignItems: "center", mr: 15 }}>
          <Box>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 30, fontWeight: 700, color: "#000000", direction: "ltr" }}>
              {t("Create your content")}
            </Typography>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 20, fontWeight: 400, color: "#888888", direction: "ltr" }}>
              {t("SEO friendly content created in less than 30 seconds. You can save or export your output to the form of your choice.")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}