import { DashboardLayout } from '@/layouts/dashboard/layout';
import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Box, Container, Stack, Typography, Grid } from '@mui/material';
import { SubscrintionHeader } from '@/sections/dashboard/subscrintion-header';
import { ProjectProductsTable } from '@/sections/my-project/project-products-table';

const Page = () => {
  const {t}= useTranslation();
  const title = "Project products"
  const items = [
    {
      folderName: "folder name",
      description: "No one wants to read boring blog titles, create attractive blog titles with this tool",
      link: "https://www.google.com/",
    },
    {
      folderName: "folder name",
      description: "No one wants to read boring blog titles, create attractive blog titles with this tool",
      link: "https://www.google.com/",
    },
    {
      folderName: "folder name",
      description: "No one wants to read boring blog titles, create attractive blog titles with this tool",
      link: "https://www.google.com/",
    },
  ]

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
            <ProjectProductsTable
              count={0}
              items={items}
              onDeselectAll={() => null}
              onDeselectOne={() => null}
              onPageChange={() => null}
              onRowsPerPageChange={() => null}
              onSelectAll={() => null}
              onSelectOne={() => null}
              page={1}
              rowsPerPage={1}
              selected={[]}/>
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