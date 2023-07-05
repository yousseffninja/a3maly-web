import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

export interface IService {
  title: string;
  count: number;
  icon: JSX.Element;
}

export const ServiceList: React.FC<{ services: IService[] }> = ({ services }) => {
  const { t }= useTranslation();
  const router = useRouter();

  const OnClickHandlerTemplates = (id: string) => {
    router.push(`/Templates/${id}`);
  }

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: 'wrap' }}>
        {services?.map((e) => (
          <Box key={e.title} sx={{
            ml: 3,
            mb: 2,
            px: 1.5,
            py: 2.5,
            width: 213,
            boxShadow: 3,
            borderRadius: 1,
            display: "flex",
            justifyContent: "space-between",
            alignContent: 'center',
            bgcolor: "#ffffff",
            cursor: "pointer",
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
               onClick={() => OnClickHandlerTemplates(e.title)}
          >
            <Box>
              <Typography variant="subtitle1" sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 400, color: "#757575"}}>{t(e.title)}</Typography>
              <Typography variant="subtitle2" sx={{ fontFamily: 'A Jannat LT', fontSize: 20, fontWeight: 400}}>{e.count}</Typography>
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