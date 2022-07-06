import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const [apparel, setApparel] = useState({
    name: "",
    appareltype: "",
    size: "",
    payment: "",
  });

  const createApparel = () => {
    axios.post("http://localhost:5000/apparel", apparel).then(() => {
      window.location.reload(false);
    });
  };
  return (
    <>
      <h2>Create Order</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={apparel.name}
          onChange={(event) => {
            setApparel({ ...apparel, name: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Apparel Type"
          variant="outlined"
          value={apparel.appareltype}
          onChange={(event) => {
            setApparel({ ...apparel, appareltype: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Size"
          variant="outlined"
          value={apparel.size}
          onChange={(event) => {
            setApparel({ ...apparel, size: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Payment Type"
          variant="outlined"
          value={apparel.payment}
          onChange={(event) => {
            setApparel({ ...apparel, payment: event.target.value });
          }}
        />
        <Button variant="contained" color="primary" onClick={createApparel}>
          Enter Order
        </Button>
      </form>
    </>
  );
}
