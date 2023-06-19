import { useTranslation } from 'react-i18next';
import {
  Card,
  CardHeader, Divider, CardContent, Unstable_Grid2 as Grid, Stack
} from '@mui/material';
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

export const AccountBalanceTable = (props: any) => {
  const { t } = useTranslation();
  const {
    account
  } = props;

  return (
    <Card>
      <CardHeader subheader={"#" + account.account} title={account.name} />
      <Divider />
      <CardContent>
        <Grid container spacing={12} wrap="wrap">
          <Grid xs={12} sm={6} md={4}>
            <Stack spacing={1}>
              <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                <ListItem key={account.id} >
                  <ListItemText primary={t("Account")} secondary={account.account} />
                </ListItem>
                <ListItem key={account.id} >
                  <ListItemText primary={t("username")} secondary={account.username} />
                </ListItem>
                <ListItem key={account.id} >
                  <ListItemText primary={t("Phone")} secondary={account.phone} />
                </ListItem>
                <ListItem key={account.id} >
                  <ListItemText primary={t("Account Balance")} secondary={account.balance} />
                </ListItem>
                <ListItem key={account.id} >
                  <ListItemText primary={t("Created at")} secondary={new Date(account.created_at).toLocaleDateString()} />
                </ListItem>
              </List>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  )
}