import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterByType from "./FilterByType";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ListOfWorkers(props) {
  const classes = useStyles();

  function removeFromArr(index) {
    // To delete without holes from an array you can use a "Array.prototype.splice()" , in case the array is a State it is better to use a filter prototype ..

    const newArrAfterFilter = props.arrWorker.filter((item, ind) => {
      return ind !== index;
    });
    // Update the array after deleting an item ..
    props.setArrWorker(newArrAfterFilter);
  }

  if (props.arrWorker.length > 0) {
    return (
      <div className={classes.root}>
        <FilterByType setArrWorker={props.setArrWorker} arrWorker={props.arrWorker} />
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
