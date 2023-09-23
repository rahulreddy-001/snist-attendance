import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { fDate, getS } from "./calc";

export default function RecordTable({ months }) {
  months = months.reverse();
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return (
      <React.Fragment>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }}>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            style={{ paddingBottom: 0, paddingTop: 0 }}
          >
            <strong>{row.name}</strong>
          </TableCell>
          <TableCell align="right" style={{ paddingBottom: 0, paddingTop: 0 }}>
            <strong>{row.p}</strong>
          </TableCell>
          <TableCell align="right" style={{ paddingBottom: 0, paddingTop: 0 }}>
            <strong>{row.a}</strong>
          </TableCell>
          <TableCell align="right" style={{ paddingBottom: 0, paddingTop: 0 }}>
            <strong>{row.t}</strong>
          </TableCell>
          <TableCell align="right" style={{ paddingBottom: 0, paddingTop: 0 }}>
            <strong>{row.pe}</strong>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  {row.name}
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: 900 }}>Date</TableCell>
                      <TableCell style={{ fontWeight: 900 }}>Day</TableCell>
                      <TableCell style={{ fontWeight: 900 }} align="right">
                        Hour 1
                      </TableCell>
                      <TableCell style={{ fontWeight: 900 }} align="right">
                        Hour 2
                      </TableCell>
                      <TableCell style={{ fontWeight: 900 }} align="right">
                        Hour 3
                      </TableCell>
                      <TableCell style={{ fontWeight: 900 }} align="right">
                        Hour 4
                      </TableCell>
                      <TableCell style={{ fontWeight: 900 }} align="right">
                        Hour 5
                      </TableCell>
                      <TableCell style={{ fontWeight: 900 }} align="right">
                        Hour 6
                      </TableCell>
                      <TableCell style={{ fontWeight: 900 }} align="right">
                        Hour 7
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {row.stats.map((srow) => (
                      <TableRow key={srow[0]}>
                        <TableCell component="th" scope="row">
                          <strong>{srow[0]}</strong>
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {fDate(srow[0])}
                        </TableCell>
                        <TableCell align="center">{getS(srow[1])}</TableCell>
                        <TableCell align="center">{getS(srow[2])}</TableCell>
                        <TableCell align="center">{getS(srow[3])}</TableCell>
                        <TableCell align="center">{getS(srow[4])}</TableCell>
                        <TableCell align="center">{getS(srow[5])}</TableCell>
                        <TableCell align="center">{getS(srow[6])}</TableCell>
                        <TableCell align="center">{getS(srow[7])}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  return (
    <Box sx={{ fontWeight: "bold" }}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style={{ fontWeight: 900, fontSize: 15 }}>
                Month
              </TableCell>
              <TableCell
                style={{ fontWeight: 900, fontSize: 15 }}
                align="right"
              >
                Present
              </TableCell>
              <TableCell
                style={{ fontWeight: 900, fontSize: 15 }}
                align="right"
              >
                Absent
              </TableCell>
              <TableCell
                style={{ fontWeight: 900, fontSize: 15 }}
                align="right"
              >
                Total
              </TableCell>
              <TableCell
                style={{ fontWeight: 900, fontSize: 15 }}
                align="right"
              >
                Percentage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {months.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
