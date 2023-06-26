import { Box, Button, LinearProgress, Typography } from '@mui/material';
import ImageCopy from '@/assets/image_copy.png';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const SubscrintionHeader = () => {
  const { t }= useTranslation();
  return (
    <>
      <Box sx={{ bgcolor: "#FFFFFF", widht: "100%", display: "flex", boxShadow: 3, borderRadius: 2 }}>
        <Box sx={{ mr: 8, ml: 3, height: "110", display: 'flex', flexDirection: "column", justifyContent: "center" }}>
          <Typography variant="h5" sx={{ color: "#bab3b3", fontFamily: 'A Jannat LT', }}>{t("Your current subscription")}</Typography>
          <Typography variant="subtitle1" sx={{ fontFamily: 'A Jannat LT', }}>{t("a3maly plus")}</Typography>
        </Box>
        <Box sx={{flexGrow: 1, px: 1, height: "110", display: 'flex', flexDirection: "column", justifyContent: "center"}}>
          <LinearProgress variant="determinate" value={(4564/275000)*100} />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle1" sx={{ fontFamily: 'A Jannat LT', }}>{t("Remaining")} 4564</Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: 'A Jannat LT', }}>{t("Word")} 275000</Typography>
          </Box>
        </Box>
        <Box sx={{
          backgroundImage: `url(${ImageCopy.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 110,
          width: 370 ,
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Button sx={{ bgcolor: "#00314C", color: "#ffffff" }}><Typography sx={{ fontFamily: 'A Jannat LT', }}>{t("Renew Subscribe")}</Typography> </Button>
        </Box>
      </Box>
    </>
  )
}