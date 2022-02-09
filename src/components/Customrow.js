import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import makeData from './makeData';
import Row from './Row'
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    width:100
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const data = React.useMemo(() => makeData(5, 5, 5), [])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <div>
            <TableRow>
          <StyledTableCell style={{paddingLeft:"40px"}}></StyledTableCell>
            <StyledTableCell style={{paddingLeft:"40px"}}>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell style={{paddingLeft:"40px"}} >Calories</StyledTableCell>
            <StyledTableCell style={{paddingLeft:"40px"}}>Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{paddingLeft:"40px"}}>Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell style={{paddingLeft:"40px"}} >Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
          </div>
          
        </TableHead>
        <TableBody>
          {data.map((row,i) => {
             const id=String(i)
             row["Id"]=id;
            
            return (
            <div key={i}>
              <div key={i}><Row key={i} row={row}/></div>
            </div>
           
          )})}
        </TableBody>
      </Table>
      <Button onClick={()=>console.log(data)}>Data</Button>
    </TableContainer>
  );
}
