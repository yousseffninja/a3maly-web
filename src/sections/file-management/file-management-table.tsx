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
        <Typography sx={{ color: "#000000", m: 2 }}>{t("All my files")}</Typography>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell>{t('File Name')}</TableCell>
              <TableCell>{t('Workbook')}</TableCell>
              <TableCell>{t('Category')}</TableCell>
              <TableCell>{t('The number of words')}</TableCell>
              <TableCell>{t('the language')}</TableCell>
              <TableCell>{t('Created at')}</TableCell>
              <TableCell>{t('Action')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item: any) => {
              return (
                <TableRow hover key={item.fileName} >
                  <TableCell>
                    {item.fileName}
                  </TableCell>
                  <TableCell>
                    {item.workbook}
                  </TableCell>
                  <TableCell>
                    {item.category}
                  </TableCell>
                  <TableCell>
                    {item.wordNumber}
                  </TableCell>
                  <TableCell>
                    {item.language}
                  </TableCell>
                  <TableCell>
                    {item.created_at}
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