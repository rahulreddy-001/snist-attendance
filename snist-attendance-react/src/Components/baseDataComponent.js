import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BaseData({ mainStats }) {
  return (
    <Box sx={{ fontWeight: "bold", marginBottom: 5 }}>
      <div className="tables">
        <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
          <Table
            sx={{ minWidth: 350, padding: 0 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ fontSize: 14 }}>
                  Percentage
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 900,
                    fontSize: 18,
                    color: mainStats.col,
                    width: "50%",
                  }}
                  align="center"
                >
                  {mainStats.pe + "%"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" style={{ fontSize: 14 }}>
                  {" "}
                  Present
                </TableCell>
                <TableCell
                  style={{ fontWeight: 900, fontSize: 14 }}
                  align="center"
                >
                  {mainStats.p}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" style={{ fontSize: 14 }}>
                  {" "}
                  Absent
                </TableCell>
                <TableCell
                  style={{ fontWeight: 900, fontSize: 14 }}
                  align="center"
                >
                  {mainStats.a}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" style={{ fontSize: 14 }}>
                  {" "}
                  Total
                </TableCell>
                <TableCell
                  style={{ fontWeight: 900, fontSize: 14 }}
                  align="center"
                >
                  {mainStats.t}
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
          <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ fontSize: 14 }}>
                  {" "}
                  Goal (65%)
                </TableCell>
                <TableCell
                  style={{ width: "50%", fontWeight: 900, fontSize: 14 }}
                  align="center"
                >
                  {mainStats.a65}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" style={{ fontSize: 14 }}>
                  {" "}
                  Goal (75%)
                </TableCell>
                <TableCell
                  style={{ fontWeight: 900, fontSize: 14 }}
                  align="center"
                >
                  {mainStats.a75}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" style={{ fontSize: 14 }}>
                  {" "}
                  Leave for 5 days
                </TableCell>
                <TableCell
                  style={{ fontWeight: 900, fontSize: 14 }}
                  align="center"
                >
                  {mainStats.l5 + "%"}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" style={{ fontSize: 14 }}>
                  {" "}
                  Leave for 10 days
                </TableCell>
                <TableCell
                  style={{ fontWeight: 900, fontSize: 14 }}
                  align="center"
                >
                  {mainStats.l10 + "%"}
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
}
