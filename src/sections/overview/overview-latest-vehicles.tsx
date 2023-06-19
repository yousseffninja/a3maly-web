import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon
} from '@mui/material';
import React from 'react';
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

export const OverviewLatestVehicles = (props: any) => {
  const { products = [], sx } = props;
  const { t } = useTranslation();
    const router = useRouter();

    const fetchLastVehicles = async () => {
      return
    };
    
    useEffect(() => {
      fetchLastVehicles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const handleRoute = () => {
      router.push(`vehicles-management/verification-requests`);
    };
  
    interface IData {
      created_at: string;
    }

  return (
    <Card sx={sx}>
      <CardHeader title={t("Latest Vehicles Requests")} />
      <List>

      </List>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end', alignItems:'end' }}>
        <Button
        onClick={()=>handleRoute()}
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          {t("View all")}
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestVehicles.propTypes = {
  products: PropTypes.array,
  sx: PropTypes.object
};
