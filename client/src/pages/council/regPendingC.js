import React from "react";
import "./style/regApprove.css";
import data from "./data";
import Card from "@material-ui/core/Card";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Button = () => <button type="button">Approve</button>;

const columns = [
  {
    name: "Member ID",
    selector: "mid",
    sortable: true,
    width: "200px",
  },
  {
    name: "Member Name",
    selector: "mname",
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
  {
    name: "Resgistred Date",
    selector: "regdate",
    sortable: true,
  },
  {
    name: "Action",
    button: true,
    cell: () => (
      <Link to={"/regRejected/"} style={{ textDecoration: "none" }}>
        <Button className="approveBtn">Approve</Button>
      </Link>
    ),
  },
];

const conditionalRowStyles = [
  {
    when: (row) => row.status === "Student Member",
    style: {
      backgroundColor: "#D5E6F3",
      color: "black",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  {
    when: (row) => row.status === "Associate Member",
    style: {
      backgroundColor: "#94C0E1",
      color: "black",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  {
    when: (row) => row.status === "Professional Member",
    style: {
      backgroundColor: "#4C90C3",
      color: "black",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
];

function regPendingC() {
  return (
    <>
      {" "}
      <div className="regEmp">
      <div className="leftPanelS">
          <Link to={"/regApproveC"} style={{ textDecoration: "none" }}>
            <div className="approved" style={{ backgroundColor: "white" }}>
              <h3>Verified Users</h3>
              <h1>161</h1>
            </div>
          </Link>
          <Link to={"/regPendingC/"} style={{ textDecoration: "none" }}>
            <div className="pending" style={{ backgroundColor: "#0a0363" }}>
              <h3 style={{ color: "white" }}>Pending Users</h3>
              <h1 style={{ color: "white" }}>10</h1>
            </div>
          </Link>
          <Link to={"/regRejectedC/"} style={{ textDecoration: "none" }}>
            <div className="rejected" style={{ backgroundColor: "WHITE" }}>
              <h3>Rejected Users</h3>
              <h1>02</h1>
            </div>
          </Link>
        </div>
        <div className="rightPanel">
          <Card>
            <DataTable
              title="Pending Members"
              columns={columns}
              data={data}
              pagination
              conditionalRowStyles={conditionalRowStyles}
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default regPendingC;
