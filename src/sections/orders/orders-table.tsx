import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Box,
  Card,
  Checkbox,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography, Button
} from '@mui/material';
import React, { useState } from 'react';
import { Scrollbar } from '@/components/scrollbar';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import { MenuButton } from '@/components/button-menu';
import { useRouter } from 'next/router';
import {useTranslation} from 'react-i18next';
import ConfirmationPopup from '@/components/confirmation-popup';

export const OrdersTable = (props: any) => {
  const router = useRouter();
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

  const {t} = useTranslation();
  const [open, setOpen] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<any>({})

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = items?(items.length > 0) && selected.length === items.length: false;

  const cancelOrder = async () => {
    return
  }

  return (
    <Card>
      <ConfirmationPopup message={"Sure to cancel this order? " + selectedOrder.number} confirmFuntion={cancelOrder} open={open} setOpen={setOpen} />

      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>{t('#')}</TableCell>
                <TableCell>{t('Clients')}</TableCell>
                <TableCell>{t('Status')}</TableCell>
                <TableCell>{t('Created at')}</TableCell>
                <TableCell>
                  <SvgIcon fontSize="small">
                    <CogIcon />
                  </SvgIcon>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((order: any) => {
                const isSelected = selected.includes(order.id);
                const created_at = format(Date.parse(order.created_at), "dd/MM/yyyy");
                const deleted_at = order.deleted_at
                  ? format(Date.parse(order.deleted_at), "dd/MM/yyyy")
                  : null;
                // const [checked, setChecked] = useState(order.deleted_at);
                const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                  // setChecked(event.target.checked);
                  handleSuspend(order.id);
                };
                
                const handleRoute = (event: React.ChangeEvent<HTMLInputElement>) => {
                  router.push(`/orders/${order.id}`);
                };

                return (
                  <TableRow hover key={order.id} selected={isSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) =>  {
                          if (event.target.checked) {
                            onSelectOne?.(order.id);
                          } else {
                            onDeselectOne?.(order.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>{order.number}</TableCell>
                    <TableCell>
                      {
                        order.addresses.map((item:any, index:number) => {
                          return <Typography key={index} >{t(item.type)}: {item.name}</Typography>
                        })
                      }
                    </TableCell>
                    <TableCell >
                    <span style={{color:`${order.status=="CANCELED"?'#fd4747':(order.status=="DELIVERED"?"rgb(75 216 40)":"none")}`}} >{t(order.status)}</span>  
                    </TableCell>
                    <TableCell>{created_at}</TableCell>
                    
                        <TableCell>
                        <TableCell>
                            <MenuButton 
                              items={[
                                {label: "View", onClick: handleRoute},
                                {label: "Cancel",disabled:(order.status =="CANCELED"||order.status =="DELIVERED") ,onClick: ()=> {
                                  setSelectedOrder(order);
                                  setOpen(true)
                                }},
                              ]}
                            />
                          </TableCell>
                        </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

OrdersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  handleSuspend: PropTypes.func,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
