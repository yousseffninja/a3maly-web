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
import { SearchBar } from '@/sections/shared/search-bar';
import { OfficesTable } from '@/sections/offices/offices-table';
import { FileManagementTable } from '@/sections/file-management/file-management-table';
const Page = () => {
  const {t}= useTranslation();
  const title = "File Management";
  const items = [
    {
      fileName: "File 1",
      workbook: "Workbook 1",
      category: "Category 1",
      wordNumber: 10,
      language: "English",
      created_at: "30-3-2001"
    },
    {
      fileName: "File 2",
      workbook: "Workbook 1",
      category: "Category 1",
      wordNumber: 10,
      language: "English",
      created_at: "30-3-2001"
    },
    {
      fileName: "File 3",
      workbook: "Workbook 1",
      category: "Category 1",
      wordNumber: 10,
      language: "English",
      created_at: "30-3-2001"
    },
  ]
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
                <Typography variant="h5">{t(title)}</Typography>
              </Stack>
            </Stack>
            <SearchBar
              onSearchChange={() => null}
              placeholder={t(`Search`) + " "+ t(title)}
            />
            <FileManagementTable
              count={3}
              items={items}
              onDeselectAll={() => null}
              onDeselectOne={() => null}
              onPageChange={() => null}
              onRowsPerPageChange={() => null}
              onSelectAll={() => null}
              onSelectOne={() => null}
              page={1}
              rowsPerPage={5}
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