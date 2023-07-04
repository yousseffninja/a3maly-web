import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Link, Stack, TextField, Typography, FormControl, FormLabel, Grid, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';
import { useAuth } from '../../hooks/use-auth';
import { AuthLayout } from '../../layouts/auth/layout';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import countries from '../../assets/Data/country-by-name';
import Switch from '@mui/material/Switch';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Page = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      country: 'Egypt',
      password: '',
      confirmPassword: '',
      submit: null
    },
    validationSchema: Yup.object({
      fullName: Yup
        .string()
        .max(255)
        .required('Full Name is required'),
        country: Yup
        .string()
        .max(255),
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required'),
      confirmPassword: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth.signUp(values.email, values.name, values.password);
        router.push('/');
      } catch (err: any) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });
  // select Country
  const [selectedCountry, setSelectedCountry] = React.useState(true);
    // accept the polices
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
  return (
    <>
      <Head>
        <title>
          {t("Register")} | A3maly
        </title>
      </Head>
      <Box
        sx={{
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
                {t('Sign Up to ')} <Typography  variant="h5" color="primary" mx={1}> Unda</Typography>
              </Typography>
            </Stack>
            <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <FormControl>
                    <FormLabel><Typography sx={{fontWeight:"700"}} variant="subtitle2" color="#000" mx={1}>{t("Full Name")}</Typography></FormLabel>
                      <TextField
                        error={!!(formik.touched.fullName && formik.errors.fullName)}
                        fullWidth
                        helperText={formik.touched.fullName && formik.errors.fullName}
                        placeholder={`${t('Full Name')}`}
                        name="fullName"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="text"
                        value={formik.values.fullName}
                        />
                    </FormControl>
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
                    <FormControl sx={{"& .muirtl-1anwyoe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.muirtl-1anwyoe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.muirtl-1anwyoe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{paddingRight:"15px"}}} >
                    <FormLabel><Typography sx={{fontWeight:"700"}} variant="subtitle2" color="#000" mx={1}>{t("Country")}</Typography></FormLabel>
                  <Select sx={{'& .muirtl-6hp17o-MuiList-root-MuiMenu-list':{
                    height: "25em",'&':{
                      margin:0,padding:0
                    }}}}
                     labelId="countrySelectLabel"
                      id="countrySelect"
                       name='country'
                        value={formik.values.country}
                         onChange={formik.handleChange}
                         IconComponent={() =>
                          <KeyboardArrowDownIcon
                            style={{
                              position: 'absolute',
                              color: 'grey',
                              userSelect: 'none',
                              pointerEvents: 'none',
                              left:"93%",
                              marginLeft: 0,
                            }}
                            />}
                         MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight:"24em",
                            },
                          },
                        }}
                        >
                    {countries.map((country, index) => (
                      <MenuItem key={index} value={country.country}>
                        {country.country}
                      </MenuItem>
                    ))}
                  </Select>
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
                    <FormControl>
                    <FormLabel><Typography sx={{fontWeight:"700"}} variant="subtitle2" color="#000" mx={1}>{t("Confirm Password")}</Typography></FormLabel>
                  <TextField
                    error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
                    fullWidth
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    placeholder={`${t('Confirm Password')}`}
                    name="confirmPassword"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.confirmPassword}
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
                        label={<FormLabel> <Typography sx={{my:3 ,display:"flex",alignItems:"baseline",gap:.3}} variant="caption">By continuing, you agree to our<Link sx={{textDecoration:"none",'&:hover':{color:"#000"}}} color="primary" href='/about'> Terms and Conditions </Link> and<Link sx={{textDecoration:"none",'&:hover':{color:"#000"}}} color="primary" href='/about'> Privacy Policy </Link></Typography></FormLabel>}
                        sx={{m:0}}
                        />

                    </FormControl>               
                </Grid>
                <Box sx={{display:"flex",gap:1,textTransform:"uppercase"}}>
                  <Button
                    size="small"
                    sx={{ textTransform:"uppercase",'&:hover':{background:"#000"} }}
                    type="submit"
                    variant="contained"
                  >
                    {t('Sign Up')}
                  </Button> 
                </Box>
                <Typography sx={{mt:1}} variant='caption' color="secondary">or <Link sx={{textDecoration:"none",'&:hover':{color:"#000"}}} color="primary" href='/auth/login'>login</Link></Typography>
              </form>
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
