import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Checkbox } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(tid, aid, cid, sdate, edate, tp, bs) {
  return { tid, aid, cid, sdate, edate, tp, bs };
}

let rows = [
  createData(
    22,
    "Sunshine Travel (70001)",
    "Neubasler (77)",
    "Jun 24, 2019",
    "Jun 28, 2019",
    "750.00 USD",
    "A"
  ),

  createData(
    106,
    "Your Choice (70005)",
    "Buchholm (5)",
    "Jun 13, 2019",
    "Jul 16, 2019",
    "650 AFN",
    "A"
  ),
  createData(
    103,
    "Travel from Walldorf (70010)",
    "Buchholm (11)",
    "Jun 10, 2019",
    "Jul 14, 2019",
    "800 AFN",
    "X"
  ),
];

export default function SimpleTable(props) {
  const classes = useStyles();

  const filter = () => {
    let newrows = [];
    if (props.go) {
      for (let i = 0; (i = rows.length); i++) {
        for (let j = 0; props.selected.items.length; j++) {
          if (rows[i] === props.selected.items[j]) newrows.push(rows[i]);
        }
      }

      console.log("FILTER");
    }
    console.log(rows);
    return rows;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Travel ID</TableCell>
            <TableCell>Agency ID</TableCell>
            <TableCell>Customer ID</TableCell>
            <TableCell>Starting Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Total Price</TableCell>
            <TableCell>Booking Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.flights.flight.map((row) => (
            <TableRow hover role="checkbox" key={row.tid}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.tid}
              </TableCell>
              <TableCell>{row.aid}</TableCell>
              <TableCell>{row.cid}</TableCell>
              <TableCell>{row.sdate}</TableCell>
              <TableCell>{row.edate}</TableCell>
              <TableCell>{row.tp}</TableCell>
              <TableCell>{row.bs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
