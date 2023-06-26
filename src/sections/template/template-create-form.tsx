import {
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import ServiceSeoIcon from '@/assets/icons/serviceSeoIcon';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const TemplateCreateForm = (props: any) => {
  const { t } = useTranslation();
  const {
    formik,
    onSubmit,
    formikLanguage,
    formikOnchange,
    formikDescription,
    formikCreativityLevel,
    formikResults,
    formikLength,
    Id,
    languages = [],
    levels = [],
    results = [],
    lengths = [],
  } = props;
  return (
    <>
      <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", my: 4, px: 2 }} >
        <Grid sx={{ display: "flex", flexDirection: "row", alignContent: "center" }} >
          <ServiceSeoIcon />
          <Grid>
            <Typography variant="h5" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 700}}>{t(Id)}</Typography>
            <Typography variant="subtitle2" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 400}}>{t(Id)}</Typography>
          </Grid>
        </Grid>
        <Grid>
          <StarIcon sx={{ color: "#FF9D00" }} />
        </Grid>
      </Grid>
      <Grid sx={{ mx: 2, display: "flex", justifyContent: "center" }}>
        <Typography variant="subtitle2" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 400}}>لا أحد يريد قراءة عناوين المدونات المملة ، وإنشاء عناوين مدونة جذابة باستخدام هذه الأداة</Typography>
      </Grid>
      <Divider variant="middle" sx={{ my: 4 }} />
      <Grid>
        <form
          noValidate
          onSubmit={onSubmit}
        >
          <Grid sx={{ px: 2 , mb: 2 }}>
            <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('Language')}</Typography>
            <Select
              sx={{ width: "100%" }}
              name="language"
              value={formikLanguage}
              onChange={formikOnchange}
            >
              {languages.map((language: { name: string; src: string; },
                index: React.Key | null | undefined) => (

                <MenuItem key={index} value={language.name}>
                  {<img src={language.src}  alt={language.name} width="20px" height="20px"/>}  {t(language.name)}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid sx={{ px: 2 , mb: 2 }} >
            <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('What is the theme of your theme is about?')}</Typography>
            <TextField
              fullWidth
              label={t('a description . . .')}
              name="description"
              multiline
              rows={4}
              onChange={formikOnchange}
              value={formikDescription}
            />
          </Grid>
          <Grid sx={{ px: 2 , mb: 2 }}>
            <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('creativity level')}</Typography>
            <Select
              sx={{ width: "100%" }}
              name="creativityLevel"
              value={formikCreativityLevel}
              onChange={formikOnchange}
            >
              {levels.map((level: string, index: React.Key | null | undefined) => (
                <MenuItem key={index} value={level}>
                  {t(level)}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid sx={{ px: 2 , mb: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Grid sx={{ width: "100%", mr: 2  }} >
              <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('The number of results')}</Typography>
              <Select
                sx={{ width: "100%" }}
                name="results"
                value={formikResults}
                onChange={formikOnchange}
              >
                {results.map((result: number, index: React.Key | null | undefined) => (
                  <MenuItem key={index} value={result}>
                    {result}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid sx={{ width: "100%", ml: 2 }}>
              <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('The maximum length of the result')}</Typography>
              <Select
                sx={{ width: "100%" }}
                name="length"
                value={formikLength}
                onChange={formikOnchange}
              >
                {lengths.map((length: number, index: React.Key | null | undefined) => (
                  <MenuItem key={index} value={length}>
                    {length}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid sx={{ px: 2 , mb: 2 }} >
            <Button sx={{ width: "100%", bgcolor: "#00314C" }} type="submit">
              <Typography variant="h6" sx={{ my: 1, color: "#ffffff", fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 700, }}>{t('create')}</Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}