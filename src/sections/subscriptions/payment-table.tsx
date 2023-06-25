import { useTranslation } from 'react-i18next';
import {
  Card,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody, SvgIcon, TablePagination
} from '@mui/material';
import React from 'react';

export const PaymentTable = (props: any) => {
  const {
    count,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page,
    handleSuspend = () => {},
    rowsPerPage,
    selected,
  } = props;
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{width: "100%", color: "#ffffff" }}>
        <Box sx={{ minWidth: "49%", color: "#ffffff" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('Subtype')}</TableCell>
                <TableCell>{t('The price of registration')}</TableCell>
                <TableCell>{t('subscription status')}</TableCell>
                <TableCell>{t('Subscription start')}</TableCell>
                <TableCell>{t('at the end of the subscription')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item: any) => {
                return (
                  <TableRow hover key={item.start} >
                    <TableCell>
                      {t(item.kind)}
                    </TableCell>
                    <TableCell>
                      {item.price}
                    </TableCell>
                    <TableCell>
                      {t(item.status)}
                    </TableCell>
                    <TableCell>
                      {item.start}
                    </TableCell>
                    <TableCell>
                      {item.end}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={count}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </Card>
    </>
  );
}