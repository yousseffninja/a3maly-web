import { DashboardLayout } from '@/layouts/dashboard/layout';
import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Stack,
  Typography,
  Grid
} from '@mui/material';
import { SubscrintionHeader } from '@/sections/dashboard/subscrintion-header';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProjectCreateForm } from '@/sections/my-project/project-create-form';

const Page = () => {
  const {t}= useTranslation();
  const title = "my project"

  const formik = useFormik({
    initialValues: {
      projectName: '',
      description: '',
      projectURL: '',
      facebookURL: '',
      instagramURL: '',
      twitterURL: '',
      submit: null,
    },
    validationSchema: Yup.object({
      projectName: Yup
        .string()
        .max(255)
        .required('project name is required'),
      description: Yup
        .string()
        .max(255)
        .required('description name is required'),
      projectURL: Yup
        .string()
        .max(255)
        .required('project URL is required'),
      facebookURL: Yup
        .string()
        .max(255)
        .required('facebook URL is required'),
      instagramURL: Yup
        .string()
        .max(255)
        .required('instagram URL is required'),
      twitterURL: Yup
        .string()
        .max(255)
        .required('twitter URL is required'),
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
      <Head>
        <title>
          {t(title)} | A3maly
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4} sx={{ mb: 2 }}>
              <Stack spacing={1}>
                <Typography variant="h4" sx={{ fontFamily: 'A Jannat LT', }}>{t(title)}</Typography>
              </Stack>
            </Stack>
          </Stack>
          <SubscrintionHeader />
          <Grid sx={{ bgcolor: "#ffffff", width: "100%", borderRadius: 1, mt: 3 }}>
            <ProjectCreateForm
              onSubmit={formik.handleSubmit}
              formikOnchange={formik.handleChange}
              formikProjectName={formik.values.projectName}
              formikDescription={formik.values.description}
              formikProjectURL={formik.values.projectURL}
              formikFacebookURL={formik.values.facebookURL}
              formikInstagramURL={formik.values.instagramURL}
              formikTwitterURL={formik.values.twitterURL}
            />
          </Grid>
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;