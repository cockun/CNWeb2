import React, { useState,useEffect } from "react";
import classes from "../../css/Account.module.css";
import Button from "@material-ui/core/Button";
import { callApi } from "../../utils/apiCaller";
import TableProduct from './TableProduct'


export default function Products() {
  const [state, setState] = useState([]);

  useEffect(() => {
    callApi("Products", "GET").then((res) => {
      setState(res.data);
    });
  }, []);
  console.log(state)

  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className={classes.titleContainer}>
          <p>Sản phẩm </p>
        </div>
        <div style={{ marginRight: "50px" }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Thêm mới
          </Button>
        </div>
      </div>

      <div className={{margin:10}}>
        <div className={classes.searchContainer}>
          <input type="text" className={classes.textSeacch} />
          <span>Tìm kiếm:</span>
        </div>

        <TableProduct data={state} />
      </div>
    </div>
  );
}
