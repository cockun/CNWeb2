import React from "react";

import LeftPanel from "./LeftPanel";

export default function HomeAdmin() {
  const listTasks2 = [
    { name: "Tài khoản", toLink: "/Admin/" },
    { name: "Sản phẩm", toLink: "/Admin/products" },
    { name: "Đon hàng", toLink: "/Admin/bills" },
  ];
  return <LeftPanel data2={listTasks2} />;
}
