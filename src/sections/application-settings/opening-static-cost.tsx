import { Stack, Typography, Grid, TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from "react-i18next";
import InputAdornment from '@mui/material/InputAdornment';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

interface Props {
    opening_cost?: number;
    setShippingOrderSettings: React.Dispatch<React.SetStateAction<undefined>>;
}

const OpeningStaticCost: React.FC<Props> = ({ opening_cost = 0, setShippingOrderSettings }) => {
    const title = 'Opening static cost';
    const { t } = useTranslation();

    return (
        <Grid xs={12} md={6} lg={6}>
            <Stack sx={{ p: { xs: 2, sm: 3 }, gap: 2 }}>
                <Typography variant="h6">{t(title)}</Typography>
                <TextField
                    value={opening_cost}
                    onChange={()=>null}
                    type="number"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <MonetizationOnOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                    id="outlined-basic"
                    label={t('Price')}
                    variant="outlined"
                    sx={{ maxWidth: 400 }}
                />
            </Stack>
        </Grid>
    );
};

export default OpeningStaticCost;
