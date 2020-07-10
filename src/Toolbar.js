import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FilterNoneOutlinedIcon from "@material-ui/icons/FilterNoneOutlined";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AgencyDialog from "./AgencyDialog";
import width from "@material-ui/system";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
  },

  inputs: {
    justifyContent: "space-between",
  },

  buttons: {
    alignContent: "right",
  },
});

const Toolbar = (props) => {
  const agencysearch = () => {
    if (props.asearch) {
      return props.selected.items;
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inputs}>
        <TextField
          width="25%"
          id="search"
          label="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon></SearchIcon>
              </IconButton>
            ),
          }}
        />
        <TextField
          id="aid"
          variant="outlined"
          value={agencysearch()}
          InputProps={{
            endAdornment: (
              <IconButton onClick={props.adialogOpen}>
                <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
              </IconButton>
            ),
          }}
        />
        <TextField
          id="cid"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <IconButton>
                <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
              </IconButton>
            ),
          }}
        />
      </div>
      <div>
        <Button>Adapt Filters</Button>
        <Button onClick={props.goButton} color="primary">
          Go
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
