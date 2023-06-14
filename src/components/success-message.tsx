import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";

type SuccessMessageType = {
  title: string;
  message: string;
  afterSuccess: any;
  open: boolean;
  setOpen: (value: boolean) => void;
};
const SuccessMessage = ({ message, afterSuccess, open, setOpen, title }: SuccessMessageType) => {
  const { t } = useTranslation();

  return (
    <div>
      <Dialog open={open} onClose={afterSuccess} fullWidth>
        <DialogTitle>{t(title)}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Stack direction="row" gap={1}>
              {t(message)}
              <CheckCircleIcon color="success" />
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={afterSuccess} autoFocus>
            {t("Ok")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SuccessMessage;
