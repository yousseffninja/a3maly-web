import { useTranslation } from 'react-i18next';
import {
  Grid,
  Typography,
  TextField, Button
} from '@mui/material';
import React from 'react';

export const ProjectCreateForm = (props: any) => {
  const { t } = useTranslation();
  const {
    onSubmit,
    formikOnchange,
    formikProjectName,
    formikDescription,
    formikProjectURL,
    formikFacebookURL,
    formikTwitterURL,
    formikInstagramURL
  } = props;
  return (
    <>
      <Grid sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", my: 4, px: 2 }} >
        <Grid sx={{ width: "100%", mt: 4 }}>
          <form
            noValidate
            onSubmit={onSubmit}
          >
            <Grid sx={{ px: 2 , mb: 2, width: "33%" }}>
              <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('Project Name')}</Typography>
              <TextField
                fullWidth
                label={t('which title')}
                name="projectName"
                onChange={formikOnchange}
                value={formikProjectName}
              />
            </Grid>
            <Grid sx={{ px: 2 , mb: 2, width: "100%" }}>
              <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('Project Description')}</Typography>
              <TextField
                fullWidth
                label={t('a description . . .')}
                name="description"
                multiline
                rows={4}
                sx={{ width: "100%" }}
                onChange={formikOnchange}
                value={formikDescription}
              />
            </Grid>
            <Grid sx={{ px: 2 , mb: 2, width: "33%" }}>
              <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('Project link')}</Typography>
              <TextField
                fullWidth
                label={t('URL')}
                name="projectURL"
                onChange={formikOnchange}
                value={formikProjectURL}
              />
            </Grid>
            <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2, pl: 2}}>{t('Add Social links')}</Typography>
            <Grid sx={{ display: "flex", flexDirection: "row" }} >
              <Grid sx={{ px: 2 , mb: 2, width: "40%" }}>
                <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('Facebook link')}</Typography>
                <TextField
                  fullWidth
                  label={t('URL')}
                  name="facebookURL"
                  onChange={formikOnchange}
                  value={formikFacebookURL}
                />
              </Grid>
              <Grid sx={{ px: 2 , mb: 2, width: "40%" }}>
                <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('Twitter link')}</Typography>
                <TextField
                  fullWidth
                  label={t('URL')}
                  name="twitterURL"
                  onChange={formikOnchange}
                  value={formikTwitterURL}
                />
              </Grid>
              <Grid sx={{ px: 2 , mb: 2, width: "40%" }}>
                <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('Instagram link')}</Typography>
                <TextField
                  fullWidth
                  label={t('URL')}
                  name="instagramURL"
                  onChange={formikOnchange}
                  value={formikInstagramURL}
                />
              </Grid>
            </Grid>
            <Grid sx={{ px: 2 , mb: 2 }} >
              <Button sx={{ width: "15%", bgcolor: "#00314C" }} type="submit">
                <Typography variant="h6" sx={{ my: 1, color: "#ffffff", fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 700, }}>{t('create')}</Typography>
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}