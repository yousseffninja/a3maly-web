import { format } from 'date-fns';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography

} from '@mui/material';
import React from 'react';
import { Scrollbar } from '@/components/scrollbar';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const OverviewLatestOrders = (props: any) => {
  const {  sx } = props;

  const router = useRouter();
  const {t}= useTranslation();


  const fetchLastOrder = async () => {
    return
  };
  
  useEffect(() => {
    fetchLastOrder()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRoute = () => {
    router.push(`/orders`);
  };


  return (
    <Card sx={sx}>
      <CardHeader title={t("Latest Orders")} />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>{t('#')}</TableCell>
                <TableCell>{t('Clients')}</TableCell>
                <TableCell>{t('Created at')}</TableCell>
                <TableCell>{t('Status')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
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

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
