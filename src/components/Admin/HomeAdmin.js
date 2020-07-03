import React from "react";

import LeftPanel from "./LeftPanel";

export default function HomeAdmin({ route }) {
  const checkAdmin = () => {
    let myAccount = JSON.parse(localStorage.getItem("myAccountInfo"));
    if (myAccount) {
      if (myAccount.author !== null && myAccount.author === "0") {
        return <LeftPanel data2={listTasks2} route={route} />;
      } else {
        alert("Lỗi");
      }
    }
  };
  const listTasks2 = [
    { name: "Tài khoản", toLink: "/Admin/Account" },
    { name: "Sản phẩm", toLink: "/Admin/products" },
    { name: "Đon hàng", toLink: "/Admin/bills" },
  ];
  return <>{checkAdmin()}</>;
}
