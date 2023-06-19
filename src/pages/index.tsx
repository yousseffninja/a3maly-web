import Head from 'next/head';
import {
  Box,
  Container,
  Typography,
  Stack
} from '@mui/material';
import React from 'react';
import { DashboardLayout } from '@/layouts/dashboard/layout';

import { useTranslation } from 'react-i18next';

const Page = () => {
    const {t}= useTranslation();
    const title = "Dashboard";
  return(
  <>
    <Head>
      <title>
        {t(title)} | Pronto
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
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h4">{t(title)}</Typography>
            </Stack>
          </Stack>
        </Stack>
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
