import {
  Box,
  Typography,
  Grid, Button
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Blue from '../../assets/subscription/blue.png';
import Green from '../../assets/subscription/green.png';
import CheckIcon from '@mui/icons-material/Check';
import CorrectIcon from '@/assets/icons/correctIcon';

export const SubscrptionBuy = () => {
  const {t}= useTranslation();
  return (
    <>
      <Box sx={{ mt: 8 }}>
        <Grid sx={{ display: "flex", justifyContent: "center", mb: 2 }} >
          <Typography variant="h3">{t('Plans available')}</Typography>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center", mb: 8 }} >
          <Typography variant="h6" sx={{ color: "#757575" }}>{t('Subscribe to one of our plans to access all features and benefits')}</Typography>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "space-evenly", mb: 3 }} >
          <Box sx={{ width: "48%", border: "1px solid #757575", borderRadius: 3 }}>
            <Grid sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Typography variant="h3">{t('The first plan')}</Typography>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" sx={{ color: "#757575" }}>{t('a3maly plus')}</Typography>
            </Grid>
            <Box sx={{ background: `url(${Blue.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "Cover", }}
            >
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                my: 5,
              }}>
                <Grid sx={{ display: "flex", flexDirection: "row" }}>
                  <Grid sx={{ mx: 2 }}>
                    <Typography variant="h1" sx={{ color: "#0D9AD2" }}>50</Typography>
                    <Typography variant="h6" sx={{ pl: 3, color: "#757575" }}>بالشهر</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="h1" sx={{ color: "#0D9AD2" }}>ريال</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{

                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}>
                <Box sx={{ bgcolor: "#ffffff", border: "1px solid #757575", borderRadius: 3, width: "80%", mb: 5  }}>
                  <Grid sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h5">75000 كلمة</Typography>
                  </Grid>
                  <Grid sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                    <Typography variant="subtitle1">اكثر من 70 خيار لكتابه المحتوي</Typography>
                  </Grid>
                  <Box>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <Button sx={{ bgcolor: "#00314C", color: "#ffffff" }}>
                  <Typography>{t('subscribe now')}</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "48%", border: "1px solid #757575", borderRadius: 3 }}>
            <Grid sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Typography variant="h3">{t('The second plan')}</Typography>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" sx={{ color: "#757575" }} >{t('a3maly pro')}</Typography>
            </Grid>
            <Box sx={{ background: `url(${Green.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "Cover", }}
            >
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                my: 5,
              }}>
                <Grid sx={{ display: "flex", flexDirection: "row" }}>
                  <Grid sx={{ mx: 2 }}>
                    <Typography variant="h1" sx={{ color: "#69B744" }}>50</Typography>
                    <Typography variant="h6" sx={{ pl: 3, color: "#757575" }}>بالشهر</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="h1" sx={{ color: "#69B744" }}>ريال</Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{

                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}>
                <Box sx={{ bgcolor: "#ffffff", border: "1px solid #757575", borderRadius: 3, width: "80%", mb: 5  }}>
                  <Grid sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h5">75000 كلمة</Typography>
                  </Grid>
                  <Grid sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                    <Typography variant="subtitle1">اكثر من 70 خيار لكتابه المحتوي</Typography>
                  </Grid>
                  <Box>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "row", mx: 2 }}>
                      <CorrectIcon />
                      <Typography sx={{ ml: 1 }}>اكثر من 70 خيار لكتابه المحتوي</Typography>
                    </Grid>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button sx={{ bgcolor: "#00314C", color: "#ffffff" }}>
                  <Typography>{t('subscribe now')}</Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
}