import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SortTheList(props) {
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
            props.setFilterBy({ run: "Name" });
            handleClose();
          }}
        >
          Sort by name A-Z ..
        </MenuItem>
        <MenuItem
          onClick={() => {
            props.setFilterBy({ run: "Age" });
            handleClose();
          }}
        >
          Sort by age ..
        </MenuItem>
        <MenuItem
          onClick={() => {
            props.setFilterBy({ run: "default" });
            handleClose();
          }}
        >
          filter By default ..
        </MenuItem>
      </Menu>
    </div>
  );
}
