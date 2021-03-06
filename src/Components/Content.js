import React from "react";
import InputField from "./InputField";
import { useMediaQuery } from "react-responsive";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: "Theme") =>
  createStyles({
    root: {
      backgroundColor: "#272c34",
      color: "white",
    },
  })
)(TableRow);

function createData(name: string, calories: string) {
  return { name, calories };
}

const rows = [
  createData("6Q18C18W14L5T", "FORERUNNER"),
  createData("7T5L1F5", "GRENADE"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 100,
  },
});

const Content = () => {
  const classes = useStyles();

  const isPortrait = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div
      className="Content"
      style={{
        width: isPortrait ? "90%" : "70%",
      }}
    >
      <h1>Calender Problem</h1>
      <p>
        After the "distraction" had spread sufficient chaos, Chief reaches back
        to the crashed ship, where Echo 419 informs that he received a
        transmission from a UNSC ship! Chief and 419 send a transmission to the
        frigate. The message was sent on 16/03/3008 which was a Monday is
        estimated to reach them on 1/04/3012.
        <br />
        <ul  className="list"
      style={{
       textAlign: "left"
      }}>
          <li>
            In the planet's calender a year has 10 months , a month has 5 weeks
            and a week has 5 days (namely Monday, Tuesday, Wednesday, Thursday,
            Friday).
          </li>
          <li>
            A leap year comes in 4 years and is completely divisible by 4. That
            year has one extra day in the last month i.e. the 10th month on the
            planet.
          </li>
        </ul>
        <br />
        Estimate at which day of the week the frigate will receive Chief's
        message.
        <br />
      </p>

      <br />

      <InputField />
    </div>
  );
};

export default Content;
