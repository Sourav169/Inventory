import React ,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import  Dotenv from "dotenv"
import ModalEdit from './ModalEdit'
import Axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});

Dotenv.config()


/*const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];*/

export default function BasicTable() {
  const classes = useStyles();
  const [rows,setRows]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/customers/getAllCustomers",)
    .then((res)=>{
      console.log(res.data.con);
       setRows(res.data.content);
    }).catch((err)=>{
      console.log(err.data);
    })
  
   
  },[])
  const handledelet=(event,id)=>{
    event.preventDefault();
    const row1=rows.filter(item=>item.id!=id);
    setRows(row1)
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">ContactNo</TableCell>
            <TableCell align="right">LandLine</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.contactNumber}</TableCell>
              <TableCell>{row.landline}</TableCell>
              <TableCell> <button onClick={(event)=>handledelet(event,row.id)} style={{width:"80px",backgroundColor:"green",height:'40px'}}> Delete</button></TableCell>
              <ModalEdit firstName={row.firstName} lastName={row.lastName} email={row.email} adress={row.address} contact={row.contactNumber} landline={row.landline} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
