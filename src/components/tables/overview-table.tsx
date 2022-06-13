import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CurrencyFormat } from '../common/common-component';

interface Row {
  duration: string;
  amount: number;
}

interface Props {
  rows: Array<Row>
}

export function TableComponent(props: Props) {
  return (
    <TableContainer component={Paper} style={{ marginTop: "4px" }}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>Duration</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, index) => (
            <TableRow
              key={`${row.duration}-${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.duration}
              </TableCell>
              <TableCell align="left">
                <CurrencyFormat value={row.amount} prefix={'vnd'} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}