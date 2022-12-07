import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SortTheList({ setFilterOrsort }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Methods of material-ui ..
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Methods of material-ui ..
  const handleClose = () => {
    setAnchorEl(null);
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
            setFilterOrsort({ type: "sort", by: "age" });
            handleClose();
          }}
        >
          Sort by age ..
        </MenuItem>
        <MenuItem
          onClick={() => {
            setFilterOrsort({ type: "sort", by: "name" });
            handleClose();
          }}
        >
          Sort by name ..
        </MenuItem>

        <MenuItem
          onClick={() => {
            setFilterOrsort({ type: "default", by: "default" });
            handleClose();
          }}
        >
          Sort By default ..
        </MenuItem>
      </Menu>
    </div>
  );
}
