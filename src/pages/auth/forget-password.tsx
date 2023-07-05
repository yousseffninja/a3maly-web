import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Link,
  Stack,
  Divider,
  TextField,
  Typography,
  FormControl,
  FormLabel,
  Grid,
  Checkbox
} from '@mui/material';
import React from 'react';
import { useAuth } from '../../hooks/use-auth';
import { AuthLayout } from '../../layouts/auth/layout';
import { useTranslation } from 'react-i18next';
import { display } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Logo from '@/assets/logo.png';

const Page = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const auth = useAuth();
  const [method, setMethod] = useState('email');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      username: Yup
        .string()
        .max(255)
        .required('username is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth?.signIn(values.email, values.password);
        router.push('/');
      } catch (err:any) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });
  // Keep me logged in
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleMethodChange = useCallback(
    (_event: any, value: React.SetStateAction<string>) => {
      setMethod(value);
    },
    []
  );

  const handleSkip = useCallback(
    () => {
      // auth.skip();
      router.push('/');
    },
    [router]
  );

  return (
    <>
      <Head>
        <title>
          {t("Forget Password")} | A3maly
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          width: "100%",
          justifyContent: 'center',
          flexDirection: "column",
          direction: 'rtl'
        }}
      >
        <Box sx={{ my: 5, mb: 15 }}>
          <img src={Logo.src} className="App-logo" alt="logo" max-width={"100%"} />
        </Box>
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          <div>
            <Stack
              spacing={2}
              sx={{ mb: 3 }}
            >
              <Typography variant="h5" sx={{
                display:"flex" ,
                direction:"rtl",
                justifyContent:"end",
                fontWeight:700,
                fontFamily: 'A Jannat LT',
                fontSize: 46,
              }} >
                <Typography  variant="h5" mx={1} sx={{ fontFamily: 'A Jannat LT', fontSize: 46, fontWeight:700,}}>{t("Forgot your password?")}</Typography>
              </Typography>
              <Typography variant="h5" sx={{
                display:"flex" ,
                direction:"rtl",
                justifyContent:"end",
                fontWeight:400,
                fontFamily: 'A Jannat LT',
                fontSize: 26,
              }} >
                <Typography  variant="h5" mx={1} sx={{ fontFamily: 'A Jannat LT', fontSize: 26, fontWeight:400, color: "#777A7E"}}>{t("Enter your email address and we'll send you instructions on how to reset your password.")}</Typography>
              </Typography>
            </Stack>
            {method === 'email' && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <FormControl>
                    <TextField
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          textAlign: "left",
                          direction: "ltr",
                        },
                      }}
                      error={!!(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      placeholder={`${t('Enter your email')}`}
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="email"
                      label={t("Email")}
                      InputLabelProps={{ shrink: true }}
                      value={formik.values.email}
                      inputProps={{
                        style: { height: '40px' }, // Adjust the height value as needed
                      }}
                    />
                  </FormControl>

                </Stack>
                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                <Box sx={{ gap:1, textTransform:"uppercase", width: "100%", display: "flex", justifyContent: "center" }}>
                  <Button
                    sx={{ mt: 3,textTransform:"uppercase",'&:hover':{background:"#000"}, width: 580, height: 66, bgcolor: "#00314C" }}
                    type="submit"
                    variant="contained"
                    onClick={() => router.push('/')}
                  >
                    {t('Email recovery')}
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 3,
                  }}
                >
                  <Typography sx={{
                    fontFamily: 'A Jannat LT',
                    fontSize: 14,
                    fontWeight: 700,
                  }}>
                    {t("Don't have an account?")} <Link href="/auth/register" sx={{ color: "#1F7BF4", textDecoration: "none" }}>{t("Create Account")}</Link>
                  </Typography>
                </Box>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page: any) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
