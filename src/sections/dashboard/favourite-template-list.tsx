import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';


export interface ITemplate {
  title: string;
  subtitle: string;
  icon: JSX.Element;
  favourite: boolean;
}

export interface IFavouriteTemplate {
  count: number;
  templates: ITemplate[];
}

export const FavouriteTemplateList: React.FC<{ bestTemplates: IFavouriteTemplate }> = ({ bestTemplates }) => {
  const { t } = useTranslation();

  const router = useRouter();

  const OnClickHandlerTemplates = (id: string) => {
    router.push(`/Templates/${id}`);
  }

  return (
      <Box sx={{ mt: 2, width: "100%", display: "flex", flexWrap: 'wrap'  }}>
      {bestTemplates.templates.map((e) => (
        <Box key={e.title} sx={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center", px: 2,
          borderRadius: 1, boxShadow: 3,
          ml: 2,
          mb: 2,
          width: 358,
          cursor: "pointer",
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
              onClick={() => OnClickHandlerTemplates(e.title)}
        >
          <Box sx={{ display: "flex", my: 2 }}>
            <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
              {e.icon}
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 700 }}>{t(e.title)}</Typography>
              <Typography variant="subtitle1" sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 400, color: "#757575"  }}>{t(e.subtitle)}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {e.favourite ? <StarIcon sx={{ color: "#FF9D00" }} /> : <StarBorderIcon sx={{ color: "#FF9D00" }} />}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
