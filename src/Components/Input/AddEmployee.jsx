import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import AdbIcon from "@material-ui/icons/Adb";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { useState } from "react";

import manageStateFunctions from "../../Utils/ManageStateFunctions";
import getRandomPicture from "../../Utils/GetRandomPicture";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
  },
}));


// propTypes .. 
FormInput.propTypes = {
  arrWorker: PropTypes.array,
  saveArrWorker: PropTypes.func,
};

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

    // Get a random picture for worker and add the url into the object State ..
    inputs.photoUser = await getRandomPicture();

    // Checking if a similar ID already exists ? ..
    const uniqueId = manageStateFunctions.checkForDuplicates(
      props.arrWorker,
      inputs
    );
    // if exists Swal error ..
    if (!uniqueId) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong wite ID input !",
        footer: "<h6>Duplication ID .. </h6>",
      });
    } else {
      // Update the Array workers ..
      props.saveArrWorker([...props.arrWorker, inputs]);
    }

    // Reset the input fields ..
    setInputs({});
  }
  return (
    <>
      <form className="form" onSubmit={addToWorkerList} data-testid="form">
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
              <ChildFriendlyIcon />
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
              <AdbIcon />
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
          id="btnSend"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </form>
    </>
  );
}

// propTypes React..
