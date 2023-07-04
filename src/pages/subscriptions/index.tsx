import { DashboardLayout } from '@/layouts/dashboard/layout';
import React, { useState } from 'react';
import {
  Container,
  Stack,
  Box, Divider, Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PreviousPayments } from '@/sections/subscriptions/previous-payments';
import { SubscrptionBuy } from '@/sections/subscriptions/subscrption-buy';
import Head from 'next/head';

const Page = () => {
  const title = "Subscriptions";
  const {t}= useTranslation();

  const tabs = ["subscriptions", "previous payments"];
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Head>
        <title>
          {t(title)} | A3maly
        </title>
      </Head>
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
                <Typography sx={{ fontFamily: 'A Jannat LT', }}>{t(e)}</Typography>
              </Box>
            ))}
          </Box>
        </Stack>
        <Divider variant="middle" sx={{ mb: 2 }} />
        {selectedTab === 1 ? <PreviousPayments /> : <SubscrptionBuy />}
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