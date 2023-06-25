import { DashboardLayout } from '@/layouts/dashboard/layout';
import React from 'react';
import {
  Grid,
  Typography,
  Divider,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';
import { useRouter } from 'next/router';

import StarIcon from '@mui/icons-material/Star';
import ServiceSeoIcon from '@/assets/icons/serviceSeoIcon';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Page = () => {
  const router = useRouter();
  const {t}= useTranslation();
  const { Id } = router.query;

  const languages = [
    {
      src: "data:image/png;base64,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",
      name: "English"
    },
    {
      src: "data:image/png;base64,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",
      name: "Arabic"
    }
  ];

  const levels = ["normal", "medium", "creative", "very creative"];
  const results = [1, 5 ,10, 15, 20, 25, 30];
  const lengths = [10, 100, 500, 10000, 50000];

  const formik = useFormik({
    initialValues: {
      description: '',
      creativityLevel: 'normal',
      language: 'Arabic',
      results: 1,
      length: 10,
      submit: null
    },
    validationSchema: Yup.object({
      description: Yup
        .string()
        .max(255)
        .required('description is required'),
      language: Yup
        .string()
        .max(255),
      creativityLevel: Yup
        .string()
        .max(255)
        .required('Email is required'),
      results: Yup
        .string()
        .max(255)
        .required('results is required'),
      length: Yup
        .string()
        .max(255)
        .required('length is required')
    }),
    onSubmit: async (values, helpers) => {
      // try {
      //   // await auth.signUp(values.email, values.name, values.password);
      //   router.push('/');
      // } catch (err: any) {
      //   helpers.setStatus({ success: false });
      //   helpers.setErrors({ submit: err.message });
      //   helpers.setSubmitting(false);
      // }
    }
  });

  return (
    <>
    <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", my: 2 }}>
      <Grid sx={{ bgcolor: "#ffffff", width: "35%", borderRadius: 1 }}>
        <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", my: 4, px: 2 }} >
          <Grid sx={{ display: "flex", flexDirection: "row", alignContent: "center" }} >
            <ServiceSeoIcon />
            <Grid>
              <Typography variant="h5" sx={{ mx: 2}}>{Id}</Typography>
              <Typography variant="subtitle2" sx={{ mx: 2}}>sub</Typography>
            </Grid>
          </Grid>
          <Grid>
              <StarIcon sx={{ color: "#FF9D00" }} />
          </Grid>
        </Grid>
        <Grid sx={{ mx: 2, display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle2" sx={{ mx: 2}}>لا أحد يريد قراءة عناوين المدونات المملة ، وإنشاء عناوين مدونة جذابة باستخدام هذه الأداة</Typography>
        </Grid>
        <Divider variant="middle" sx={{ my: 4 }} />
        <Grid>
          <form
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <Grid sx={{ px: 2 , mb: 2 }}>
              <Typography variant="h6" sx={{ mx: 2}}>{t('Language')}</Typography>
              <Select
                sx={{ width: "100%" }}
                name="language"
                value={formik.values.language}
                onChange={formik.handleChange}
              >
                {languages.map((language, index) => (

                  <MenuItem key={index} value={language.name}>
                    {<img src={language.src}  alt={language.name} width="20px" height="20px"/>}  {t(language.name)}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid sx={{ px: 2 , mb: 2 }} >
              <Typography variant="h6" sx={{ mx: 2}}>{t('What is the theme of your theme is about?')}</Typography>
              <TextField
                fullWidth
                label={t('a description . . .')}
                name="description"
                multiline
                rows={4}
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </Grid>
            <Grid sx={{ px: 2 , mb: 2 }}>
              <Typography variant="h6" sx={{ mx: 2}}>{t('creativity level')}</Typography>
              <Select
                sx={{ width: "100%" }}
                name="creativityLevel"
                value={formik.values.creativityLevel}
                onChange={formik.handleChange}
              >
                {levels.map((level, index) => (
                  <MenuItem key={index} value={level}>
                    {t(level)}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid sx={{ px: 2 , mb: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Grid sx={{ width: "100%", mr: 2  }} >
                <Typography variant="h6" sx={{ mx: 2}}>{t('The number of results')}</Typography>
                <Select
                  sx={{ width: "100%" }}
                  name="results"
                  value={formik.values.results}
                  onChange={formik.handleChange}
                >
                  {results.map((result, index) => (
                    <MenuItem key={index} value={result}>
                      {result}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid sx={{ width: "100%", ml: 2 }}>
                <Typography variant="h6" sx={{ mx: 2}}>{t('The maximum length of the result')}</Typography>
                <Select
                  sx={{ width: "100%" }}
                  name="length"
                  value={formik.values.length}
                  onChange={formik.handleChange}
                >
                  {lengths.map((length, index) => (
                    <MenuItem key={index} value={length}>
                      {length}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <Grid sx={{ px: 2 , mb: 2 }} >
              <Button sx={{ width: "100%", bgcolor: "#00314C" }} type="submit">
                <Typography variant="h6" sx={{ my: 1, color: "#ffffff"}}>{t('create')}</Typography>
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Grid sx={{ bgcolor: "#ffffff", width: "60%", borderRadius: 1 }}>

      </Grid>
    </Grid>
    </>
  );
}

Page.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;