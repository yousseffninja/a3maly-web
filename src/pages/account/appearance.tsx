import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import React from 'react';
import { DashboardLayout } from '@/layouts/dashboard/layout';
import { useTranslation } from "react-i18next";
import { CompanyProfile } from '@/sections/company information/company-information';
import { CompanyProfileDetails } from '@/sections/company information/company-information-details';

const Page = () => {
    const title = "Logo & Appearance";
    const { t } = useTranslation();

    return <>
        <Head>
            <title>{title} | Pronto</title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <div>
                        <Typography variant="h4">
                            {t(title)}
                        </Typography>
                    </div>
                    <div>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <CompanyProfile />
                            </Grid>

                        </Grid>
                    </div>
                </Stack>
            </Container>
        </Box>
    </>
}

Page.getLayout = (page: any) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
