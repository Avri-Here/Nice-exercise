import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "../../Style/useStyles";
import PropTypes from "prop-types";
import { useState } from "react";

import FilterBySearch from "../SortOrFilter/FilterBySearch";
import SortTheList from "../SortOrFilter/SortByNameAge";

import manageStateFunctions from "../../Utils/ManageStateFunctions";

const ListOfWorkers = (props) => {
  const classes = useStyles();

  const [filterOrsort, setFilterOrsort] = useState({
    type: "default",
    by: "default",
  });

  const removeFromArr = (index) => {
    // To delete without holes from an array I can use a "Array.prototype.splice()" , in case the array is a State it is better to use a filter prototype ..
    const newArrAfterFilter = manageStateFunctions.newArrAfterRemove(
      props.arrWorker,
      index
    );

    // Update the array after deleting an item ..
    props.saveArrWorker(newArrAfterFilter);
  };

  function RenderListOfEmployees(params) {
    const { type, by } = params.filterOrsort;
    // When sorting by name or age or when searching for an employee, the original array does not change, only the display ..
    return manageStateFunctions
      .filterOrsort(props.arrWorker, type, by)
      .map((item, index) => (
        <div key={item.photoUser}>
          <br />
          <Paper key={item.photoUser} className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={item.photoUser}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {"Name : " + item.name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {"Age : " + item.age}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    onClick={() => {
                      removeFromArr(index);
                    }}
                  >
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      <DeleteIcon />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Worker ID: {item.id}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ));
  }

  if (props.arrWorker.length > 0) {
    return (
      <>
        <div className="option">
          <FilterBySearch setFilterOrsort={setFilterOrsort} />
        </div>
        <br />
        <div className="option">
          <SortTheList setFilterOrsort={setFilterOrsort} />
        </div>

        <h6 style={{ textAlign: "center" }}>
          {filterOrsort.type !== "SearchIn" &&
            "List sorted by : " + filterOrsort.by}
        </h6>

        <RenderListOfEmployees
          filterOrsort={filterOrsort}
          arrWorker={props.arrWorker}
        />
      </>
    );
  }
  return null;
}


ListOfWorkers.propTypes = {
  arrWorker: PropTypes.array,
  saveArrWorker: PropTypes.func,
};


export default ListOfWorkers;
