import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SvgIcon
} from '@mui/material';
import React from 'react';
import getTimeElapsedString from '@/utils/getTimeElapsedString'; 
import { useTranslation } from "react-i18next";
import { useVehicle } from "@/hooks/use-vehicles";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

export const OverviewLatestVehicles = (props: any) => {
  const { products = [], sx } = props;
  const { t } = useTranslation();
    const router = useRouter();
    const vehicleContext = useVehicle();

    const fetchLastVehicles = async () => {
      vehicleContext?.fetchUnverifiedVehicles(0,6)
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
        {vehicleContext?.unverifiedVehicles.sort((a: IData, b: IData) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((vehicle: any, index: number) => {
          const ago = getTimeElapsedString(vehicle.created_at);

          return (
            <ListItem
              key={vehicle.id}
            >
              <ListItemAvatar>
                {
                 vehicle?.__images__[0]
                    ? (
                      <Box
                        component="img"
                        src={"https://pronto.zbony.com/v1/" + vehicle?.__images__[0]?.image}
                        sx={{
                          borderRadius: 1,
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                    : (
                      <Box
                        sx={{
                          borderRadius: 1,
                          backgroundColor: 'grey.200',
                          height: 48,
                          width: 48
                        }}
                      />
                    )
                }
              </ListItemAvatar>
              <ListItemText
                primary={`${vehicle.__brand__.name} (${vehicle?.__brand_model__?.name})`}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={` ${ago}`}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          );
        })}
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
