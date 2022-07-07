import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowOrders() {
  const classes = useStyles();
  const [apparelList, setApparelList] = useState([]);
  const deleteApparel = (id) => {
    axios.delete(`http://localhost:5000/apparel/${id}`).then(() => {
      window.location.reload(false);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/apparel").then((allApparel) => {
      setApparelList(allApparel.data);
    }, []);
  });

  return (
    <>
      <h2>All Orders</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Apparel Type</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Payment Type</TableCell>
              <TableCell align="right">Delete Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {apparelList.map((apparel, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {apparel.name}
                </TableCell>
                <TableCell align="right">{apparel.appareltype}</TableCell>
                <TableCell align="right">{apparel.size}</TableCell>
                <TableCell align="right">{apparel.payment}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    className={classes.margin}
                    onClick={() => {
                      deleteApparel(apparel._id);
                    }}
                  >
                    <DeleteIcon color="Primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
