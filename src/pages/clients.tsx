import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useSelection } from "@/hooks/use-selection";
import { useClient } from "@/hooks/use-clients";
import { useTranslation } from "react-i18next";
import { usePageUtilities } from "@/hooks/use-page-utilities";
import { SearchBar } from "@/sections/shared/search-bar";
import { DashboardLayout } from "@/layouts/dashboard/layout";
import { ClientsTable } from "@/sections/clients/clients-table";
import ClientContextProvider from "@/contexts/client-context";

const Page = () => {
  const title = "Clients";

  const { t } = useTranslation();

  const clientContext = useClient();

  const clientsIds: any[] | undefined = useMemo(
    () => clientContext?.clients?.map((client: any) => client.id),
    [clientContext?.clients]
  );
  const clientsSelection = useSelection(clientsIds);

  const { handlePageChange, handleRowsPerPageChange, handleSearch, controller } = usePageUtilities()

  useEffect(() => {
    clientContext?.fetchClients(controller.page, controller.rowsPerPage);
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
                {/* <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    {t("Import")}
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    {t("Export")}
                  </Button>
                </Stack> */}
              </Stack>
              <div>
                {/* <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Add
                </Button> */}
              </div>
            </Stack>
            <SearchBar onSearchChange={handleSearch} placeholder={t(`Search`) + " "+ t(title)} />
            {(clientContext == undefined || clientContext?.count > 0) && (
              <ClientsTable
                count={clientContext?.count}
                items={clientContext?.clients}
                onDeselectAll={clientsSelection.handleDeselectAll}
                onDeselectOne={clientsSelection.handleDeselectOne}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                onSelectAll={clientsSelection.handleSelectAll}
                onSelectOne={clientsSelection.handleSelectOne}
                page={controller.page}
                rowsPerPage={controller.rowsPerPage}
                selected={clientsSelection.selected}
              />
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => (
  <ClientContextProvider>
    <DashboardLayout>{page}</DashboardLayout>;
  </ClientContextProvider>
);
export default Page;
