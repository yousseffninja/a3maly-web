import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useState } from 'react';
interface Option {
  key: string;
  value: string;
}
export const OrdersSearch = (props: any) => {
  const {t}= useTranslation();
  const { filter, onSearchChange , options ,handleSelect,anchorEl,setAnchorEl,handleClose,selectedOption,handleClear} = props;


  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };




  return (
  <Card sx={{ p: 2 }}>
    <OutlinedInput
      defaultValue=""
      onChange={onSearchChange}
      fullWidth
      placeholder={`${t("Search")}`}
      startAdornment={(
        <InputAdornment position="start">
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <MagnifyingGlassIcon />
          </SvgIcon>
        </InputAdornment>
      )}
      sx={{ maxWidth: 500 , mr:20}}
    />
        <Button onClick={handleClick}>
            {selectedOption ? t(selectedOption.value) : t('Search By Status')}
          </Button>
           {selectedOption && (
        <Button onClick={handleClear} color="error">
           <SvgIcon fontSize="small">
                  <CancelPresentationIcon />
                </SvgIcon>
        </Button>
           )}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options && options.map((option:Option) => (
              <MenuItem key={option.value} onClick={() => handleSelect(option)}>
                {t(option.value)}
              </MenuItem>
            ))}
          </Menu>
  </Card>
  );
};

OrdersSearch.propTypes = {
  filter: PropTypes.string,
  options: PropTypes.any,
  onSearchChange: PropTypes.func,
  handleSelect: PropTypes.func,
  anchorEl: PropTypes.any
  ,setAnchorEl: PropTypes.any
  ,handleClear: PropTypes.func
  ,selectedOption: PropTypes.any
  ,handleClose: PropTypes.any
};
