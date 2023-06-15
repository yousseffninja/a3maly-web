import { DashboardLayout } from '@/layouts/dashboard/layout';
import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Stack,
  Typography,
  Card,
  Divider,
  Grid,
  MenuItem,
  Select,
  Button,
  SvgIcon
} from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { OfficesTable } from '@/sections/offices/offices-table';
const Page = () => {
  const {t}= useTranslation();
  const title = "Workbooks";
  const Artist = [
    {
      id: 1,
      name: "Artist 1"
    },
    {
      id: 2,
      name: "Artist 2"
    },
    {
      id: 3,
      name: "Artist 3"
    }
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
                <Typography variant="h4">{t(title)}</Typography>
              </Stack>
            </Stack>
            <Card sx={{ px: 2, py: 2 }}>
              <Typography sx={{ my : 1}} variant="h6">{t("All My Workbooks")}</Typography>
              <Divider sx={{ my : 1}}/>
              <Grid spacing={2} sx={{ my : 1, display: "flex"}}>
                <Grid sx={{width: "50%"}}>
                  <Select
                    value={Artist[0]?.id}
                    required={true}
                    onChange={() => null}
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      height: 'auto',
                      maxHeight: 100,
                      overflowY: 'auto',
                      width: "100%"
                    }
                    }
                  >
                    {Artist &&
                      Artist?.map((art: any) => (
                        <MenuItem key={art?.id} value={art?.id} >
                          {art?.name}
                        </MenuItem>
                      ))}
                  </Select>
                </Grid>
                <Grid direction="row" sx={{my: 1, mx: 2}}>
                  <Button
                    startIcon={
                      <SvgIcon fontSize="small">
                        <PlusIcon />
                      </SvgIcon>
                    }
                    sx={{ pr: 1, mx: 1 }}
                    variant="contained"
                  />
                  <Button
                    startIcon={
                      <SvgIcon fontSize="small">
                        <PlusIcon />
                      </SvgIcon>
                    }
                    sx={{ pr: 1, mx: 1 }}
                    variant="contained"
                  />
                  <Button
                    startIcon={
                      <SvgIcon fontSize="small">
                        <PlusIcon />
                      </SvgIcon>
                    }
                    sx={{ pr: 1, mx: 1 }}
                    variant="contained"
                  />
                </Grid>
              </Grid>
            </Card>
            <Card sx={{ width: "100%" }}>
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
            </Card>
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