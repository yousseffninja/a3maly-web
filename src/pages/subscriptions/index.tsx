import { DashboardLayout } from '@/layouts/dashboard/layout';
import React, { useState } from 'react';
import {
  Container,
  Stack,
  Box, Divider
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PreviousPayments } from '@/sections/subscriptions/previous-payments';

const Page = () => {
  const {t}= useTranslation();

  const tabs = ["subscriptions", "previous payments"];
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: "#ffffff", mt: 4, mx: 2, px: 2, pt : 2 }}>
        <Stack spacing={3}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {tabs.map((e, i) => (
              // eslint-disable-next-line react/jsx-key
              <Box sx={{
                px: 3,
                py: 1,
                mx: 1,
                borderBottom: 1,
                borderColor: selectedTab === i ? "#000000" : "#ffffff",
                cursor: "pointer",
                fontSize: 14,
                "&:hover": {
                  borderColor: "#000000",
                  transition: "background 1s, color 1s",
                },
              }} onClick={() => setSelectedTab(i)}>
                {t(e)}
              </Box>
            ))}
          </Box>
        </Stack>
        <Divider variant="middle" sx={{ mb: 2 }} />
        {selectedTab === 1 ? <PreviousPayments /> : null}
      </Container>
    </>
  );
}

Page.getLayout = (page: any) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;