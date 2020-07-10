import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import FilterNoneOutlinedIcon from "@material-ui/icons/FilterNoneOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AgencyTable from "./AgencyTable";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import Chip from "@material-ui/core/Chip";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles({
  dialog: {
    maxWidth: "1000px",
  },
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  search: {
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    width: 200,
  },
});

const AgencyDialog = (props) => {
  const classes = useStyles();

  const displaySelectedItems = () => {
    return props.selected.items.map((item) => (
      <Chip
        label={item}
        deleteIcon={<CancelIcon />}
        onDelete={() => props.handleDelete(item)}
      />
    ));
  };

  return (
    <div className={classes.dialog}>
      <Dialog maxWidth="1000px" fullWidth="true" open={props.adialog}>
        <div className={classes.root}>
          <TextField
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

          <Button color="primary" onClick={props.agencyGoButton}>
            Go
          </Button>
        </div>
        <div className={classes.root}>
          <div>
            <p>Agency View - CDS Data Model</p>
            <div className={classes.search}>
              <p>Agency ID:</p>
              <TextField
                className={classes.input}
                id="aid"
                variant="outlined"
                onChange={(e) =>
                  props.setAgencySearchFields("id", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className={classes.search}>
              <p>Agency name:</p>
              <TextField
                className={classes.input}
                id="aname"
                variant="outlined"
                onChange={(e) =>
                  props.setAgencySearchFields("name", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className={classes.search}>
              <p>Street:</p>
              <TextField
                className={classes.input}
                id="street"
                variant="outlined"
                onChange={(e) =>
                  props.setAgencySearchFields("street", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className={classes.search}>
              <p>Postal Code:</p>
              <TextField
                className={classes.input}
                id="postalcode"
                variant="outlined"
                onChange={(e) =>
                  props.setAgencySearchFields("postalcode", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className={classes.search}>
              <p>City:</p>
              <TextField
                className={classes.input}
                id="city"
                variant="outlined"
                onChange={(e) =>
                  props.setAgencySearchFields("city", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className={classes.search}>
              <p>Country Key:</p>
              <TextField
                className={classes.input}
                id="countrykey"
                variant="outlined"
                onChange={(e) =>
                  props.setAgencySearchFields("country", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className={classes.search}>
              <p>Phone No.:</p>
              <TextField
                className={classes.input}
                id="phone"
                variant="outlined"
                onChange={(e) =>
                  props.setAgencySearchFields("phone", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className={classes.search}>
              <p>E-Mail Address:</p>
              <TextField
                className={classes.input}
                id="email"
                variant="outlined"
                onChange={(e) =>
                  props.setAgencySearchFields("email", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
                    </IconButton>
                  ),
                }}
              />
            </div>
            <div className={classes.search}>
              <p>Web Address:</p>
              <TextField
                className={classes.input}
                id="web"
                variant="outlined"
                onChange={(e) =>
                  props.setAgencySearchFields("web", e.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <FilterNoneOutlinedIcon></FilterNoneOutlinedIcon>
                    </IconButton>
                  ),
                }}
              />
            </div>
          </div>
          <div>
            <p>Country</p>
            <div className={classes.search}>
              <p>Country Key:</p>
              <TextField
                className={classes.input}
                id="countrykey"
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
            <div className={classes.search}>
              <p>Country Name:</p>
              <TextField
                className={classes.input}
                id="countryname"
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
            <div className={classes.search}>
              <p>ISO Code 3 Char</p>
              <TextField
                className={classes.input}
                id="isochar"
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
            <div className={classes.search}>
              <p>ISO Code Num. 3:</p>
              <TextField
                className={classes.input}
                id="isonum"
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
          </div>
        </div>
        <div>
          <AgencyTable
            agencies={props.agencies}
            agency={props.selected.agency}
            checkedAgency={props.checkedAgency}
            checkBoxHandle={props.checkBoxHandle}
          ></AgencyTable>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Selected items ({props.selected.items.length})
            </AccordionSummary>
            <AccordionDetails>{displaySelectedItems()}</AccordionDetails>
          </Accordion>
          <Button onClick={props.okButton}>OK</Button>
          <Button onClick={props.adialogOpen}>Cancel</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default AgencyDialog;
