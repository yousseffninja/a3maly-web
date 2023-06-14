import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useTranslation } from "react-i18next";
const TimeInput = (props:any) => {
 const {value,HandleChange,totalMinutes=0} = props;
  const { t } = useTranslation();
  const [timeInput, setTimeInput] = useState('');

  useEffect(() => {
    const days = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
    const minutes = totalMinutes % 60;
    const formattedTime = `${days}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    setTimeInput(formattedTime);
  }, [totalMinutes]);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeInput(event.target.value);
    HandleChange(parseTimeToMinutes(event.target.value));
  };

  const parseTimeToMinutes = (time: string): number => {
    const [days, hours, minutes] = time.split(':').map(Number);
    return days * 24 * 60 + hours * 60 + minutes;
  };

  return (
    <TextField
      label={t("Enter Time (days:hours:minutes)")}
      value={timeInput}
      onChange={handleTimeChange}
      sx={{minWidth:"15em"}}
      InputProps={{
        inputProps: {
          pattern: '^\\d+:\\d{2}:\\d{2}$',
        },
      }}
      error={!timeInput.match(/^\d+:\d{2}:\d{2}$/)}
      helperText={
        !timeInput.match(/^\d+:\d{2}:\d{2}$/) &&
        t('Please enter time in the format (days:hours:minutes)')
      }
    />
  );
};

export default TimeInput;