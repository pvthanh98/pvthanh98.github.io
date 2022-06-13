import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CurrencyFormat } from '../common/common-component';
import { CategoryExpenseRowData } from '../../interfaces/category-expense-row';

export function CategoryExpenseTableComponent(props: CategoryExpenseRowData) {
  return (
    <TableContainer component={Paper} style={{ marginTop: "4px" }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:"#c9c9c9"}}>
            <TableCell 
              align='left' 
              style={{fontWeight:"bold"}}
            >
              Category
            </TableCell>
            <TableCell 
              align="left" 
              style={{
                fontWeight:"bold",
              }}
            >
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, index) => (
            <TableRow
              key={`${row.category}-${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{
                backgroundColor: index % 2 ? "#f5f5f5" : "white"
              }}
            >
              <TableCell align="left" component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell align="left">
                <CurrencyFormat value={row.amount} prefix={'đ'} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}