import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography, FormControl, FormLabel, Grid
} from '@mui/material';
import React from 'react';
import { useAuth } from '../../hooks/use-auth';
import { AuthLayout } from '../../layouts/auth/layout';
import { useTranslation } from 'react-i18next';
import { display } from '@mui/system';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

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
        await auth?.signIn(values.email, values.password);
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
          {t("Login")} | A3maly
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          direction: 'rtl'
        }}
      >
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
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h5" sx={{display:"flex" ,direction:"rtl",justifyContent:"center",fontWeight:700}} >
                {t('Welcome Back to')} <Typography  variant="h5" color="primary" mx={1}> Unda</Typography>
              </Typography>
            </Stack>
            {method === 'email' && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <FormControl>
                    <FormLabel><Typography sx={{fontWeight:"700"}} variant="subtitle2" color="#000" mx={1}>{t("Email Address")}</Typography></FormLabel>
                      <TextField
                        error={!!(formik.touched.email && formik.errors.email)}
                        fullWidth
                        helperText={formik.touched.email && formik.errors.email}
                        placeholder={`${t('Email Address')}`}
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
                        />
                    </FormControl>
                    <FormControl>
                    <FormLabel><Typography sx={{fontWeight:"700"}} variant="subtitle2" color="#000" mx={1}>{t("Password")}</Typography></FormLabel>
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    placeholder={`${t('Password')}`}
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
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
                <Grid sx={{
                        display:"flex",
                        justifyContent:"space-between",
                        my:1,
                        alignItems:"baseline",
                      }}>
                    <FormControl>
                    <FormControlLabel 
                    control={<Switch 
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />} 
                        label={<FormLabel><Typography variant="subtitle2" color="initial">Keep me logged in</Typography></FormLabel>}
                        sx={{m:0}}
                        />

                    </FormControl>
                    <Typography variant="subtitle2" color="initial"><Link sx={{textDecoration:"none",'&:hover':{color:"#000"}}} href='/forget-password'>Forgot Your Password?</Link></Typography>
                </Grid>
                <Box sx={{display:"flex",gap:1,textTransform:"uppercase"}}>
                  <Button
                    size="small"
                    sx={{ mt: 3,textTransform:"uppercase",'&:hover':{background:"#000"} }}
                    type="submit"
                    variant="contained"
                  >
                    {t('Login')}
                  </Button> 
                  <Button
                    size="small"
                    sx={{ mt: 3,textTransform:"uppercase",backgroundColor:'#000',
                     '&:hover':
                     {
                      color: "#fff !important",
                      backgroundColor:" #D13212",
                      borderColor:" #D13212",
                    }
                    }
                    }
                    type="button"
                    variant="contained"
                    
                    onClick={()=> router.push("/auth/register")}
                  >
                    {t('Sign Up')}
                  </Button> 
                </Box>
              </form>
            )}
            <Typography sx={{my:3}} variant="caption">By continuing, you agree to our Terms and Conditions and Privacy Policy</Typography>
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
