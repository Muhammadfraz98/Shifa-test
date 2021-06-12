import React,{useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default function CustomizedTables({}) {
  const classes = useStyles();
  var [records, setRecord] = useState([]);

  function onhandleDelete(id){
    console.log(id,"button is clicked id")
    for(var i = 0; i<records.length; i++){
        localStorage.removeItem(records[id])
        
    }
  }
  
  function onhandleUpdate(id){

  }

  useEffect(() => {
      
  })

  useEffect(() => {
    records = JSON.parse(localStorage.getItem("AllRecords"))
    console.log("AllRecords: ", records)
    setRecord(records)
  },[])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Birthday</StyledTableCell>
            <StyledTableCell align="right">CNIC</StyledTableCell>
            <StyledTableCell align="right">Father Name</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table">
          {records.map((record, index) => (
            <StyledTableRow key={index} >
              <StyledTableCell component="th" scope="row">{record.name}</StyledTableCell>
              <StyledTableCell align="right">{record.date}</StyledTableCell>
              <StyledTableCell align="right">{record.cnic}</StyledTableCell>
              <StyledTableCell align="right">{record.fathername}</StyledTableCell>
              <StyledTableCell align="right">{record.address}</StyledTableCell>
              <StyledTableCell align="right">
                  <Button  variant="contained" color="primary" onCLick={()=>onhandleUpdate(index)}>Edit</Button>
                  <Button  variant="contained" color="secondary" onClick={()=>onhandleDelete(index)}>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
