import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { DashboardLayout } from '../../layouts/dashboard/layout';
import { useSelection } from '@/hooks/use-selection';
import { useOrder } from '@/hooks/use-orders';
import { OrdersTable } from '@/sections/orders/orders-table';
import { useTranslation } from 'react-i18next';
import OrderContextProvider from '@/contexts/order-context';
import { OrdersSearch } from '@/sections/orders/order-search';

const Page = () => {
  const {t}= useTranslation();
  const orderContext = useOrder();
  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 10,
    filter: [{
      key: "number",
      value: "",
    }],
  });

  const ordersIds: any[] | undefined = useMemo(
    () =>
      orderContext == undefined ? undefined : orderContext?.orders?.map((order: any) => order.id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const ordersSelection = useSelection(ordersIds);

  const handlePageChange = (event: any, newPage: number) => {
    setController({
      ...controller,
      page: newPage,
    });
  };

  const handleRowsPerPageChange = (event: any) => {
    setController({
      ...controller,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  const handleSearch = (event: any) => {
    console.log(event.target.value);
    const txt = (event.target.value).toString();
    console.log(txt);
    setController({
      ...controller,
      page: 0,
      filter: [{
        key: "number",
        value: txt
      }],
    });
  };

  //selection 
  interface Option {
    key: string;
    value: string;
  }
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClear = () => {
    setController({
      ...controller,
      page: 0,
      filter: [{
        key: "status",
        value: ""
      }],
    });
    setSelectedOption(null);
  };
  const options: Option[] = [
    { key: 'status', value: 'PENDING' },
    { key: 'status', value: 'CREATED' },
    { key: 'status', value: 'LISTED' },
    { key: 'status', value: 'CANCELED' },
    { key: 'status', value: 'DELIVERED' },

  ];

  const handleSelect  = (selected: Option) => {
    setController({
      ...controller,
      page: 0,
      filter: [{
        key: "status",
        value: selected.value
      }],
    });
    setSelectedOption(selected);
    handleClose();
  };

  useEffect(() => {
    orderContext?.fetchOrders(controller.page, controller.rowsPerPage,controller.filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controller]);


  return (
    <>
      <Head>
        <title>{t("Orders")} | Pronto</title>
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
                <Typography variant="h4">{t("Orders")}</Typography>
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
            <OrdersSearch onSearchChange={handleSearch} handleSelect={handleSelect } options={options} anchorEl={anchorEl} setAnchorEl={setAnchorEl} handleClose={handleClose} selectedOption={selectedOption} handleClear={handleClear}  />
            {(orderContext == undefined || orderContext?.count > 0) && (
              <OrdersTable
                count={orderContext?.count}
                items={orderContext?.orders}
                onDeselectAll={ordersSelection.handleDeselectAll}
                onDeselectOne={ordersSelection.handleDeselectOne}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                onSelectAll={ordersSelection.handleSelectAll}
                onSelectOne={ordersSelection.handleSelectOne}
                page={controller.page}
                rowsPerPage={controller.rowsPerPage}
                selected={ordersSelection.selected}
                handleSuspend={orderContext?.cancelOrder}
              />
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => (
 <OrderContextProvider>
  <DashboardLayout>
    {page}
  </DashboardLayout>
  </OrderContextProvider>
);

export default Page;
