import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "../Style/useStyles";

import manageStateFunctions from "../Utils/ManageStateFunctions";
import FilterBySearch from "./FilterBySearch";
import SortTheList from "./SortTheList";

export default function ListOfWorkers(props) {
  const classes = useStyles();

  function removeFromArr(index) {
    // To delete without holes from an array I can use a "Array.prototype.splice()" , in case the array is a State it is better to use a filter prototype ..

    const newArrAfterFilter = manageStateFunctions.newArrAfterRemove(
      props.arrWorker,
      index
    );

    // Update the array after deleting an item ..
    props.setArrWorker(newArrAfterFilter);

    // Keep the data in session storage for search input ..
    props.setRefresh((pre) => !pre);
  }

  if (props.arrWorker.length > 0) {
    return (
      <>
        <div className="option">
          <FilterBySearch
            setArrWorker={props.setArrWorker}
            arrWorker={props.arrWorker}
          />
        </div>
        <br />
        <div className="option">
          <SortTheList
            setArrWorker={props.setArrWorker}
            arrWorker={props.arrWorker}
            setRefresh={props.setRefresh}
          />
        </div>

        <div className={classes.root}>
          {props.arrWorker.map((item, index) => {
            return (
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
                            {"Name : " + item.Name}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {"Age : " + item.Age}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          onClick={() => {
                            removeFromArr(index);
                          }}
                        >
                          <Typography
                            variant="body2"
                            style={{ cursor: "pointer" }}
                          >
                            <DeleteIcon />
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          Worker ID: {item.Id}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <br />
        <hr />
        <h3 style={{ textAlign: "center", fontFamily: "system-ui" }}>
          No employees have been added yet ..
        </h3>
      </>
    );
  }
}
