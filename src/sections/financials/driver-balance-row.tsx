import {
  TableRow,
  TableCell,
  Typography,
  Stack
} from '@mui/material';
import { MenuButton } from '@/components/button-menu';
import Link from 'next/link';
import { useRouter } from "next/router";
type TDriverBalanceProps = {
  drivers: any;
  selected: string[];
  onSelectOne?: (id: string) => void;
  onDeselectOne?: (id: string) => void;
  handleSuspend: (id: string) => void;
}

export const DriverBalanceRow = ({
  drivers,
  selected,
  onSelectOne,
  onDeselectOne,
  handleSuspend,
}: TDriverBalanceProps) => {
  const router = useRouter();

  const handleRoute = (event: React.ChangeEvent<HTMLInputElement>) => {
    router.push(`/offices/${drivers.id}`);
  };
  return (
    <TableRow hover key={drivers.id}>
      
      <TableCell>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Typography variant="subtitle2">{drivers.account}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Typography variant="subtitle2">{drivers.name}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Typography variant="subtitle2"><Link href={`/orders/${drivers.id}`}>{drivers.id}</Link></Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Typography variant="subtitle2" sx={{direction:"rtl"}}>{drivers?.phone}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Typography variant="subtitle2">{drivers.balance}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Typography variant="subtitle2">{new Date(drivers.created_at).toLocaleDateString()}</Typography>
        </Stack>
      </TableCell>
      <TableCell>
        <MenuButton
          items={[
            { label: "View", onClick: handleRoute },
            // { label: "Edit", onClick: handleRoute },
            // { label: "Delete", onClick: handleRoute },
            // { label: "Edit", onClick: handleRoute },
            // { label: "Delete", onClick: null },
          ]}
        />
      </TableCell>
    </TableRow>
  )
}