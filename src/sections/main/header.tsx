import { Box, Button, Typography } from '@mui/material';
import Logo from '@/assets/logo-main.png';
import Img1 from '@/assets/main/img-1.png';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const {t}= useTranslation();
  const tabs = ["Connect us", "Prices", "Main"];
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState(2);

  const OnClickHandler = () => {
    router.push(`/auth/login`);
  }

  return (
    <Box sx={{ background: 'linear-gradient(to right bottom, #00314C, #00314C, #26678B)', width: "100%", height: 530, borderRadius: "0px 0px 0px 290px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}>
        <Box sx={{ display: "flex", }}>
          <Button sx={{ bgcolor: "#00D6FF", borderRadius: 25, mx: 3 }} onClick={() => OnClickHandler()}>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 14, fontWeight: 700, color: "#000000", mx: 2.5 }}>
              {t("Login")}
            </Typography>
          </Button>
          {tabs.map((e, i) => (
            // eslint-disable-next-line react/jsx-key
            <Box sx={{
              px: 3,
              py: 1,
              mx: 1,
              display: "flex",
              borderBottom: 1,
              borderColor: selectedTab === i ? "#ffffff" : "#00314C",
              cursor: "pointer",
              fontSize: 14,
              "&:hover": {
                borderColor: "#000000",
                transition: "background 1s, color 1s",
              },
            }} onClick={() => setSelectedTab(i)}>
              <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 14, fontWeight: 400, color: "#ffffff" }}>{t(e)}</Typography>
            </Box>
          ))}
        </Box>
        <img src={Logo.src} alt={"logo"}  />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <img src={Img1.src} alt={"image 1"} width={"380px"} />
        <Box sx={{ width: 600, mr: 8,  }}>
          <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 50, fontWeight: 400, color: "#ffffff", direction: "ltr" }}>
            {t('Use AI to create content that drives results in seconds')}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 6 }}>
            <Button sx={{ bgcolor: "#00D6FF", borderRadius: 25, mx: 3, }}>
              <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 14, fontWeight: 700, color: "#000000", mx: 2.5 }}>
                {t("Start Now")}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}