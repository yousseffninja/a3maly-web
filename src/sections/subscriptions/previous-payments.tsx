import { SubscrintionHeader } from '@/sections/dashboard/subscrintion-header';
import React from 'react';
import { FileManagementTable } from '@/sections/file-management/file-management-table';
import { Grid } from '@mui/material';
import { PaymentTable } from '@/sections/subscriptions/payment-table';

export const PreviousPayments = () => {
  const items = [
    {
      kind: "a3maly plus",
      price: 300,
      status: "Success",
      start: "30-03-2023",
      end: "30-03-2023",
    },
    {
      kind: "a3maly plus",
      price: 300,
      status: "Success",
      start: "30-03-2023",
      end: "30-03-2023",
    },
    {
      kind: "a3maly plus",
      price: 300,
      status: "Success",
      start: "30-03-2023",
      end: "30-03-2023",
    },
    {
      kind: "a3maly plus",
      price: 300,
      status: "Success",
      start: "30-03-2023",
      end: "30-03-2023",
    },
  ]
  return (
    <>
      <Grid>
        <Grid sx={{ mx: 4, borderRadius: 2, mb: 3 }} >
          <SubscrintionHeader />
        </Grid>

        <PaymentTable
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
      </Grid>
    </>
  );
}
