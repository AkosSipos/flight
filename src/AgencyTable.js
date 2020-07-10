import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AgencyTable(props) {
  const classes = useStyles();

  const handleClick = (event, row) => {
    const selectedIndex = props.agencies.agency.indexOf(row);

    let selected = props.agency;
    console.log(props.agencies.agency[selectedIndex]);
    if (selected.includes(props.agencies.agency[selectedIndex])) {
      for (var i = 0; i < selected.length; i++) {
        if (selected[i] === props.agencies.agency[selectedIndex]) {
          selected.splice(i, 1);
        }
      }
    } else {
      selected.push(props.agencies.agency[selectedIndex]);
    }
    //selected = rows[selectedIndex];

    //let newselected = selected.push(rows[selectedIndex]);
    console.log(selected);
    console.log(row.id);
    console.log(props.agencies.agency.indexOf(row));

    //let newSelected = [];
    {
      /*   if (selectedIndex === -1) {
      newSelected = newSelected.concat(props.selected, row);
    } else if (selectedIndex === 0) {
      newSelected = row;
    } else if (selectedIndex === props.selected.length - 1) {
      newSelected = newSelected.concat(props.selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        props.selected.slice(0, selectedIndex),
        props.selected.slice(selectedIndex + 1)
      );
    }
  */
    }
    console.log(selected);
    props.checkedAgency(selected);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Agency ID</TableCell>
            <TableCell>Agency Name</TableCell>
            <TableCell>Street</TableCell>
            <TableCell>Postal Code</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Country Key</TableCell>
            <TableCell>Phone No.</TableCell>
            <TableCell>E-Mail Address</TableCell>
            <TableCell>Web Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.agencies.agency.map((row) => (
            <TableRow hover role="checkbox" key={row.id}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={row.checked}
                  onClick={(e) => props.checkBoxHandle(row)}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>

              <TableCell>{row.name}</TableCell>
              <TableCell>{row.street}</TableCell>
              <TableCell>{row.postalcode}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.web}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
