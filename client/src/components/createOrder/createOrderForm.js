import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import "./createOrderForm.css";

import axios from "axios";

function CreateOrderForm() {
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
    <div className="create-div">
      <h2>Create Order Form</h2>
      <Box>
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
          onChange={(event) => {
            setApparel({ ...apparel, name: event.target.value });
          }}
        />
      </Box>
      <br></br>
      <Box>
        <FormControl sx={{ minWidth: "220px" }}>
          <InputLabel id="demo-simple-select-label">Apparel Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={apparel.appareltype}
            label="Apparel Type"
            onChange={(event) => {
              setApparel({ ...apparel, appareltype: event.target.value });
            }}
          >
            <MenuItem value={""}>=</MenuItem>
            <MenuItem value={"Red Hoodie"}>Red Hoodie</MenuItem>
            <MenuItem value={"Mens Tee"}>Mens Tee</MenuItem>
            <MenuItem value={"Womens Tee"}>Womens Tee</MenuItem>
            <MenuItem value={"Womens Crop"}>Womens Crop</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br></br>
      <Box>
        <FormControl sx={{ minWidth: "220px" }}>
          <InputLabel id="demo-simple-select-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={apparel.size}
            label="Size"
            onChange={(event) => {
              setApparel({ ...apparel, size: event.target.value });
            }}
          >
            <MenuItem value={""}>=</MenuItem>
            <MenuItem value={"Small"}>Small</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Large"}>Large</MenuItem>
            <MenuItem value={"XLarge"}>XLarge</MenuItem>
            <MenuItem value={"XXLarge"}>XXLarge</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br></br>
      <Box>
        <FormControl sx={{ minWidth: "220px" }}>
          <InputLabel id="demo-simple-select-label">Payment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={apparel.payment}
            label="Payment Type"
            onChange={(event) => {
              setApparel({ ...apparel, payment: event.target.value });
            }}
          >
            <MenuItem value={""}>=</MenuItem>
            <MenuItem value={"Card"}>Card</MenuItem>
            <MenuItem value={"Venmo"}>Venmo</MenuItem>
            <MenuItem value={"Cash"}>Cash</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
      <Button className="create_button" variant="contained" color="primary" onClick={createApparel}>
        Enter Order
      </Button>
    </div>
  );
}

export default CreateOrderForm;
