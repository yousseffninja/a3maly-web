import { Box, MenuItem, Select, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Chart } from '@/components/chart';
import { alpha } from '@mui/material/styles';

const useChartOptions = () => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
      type: 'solid'
    },
    grid: {
      borderColor: "#E7E7E7",
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      show: false
    },
    plotOptions: {
      bar: {
        columnWidth: '40px'
      }
    },
    stroke: {
      curve: 'straight'
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };
};



const GeneratorChat = () => {
  const {t}= useTranslation();
  const years = ['2023', '2022', '2021', '2020', '2019', '2018', '2017'];

  const [year, setYear] = React.useState('2021');
  const chartOptions = useChartOptions();

  const renamedSeries = [
    {
      name: t('Sales'),
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    // Add more data series as needed
  ];

  // @ts-ignore
  return (
    <>
      <Box sx={{ bgcolor: "#ffffff" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 2, mt: 2 }}>
          <Typography variant="h6" sx={{ fontFamily: 'A Jannat LT', }}>{t("generate words")} </Typography>
          <Select
            name="Year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Chart
          height={350}
          // @ts-ignore
          options={chartOptions}
          series={renamedSeries}
          type="line"
          width="100%"
        />
      </Box>
    </>
  );
}


export default GeneratorChat;