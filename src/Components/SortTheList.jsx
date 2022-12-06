import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import manageStateFunctions from "../Utils/ManageStateFunctions";
export default function SortTheList(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Methods of material-ui ..
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (sortBy) => {
    setAnchorEl(null);

    // Sort the array by name || age ..
    props.setArrWorker(manageStateFunctions.SortArray(props.arrWorker, sortBy));

    // Save the sort after rendering in sessionStorage storage ..

    props.setRefresh((pre) => !pre);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        color="primary"
        variant="contained"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Sort by
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose("Name");
          }}
        >
          Sort by name A-Z ..
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose("Age");
          }}
        >
          Sort by age ..
        </MenuItem>
      </Menu>
    </div>
  );
}
