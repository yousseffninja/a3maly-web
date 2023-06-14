import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { SettingsPassword } from '@/sections/settings/settings-password';
import { DashboardLayout } from '@/layouts/dashboard/layout';
import { useTranslation } from "react-i18next";
import { SettingsEmail } from '@/sections/settings/settings-email';
import { OwnerProfile } from '@/sections/owner information/owner-information';
import { OwnerProfileDetails } from '@/sections/owner information/owner-information-details';
import Grid from '@mui/system/Unstable_Grid/Grid';

const Page = () => {
    const title = "Account Settings";
    const { t } = useTranslation();

    return <>
        <Head>
            <title>
                {t(title)} | Pronto
            </title>
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
                    <Typography variant="h4">
                        {t(title)}
                    </Typography>
                    <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <OwnerProfile />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                                lg={8}
                            >
                                <OwnerProfileDetails />
                            </Grid>
                        </Grid>
                    {/* <SettingsEmail /> */}
                    <SettingsPassword />
                </Stack>
            </Container>
        </Box>
    </>
};

Page.getLayout = (page: any) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
