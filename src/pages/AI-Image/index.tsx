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
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button
} from '@mui/material';

import { OfficesTable } from "@/sections/offices/offices-table";

const Page = () => {
  const {t}= useTranslation();
  const title = "AI Image";
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
            <Stack direction="row" justifyContent="space-between" spacing={2}>
              <Card sx={{ p: 3, mt: 3, width: "49%" }} >
                <form onSubmit={() => null}>
                  <Stack sx={{ gap: 1, flexGrow: 1 }}>
                    <Typography variant="h6">{t("Image Name")}</Typography>
                    <TextField
                      label={t("Image Name")}
                      onChange={() => null}
                      variant="outlined"
                      fullWidth
                      type="text"
                      required
                    />
                  </Stack>
                  <Stack sx={{ gap: 1, flexGrow: 1, mt: 2 }}>
                    <Typography variant="h6">{t("Image Description")}</Typography>
                    <TextField
                      label={t("Image Description")}
                      onChange={() => null}
                      variant="outlined"
                      multiline
                      rows={4}
                      maxRows={10}
                      fullWidth
                      type="phone"
                      required
                      dir="ltr"
                    />
                  </Stack>

                  <Button sx={{ mt: 3, px: 8 }} variant="contained" color="primary" type="submit">
                    {t("Generate")}
                  </Button>
                </form>
              </Card>
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