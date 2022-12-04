import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useState } from "react";
import GetRandomPicture from "./Util/GetRandomPicture";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));

export default function FormInput(props) {
  const classes = useStyles();

  // Object for fields : name, age, ID ..
  const [inputs, setInputs] = useState({});

  // Function for changing the input fields in State ..
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  async function addToWorkerList(event) {
    event.preventDefault();
    // Get a random picture for worker and push the key into the object State ..
    inputs.photoUser = await GetRandomPicture();
    
    // Update the Array workers ..
    props.setArrWorker((oldArray) => [...oldArray, inputs]);

    setInputs({});
  }
  return (
    <>
      <form className="form" onSubmit={addToWorkerList}>
        <FormControl className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Name"
                name="Name"
                value={inputs.Name || ""}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
        </FormControl>
        <FormControl className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Age"
                name="Age"
                type="number"
                InputProps={{ inputProps: { min: 18, max: 80 } }}
                value={inputs.Age || ""}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
        </FormControl>
        <FormControl className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Id"
                name="Id"
                value={inputs.Id || ""}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </>
  );
}
