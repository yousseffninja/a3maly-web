import {
  Card,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography, SvgIcon, TablePagination
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TrashIcon from '@/assets/icons/trashIcon';
import EditIcon from '@/assets/icons/editIcon';


export const FileManagementTable = (props: any) => {
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
    <Card sx={{width: "100%", color: "#ffffff" }}>
      <Box sx={{ minWidth: "49%", color: "#ffffff" }}>
        <Typography sx={{ color: "#000000", m: 2, fontFamily: 'A Jannat LT', fontSize: 14, fontWeight: 700 }}>{t("All my files")}</Typography>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} > {t('File Name')}</Typography> </TableCell>
              <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} >{t('Workbook')}</Typography> </TableCell>
              <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} >{t('Category')}</Typography> </TableCell>
              <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} >{t('The number of words')}</Typography> </TableCell>
              <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} >{t('the language')}</Typography> </TableCell>
              <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} >{t('Created at')}</Typography> </TableCell>
              <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} >{t('Action')}</Typography> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item: any) => {
              return (
                <TableRow hover key={item.fileName} >
                  <TableCell>
                    <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, color: "#939393" }}>
                      {t('File Name')}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, color: "#939393" }}>
                      {item.workbook}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, color: "#939393" }}>
                      {item.category}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, color: "#939393" }}>
                      {item.wordNumber}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, color: "#939393" }}>
                      {item.language}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, color: "#939393" }}>
                      {item.created_at}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <SvgIcon sx={{ mr: 3 }}>
                      <TrashIcon />
                    </SvgIcon>
                    <SvgIcon>
                      <EditIcon />
                    </SvgIcon>
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
  )
}