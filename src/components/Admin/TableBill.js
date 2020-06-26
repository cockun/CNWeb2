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
import { callApi } from "../../utils/apiCaller";
import { Helper } from "../../utils/helper";
import swal from "sweetalert";

var rows = [];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    maxHeight: 600,
  },
});
var columns = [];
export default function TableBill(props) {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  useEffect(() => {
    if (props.data.type === "Products") {
      columns = [
        { id: "src", label: "Hình ảnh", minWidth: 120 },
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
    } else {
      if (props.data.type === "Account") {
        columns = [
          { id: "name", label: "ID", minWidth: 100 },
          { id: "fullname", label: "Tên tài khoản", minWidth: 120 },

          {
            id: "phone",
            label: "Số điện thoại",
            minWidth: 170,
            align: "right",
            format: (value) => value.toLocaleString("en-US"),
          },
          {
            id: "address",
            label: "Địa chỉ",
            minWidth: 250,
            align: "right",
            format: (value) => value.toLocaleString("en-US"),
          },
        ];
      }
    }
    if (props.data.type === "Bill") {
      columns = [
        { id: "id", label: "ID", minWidth: 100 },
        { id: "fullname", label: "Người mua", minWidth: 120 },

        {
          id: "date",
          label: "Ngày mua",
          minWidth: 170,
          align: "left",
          format: (value) => value.toLocaleString("en-US"),
        },
        {
          id: "phone",
          label: "Số điện thoại",
          minWidth: 100,
          align: "left",
          format: (value) => value.toLocaleString("en-US"),
        },
        {
          id: "address",
          label: "Địa chỉ",
          minWidth: 250,
          align: "left",
          format: (value) => value.toLocaleString("en-US"),
        },
        {
          id: "total",
          label: "Tổng tiền",
          minWidth: 100,
          align: "right",
          format: (value) => value.toLocaleString("en-US"),
        },
      ];
    } else {
      if (props.data.type === "billInfo") {
        columns = [
          { id: "name", label: "Tên sản phẩm", minWidth: 190 },
          {
            id: "pirce2",
            label: "Giá",
            minWidth: 120,
            align: "left",
            format: (value) => value.toLocaleString("en-US"),
          },
          {
            id: "quantity",
            label: "Số lượng",
            minWidth: 100,
            align: "left",
            format: (value) => value.toLocaleString("en-US"),
          },
        ];
      }
    }
    setState(props.data.data);
  }, [props.data]);

  const deleteItem = async (row) => {
    let index = state.findIndex((item) => item.id === row.id);
    state.splice(index, 1);
    setState([...state]);
    try {
      await callApi(props.data.type + "/" + row.id, "DELETE");
      swal("Đã xóa", {
        icon: "success",
      });
    } catch (e) {
      swal("Error", {
        icon: "Warning",
      });
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const check =()=>{
    if(state){
      return state;
    }else{
      return [];
    }
  }
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              {[{ a: 4 }].map(() => {
                if (props.data.type !== "billInfo") {
                  return (
                    <TableCell
                      key="action"
                      align="center"
                      style={{ minWidth: 200 }}
                    >
                      Hành động
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {check()
              .sort(function (a, b) {
                return a.id - b.id;
              })
              .reverse()
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if (column.id === "src") {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <div style={{ width: "90px", height: "90px" }}>
                              <img
                                style={{ width: "100%", height: "100%" }}
                                src={value}
                                alt=""
                              />
                            </div>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {typeof value === "number"
                              ? Helper.formatDollar(value)
                              : value}
                          </TableCell>
                        );
                      }
                    })}
                    {[{ a: 3 }].map(() => {
                      if (props.data.type !== "billInfo") {
                        return (
                          <TableCell key="action" align="right">
                            <Button
                              style={{ margin: "3px" }}
                              variant="contained"
                              size="small"
                              color="primary"
                              onClick={() => {
                                props.handleOpen2(row, "PUT");
                              }}
                            >
                              {props.data.type === "Bill" ? "View" : "Edit"}
                            </Button>
                            <Button
                              onClick={() => {
                                swal({
                                  title: "Bạn có chắc là muốn xóa???",
                                  text: "Ấn ok để tiếp tục!",
                                  icon: "warning",
                                  buttons: true,
                                  dangerMode: true,
                                }).then((willDelete) => {
                                  if (willDelete) {
                                    deleteItem(row);
                                  }
                                });
                              }}
                              style={{ margin: "3px" }}
                              variant="contained"
                              size="small"
                              color="secondary"
                            >
                              Delete
                            </Button>
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3 , 25, 100]}
        component="div"
        count={check().length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
