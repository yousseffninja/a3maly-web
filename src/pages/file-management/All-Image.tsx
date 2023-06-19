import { DashboardLayout } from '@/layouts/dashboard/layout';
import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import { SearchBar } from "@/sections/shared/search-bar";
import { OfficesTable } from '@/sections/offices/offices-table';

const Page = () => {
  const {t}= useTranslation();
  const title = "All Image";
  return (
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
            <SearchBar
              onSearchChange={() => null}
              placeholder={t(`Search`) + " "+ t(title)}
            />
            <OfficesTable
              count={0}
              items={[]}
              onDeselectAll={() => null}
              onDeselectOne={() => null}
              onPageChange={() => null}
              onRowsPerPageChange={() => null}
              onSelectAll={() => null}
              onSelectOne={() => null}
              page={1}
              rowsPerPage={1}
              selected={[]}
            />
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