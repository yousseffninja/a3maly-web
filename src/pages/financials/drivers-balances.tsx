import Head from 'next/head';
import {
  Box,
  Container,
  Stack,
  Typography
} from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { DashboardLayout } from '@/layouts/dashboard/layout';
import { useTranslation } from "react-i18next";
import { SearchBar } from '@/sections/shared/search-bar';
import { usePageUtilities } from '@/hooks/use-page-utilities';
import { DriverBalanceTable } from '@/sections/financials/driver-balance-table';
import { useFinancials } from '@/hooks/use-financials';
import { useSelection } from '@/hooks/use-selection';
import FinancialsProvider from '@/contexts/financials-context';

const Page = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  const title = "Drivers Balances";
  const { t } = useTranslation();

  const financialContext = useFinancials();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const financialIds : any[] | undefined = useMemo(
    () => financialContext == undefined? undefined: financialContext?.drivers.map((driver: any) => driver.id),
    []);

  const driverSelection = useSelection(financialIds)

  const { handlePageChange, handleRowsPerPageChange, handleSearch, controller } =
    usePageUtilities();

  useEffect(() => {
    financialContext?.fetchDrivers(controller.page, controller.rowsPerPage,controller.filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controller]);

  return (
    <>
      <Head>
        <title>{t(title)} | Pronto</title>
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
              onSearchChange={handleSearch}
              placeholder={t(`Search`) + " "+ t(title)}
            />
            {(financialContext == undefined || financialContext?.count > 0) && (
              <DriverBalanceTable
                count={financialContext?.count}
                items={financialContext?.drivers}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                page={controller.page}
                rowsPerPage={controller.rowsPerPage}
              />
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => (
  <DashboardLayout>
    <FinancialsProvider>
    {page}
    </FinancialsProvider>
  </DashboardLayout>
);

export default Page;
