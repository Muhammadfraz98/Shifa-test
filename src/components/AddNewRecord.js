import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from "react-router-dom";
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const history = useHistory();
  const classes = useStyles();
  

  const [recordArray, setRecordArray] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cnic, setCnic] = useState('');
  const [fathername, setFatherName] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    var record= localStorage.getItem("AllRecords")
    console.log("record data from local storage:",record)
  })

  //Adding New Data
  const AddData = e => {
    e.preventDefault()
    const data={name: name, date, cnic, fathername, address}
    if(name.length> 0  && date.length>0 && cnic.length>0 && fathername.length > 0 && address.length>0) {
      console.log("Data:",data)
      var recievedData = data;
      console.log("recievedData:" ,recievedData)
      // localStorage.setItem("record", data);
      recordArray.push(data)
      localStorage.setItem("AllRecords", JSON.stringify(recordArray));
    }
  } 

  //TODO UseFormik for forms

  function handleClick() {
      history.push("/home");
    }

  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add New Record
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="date"
                variant="outlined"
                label="Birthday"
                type="date"
                required
                defaultValue="yyyy-mm-dd"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={e => setDate(e.target.value)}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="cnic"
                label="CNIC"
                name="cnic"
                autoComplete="CNIC"
                onChange={e => setCnic(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Father Name"
                label="Father Name"
                id="fathername"
                autoComplete="current-password"
                onChange={e => setFatherName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="Address"
                name="Address"
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                onChange={e => setAddress(e.target.value)}
                
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={AddData}
          >
            Add Record
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
           <ArrowLeftIcon /> Go Back
          </Button>
        </form>
      </div>
    </Container>
  );
}