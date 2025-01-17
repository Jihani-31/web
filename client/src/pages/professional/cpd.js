import React from "react";
import "./style/cpd.css";
import "./style/Ongoingtabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

function cpd() {
  const record = [
    {
      id: 1,
      type: "CSSL Course",
      description: "Java Programming Beginner Level",
      status: "Approved",
    },
    {
      id: 2,
      type: "CSSL Workshop",
      description: "Machine Learning Workshop",
      status: "Pending",
    },
    {
      id: 3,
      type: "Guest Lecture",
      description: "UCSC - Flutter Tech Talk",
      status: "Pending",
    },
    {
      id: 4,
      type: "Other Cource",
      description: "PHP for Web Development",
      status: "Rejected",
    },
    {
      id: 5,
      type: "Other Cource",
      description: "Java Web Development with Spring Framework",
      status: "Approved",
    },
  ];

  const recordList = record.map(record => (
    <>
      <div className="recentRec">
        <div className="recType">{record.type}</div>
        <div className="recAllign">
          <div className="recDes">{record.description}</div>
          <div data-status={record.status} className="recPending">{record.status}</div>
        </div>
      </div>
    </>
  ));

  return (
    <div className="main">
      <div className="btn-cpdAdd">
        <div className="add-cpd-btn">
          <Link to={"/addCPD/"} className="add-cpd-btn">
            <a href="#" className="add-cpd-btn">
              ADD
            </a>
          </Link>
        </div>
      </div>
      <div className="recentCPDRec">
        <Tabs /*style={{ paddingTop: "5px", paddingLeft: "3px" }}*/>
          {" "}
          <TabList>
            <Tab>All</Tab>
            <Tab>Approved</Tab>
            <Tab>Pending</Tab>
            <Tab>Rejected</Tab>
          </TabList>
          <h3 className="titleRecent">Recent CPD Submissions</h3>
          <TabPanel className="all">
            <div className="recList">{recordList}</div>
          </TabPanel>
          <TabPanel className="approved">
            <div className="recList">{recordList}</div>
          </TabPanel>
          <TabPanel className="pending">
            <div className="recList">{recordList}</div>
          </TabPanel>
          <TabPanel className="rejected">
            <div className="recList">{recordList}</div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default cpd;
