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
export default function TableData(props) {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [count, setCount] = useState(0);

  // useEffect(() => {
    
  // }, [props.data]);

  useEffect(() => {
    setCount(props.data.count);
    if (props.data.type === "Products") {
      columns = [
        { id: "IMGSRC", label: "Hình ảnh", minWidth: 120 },
        { id: "NAME", label: "Tên sản phẩm", minWidth: 120 },
        { id: "CATEGORYID", label: "Loại", minWidth: 120 },
        {
          id: "PRICE",
          label: "Giá gốc",
          minWidth: 120,
          align: "right",
          format: (value) => value.toLocaleString("en-US"),
        },
        {
          id: "DISCOUNT",
          label: "Giá đã giảm",
          minWidth: 120,
          align: "right",
          format: (value) => value.toLocaleString("en-US"),
        },
        {
          id: "DESCRIPTION",
          label: "Mô tả",
          minWidth: 222,
          align: "left",
          format: (value) => value.toLocaleString("en-US"),
        },
      ];
    } else {
      if (props.data.type === "Account") {
        columns = [
          { id: "NAME", label: "ID", minWidth: 100 },
          { id: "FULLNAME", label: "Tên tài khoản", minWidth: 120 },

          {
            id: "PHONE",
            label: "Số điện thoại",
            minWidth: 170,
            align: "right",
            format: (value) => value.toLocaleString("en-US"),
          },
          {
            id: "ADDRESS",
            label: "Địa chỉ",
            minWidth: 250,
            align: "right",
            format: (value) => value.toLocaleString("en-US"),
          },
          {
            id: "POINTS",
            label: "Điểm",
            minWidth: 250,
            align: "right",
            format: (value) => value.toLocaleString("en-US"),
          },
          {
            id: "CREATEDATE",
            label: "Ngày tạo",
            minWidth: 250,
            align: "right",
            format: (value) => value.toLocaleString("en-US"),
          },
          {
            id: "EMAIL",
            label: "Email",
            minWidth: 250,
            align: "right",
            format: (value) => value.toLocaleString("en-US"),
          }
        ];
      }
    }
    if (props.data.type === "Bill") {
      columns = [
        { id: "NAME", label: "ID", minWidth: 100 },
        { id: "FULLNAME", label: "Người mua", minWidth: 120 },

        {
          id: "DATEBUY",
          label: "Ngày thanh toán",
          minWidth: 170,
          align: "left",
          format: (value) => value.toLocaleString("en-US"),
        },
        {
          id: "PHONE",
          label: "Số điện thoại",
          minWidth: 100,
          align: "left",
          format: (value) => value.toLocaleString("en-US"),
        },
        {
          id: "ADDRESS",
          label: "Địa chỉ",
          minWidth: 250,
          align: "left",
          format: (value) => value.toLocaleString("en-US"),
        },
        {
          id: "TOTAL",
          label: "Tổng tiền",
          minWidth: 100,
          align: "right",
          format: (value) => value.toLocaleString("en-US"),
        },
      ];
    } else {
      if (props.data.type === "billInfo") {
        columns = [
          { id: "PRODUCTNAME", label: "Tên sản phẩm", minWidth: 190 },
          {
            id: "PRICE",
            label: "Giá",
            minWidth: 120,
            align: "left",
            format: (value) => value.toLocaleString("en-US"),
          },
          {
            id: "QUANITY",
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
    if(props.data.type === "Account"){
      props.deleteItem2(row.ACCOUNTID);
    }else{
      props.deleteItem2(row.ID);
    }
   
  };

  console.log(state);
  const handleChangeRowsPerPage2 = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };
  const check = () => {
    if (state) {
      return state;
    } else {
      return [];
    }
  };

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
            {check().map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];

                    if (column.id === "IMGSRC") {
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
                                  setCount(count-1)
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        onChangePage={(event, newPage) => {
          props.handleChangePage(newPage);
          setPage(newPage + 1);
        }}
        onChangeRowsPerPage={(event) => {
          handleChangeRowsPerPage2(event);

          props.handleChangeRowsPerPage(+event.target.value);
        }}
      />
    </Paper>
  );
}
