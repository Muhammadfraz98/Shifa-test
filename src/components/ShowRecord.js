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
import EditModal from './EditRecord';


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


export default function CustomizedTables() {
  const classes = useStyles();
  const [records, setRecord] = useState([]);
  const [show,setShowModal]=useState(false);
  const [user,setUser] = useState({});

  function onhandleDelete(cnic){
    console.log("index:",cnic);
    let newArr = records.filter((value)=> value.cnic !== cnic ? value:'' )
    setRecord(newArr);
    console.log("newArr >>",newArr) 
    localStorage.setItem("AllRecords", JSON.stringify(newArr));
   }
  

  let showModal= (name,date,cnic,fathername,address)=>{
    const user={
      name,date,cnic,fathername,address
    }
    console.log("user >>",user);
    setUser(user);
    setShowModal(true)};
  

  let closeModal=()=>{setShowModal(false)};

useEffect(()=>{
  console.log({records});
},[records])

  useEffect(() => {
    let records = JSON.parse(localStorage.getItem("AllRecords"))
    console.log("AllRecords: ", records)
    setRecord(records)
  },[localStorage.getItem("AllRecords")])

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
        <TableBody>
          {records && records.map(({name,date,cnic,fathername,address},index) => (
            <StyledTableRow key={index} >
              <StyledTableCell component="th" scope="row">{name}</StyledTableCell>
              <StyledTableCell align="right">{date}</StyledTableCell>
              <StyledTableCell align="right">{cnic}</StyledTableCell>
              <StyledTableCell align="right">{fathername}</StyledTableCell>
              <StyledTableCell align="right">{address}</StyledTableCell>
              <StyledTableCell align="right">
                  <Button  variant="contained" color="primary" 
                    onClick={()=>showModal(name,date,cnic,fathername,address)}>
                    Edit</Button>
                  <Button  variant="contained" color="secondary" onClick={()=>onhandleDelete(cnic)}>Delete</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          <EditModal show={show} onHide={closeModal} user={user} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
