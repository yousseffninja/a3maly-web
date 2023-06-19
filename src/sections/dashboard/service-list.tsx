import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export interface IService {
  title: string;
  count: number;
  icon: JSX.Element;
}

export const ServiceList: React.FC<{ services: IService[] }> = ({ services }) => {
  const { t }= useTranslation();
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
        {services?.map((e) => (
          <Box key={e.title} sx={{ ml: 3, mb: 2, px: 1.5, py: 2.5, width: 213, borderRadius: 1, display: "flex", justifyContent: "space-between", alignContent: 'center', bgcolor: "#ffffff" }}>
            <Box >
              <Typography variant="subtitle1">{t(e.title)}</Typography>
              <Typography variant="subtitle2">{e.count}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {e.icon}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}