import Head from 'next/head';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Stack,
  Typography,
  Divider
} from '@mui/material';
import { Header } from '@/sections/main/header';
import { Steps } from '@/sections/main/steps';
import { Items } from '@/sections/main/items';
import { Stats } from '@/sections/main/stats';
import { Footer } from '@/sections/main/footer';

const Page = () => {
  const {t}= useTranslation();
  const title = "Main Page"

  return (
    <>
      <Head>
        <title>
          {t(title)} | A3maly
        </title>
      </Head>
      <Stack>
        <Header />
        <Steps />
        <Items />
        <Stats />
        <Footer />
      </Stack>
    </>
  );
}

export default Page;