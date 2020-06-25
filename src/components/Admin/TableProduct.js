import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";


var rows = [];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 600,
  },
});
const columns = [
    
    { id: "name", label: "Tên sản phẩm", minWidth: 120 },
    {
      id: "price",
      label: "Giá gốc",
      minWidth: 120,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "pirce2",
      label: "Giá đã giảm",
      minWidth: 120,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "description",
      label: "Mô tả",
      minWidth: 222,
      align: "left",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];
export default function TableProduct(props) {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key="src" align="left" style={{minWidth:120}}>
                Hình ảnh
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell key="action" align="center" style={{ minWidth: 200 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell key="src" align="right">
                        <img src={{uri:row.src}} alt="" width={10} height={10}/>
                       
                    </TableCell>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell key="action" align="right">
                      <Button
                        style={{ margin: "3px" }}
                        variant="contained"
                        size="small"
                        color="primary"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          let index = rows.findIndex(
                            (item) => item.id === row.id
                          );
                          rows.splice(index, 1);
                          setState(...rows);
                        }}
                        style={{ margin: "3px" }}
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
