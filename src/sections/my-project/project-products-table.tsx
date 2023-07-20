import { Card, CardHeader, Button, Typography, TextField, Divider, CardContent, Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  SvgIcon, TablePagination,
  Grid,
  Box} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@/assets/icons/editIcon';
import TrashIcon from '@/assets/icons/trashIcon';
import TransitionModal from '@/components/TransitionModal';

export const ProjectProductsTable = (props: any) => {
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

  const [folderName, setFolderName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [projectLink, setProjectLink] = useState<string>('')

  const [modalState, setApproveModal] = useState<boolean>(false);
  const openModal = () => setApproveModal(true);
  const closeModal = () => setApproveModal(false);

  const { t } = useTranslation()

  return (
    <>
      <Card>
        <CardHeader action={
          <>
            <Button sx={{ bgcolor: "rgb(0, 49, 76)", px: 2, py: 2 }} onClick={() => openModal()}>
              <Typography variant="h4" sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, color: "#ffffff" }}>
                {t('create product')}
              </Typography>
            </Button>
            <TextField
              placeholder={t('search') || ''}
              variant="filled"
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
              sx={{ bgcolor: "rgb(245, 249, 252)", width: 200 }}
            />
          </>
        } title={t("my products")} />
        <Grid sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Table>
            <TableHead>
              <TableRow >
                <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} > {t('product Name')}</Typography> </TableCell>
                <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} >{t('product description')}</Typography> </TableCell>
                <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} >{t('service link')}</Typography> </TableCell>
                <TableCell><Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700 }} >{t('Action')}</Typography> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item: any, index: any) => {
                return (
                  <TableRow hover key={index} >
                    <TableCell>
                      <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 14, fontWeight: 700, color: "#939393" }}>
                        {t(item.folderName)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 14, fontWeight: 700, color: "#939393" }}>
                        {t(item.description)}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ cursor: "pointer", }} onClick={() => window.open(item.link)}>
                        <SvgIcon>
                          <LinkIcon sx={{ color: "#939393" }} />
                        </SvgIcon>
                      </Box>
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
              }) }
            </TableBody>
          </Table>
          <Box sx={{ flex: "flex", width: "100%", justifyContent: 'flex-start' }}>
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
        </Grid>
      </Card>
      {modalState && (
        <TransitionModal state={modalState} handleClose={closeModal}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "Center" }}>
            <Typography sx={{ fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 700, color: "#000000", mb: 4 }}>
              {t('Add a new product')}
            </Typography>
            <form>
              <Grid sx={{ px: 2 , mb: 2, width: "100%", direction: "ltr" }}>
                <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('folder name')}</Typography>
                <TextField
                  fullWidth
                  name="projectName"
                  placeholder={t('folder name') || ''}
                  onChange={(event) => setFolderName(event.target.value)}
                  value={folderName}
                />
              </Grid>
              <Grid sx={{ px: 2 , mb: 2, width: "100%", direction: "ltr" }}>
                <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('whats your blog talking about')}</Typography>
                <TextField
                  fullWidth
                  placeholder={t('big description for blog') || ""}
                  name="description"
                  multiline
                  rows={4}
                  sx={{ width: "100%" }}
                  onChange={(event) => setDescription(event.target.value)}
                  value={description}
                />
              </Grid>
              <Grid sx={{ px: 2 , mb: 2, width: "100%" }}>
                <Typography variant="h6" sx={{ mx: 2, fontFamily: 'A Jannat LT', fontSize: 12, fontWeight: 700, mb: 2}}>{t('Project link')}</Typography>
                <TextField
                  fullWidth
                  label={t('URL')}
                  name="projectURL"
                  onChange={(event) => setProjectLink(event.target.value)}
                  value={projectLink}
                />
              </Grid>
              <Grid sx={{ px: 2 , mb: 2, width: "100%" }} >
                <Button sx={{ width: "100%", bgcolor: "#00314C" }} type="submit">
                  <Typography variant="h6" sx={{ my: 1, color: "#ffffff", fontFamily: 'A Jannat LT', fontSize: 16, fontWeight: 700, }}>{t('create')}</Typography>
                </Button>
              </Grid>
            </form>
          </Box>
        </TransitionModal>
      )}
    </>
  )
}