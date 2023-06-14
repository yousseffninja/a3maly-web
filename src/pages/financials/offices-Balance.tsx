import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { DashboardLayout } from '../../layouts/dashboard/layout';
import { useTranslation } from "react-i18next";
import { AccountBalanceTable } from '@/sections/financials/account-balance-table';
import { useFinancials } from '@/hooks/use-financials';
import { IAccountFinancialsBalance } from '@/@types/account-financials-balance';
import FinancialsProvider from '@/contexts/financials-context';
import { usePageUtilities } from '@/hooks/use-page-utilities';
import { useSelection } from '@/hooks/use-selection';
import { SearchBar } from '@/sections/shared/search-bar';
import { DriverBalanceTable } from '@/sections/financials/driver-balance-table';

const Page = (effect: React.EffectCallback, deps?: React.DependencyList) => {
  const title = "Offices Balance";
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const financialContext = useFinancials();

  
  const financialIds : any[] | undefined = useMemo(
    () => financialContext == undefined? undefined: financialContext?.offices.map((office: any) => office.id),
    []);
    
    const officeSelection = useSelection(financialIds);
    
    const { handlePageChange, handleRowsPerPageChange, handleSearch, controller } =
    usePageUtilities();

    const getOfficesbalance = async() => {
      await financialContext?.fetchOfficesbalance(controller.page, controller.rowsPerPage,controller.filter);
    }
    
    useEffect(() => {
      getOfficesbalance()
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
                items={financialContext?.offices}
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
