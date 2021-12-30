import React, { useEffect } from "react";
import Card from "../../UI/Card/Card";
import Status from "../Status/Status";

const StatusList = ({ employeeName, statusDate }) => {
  let statusListData = [
    {
      objId: 1,
      employeeId: "HM0008441",
      employeeName: "Ankush More",
      date: "2021/01/16",
      achievements: [
        "Worked on status-report-react application",
        "Documentation of DocuSign integration",
        "HGMD code analysis",
        "Practice connect",
      ],
      impediments: [
        "Unable to run code because of VPN access- raised ticket for same",
        "Unable to continue because of frequent power issue",
      ],
      nextDayPlan: "Complete status-report-react application",
    },
    {
      objId: 2,
      employeeId: "HM0008442",
      employeeName: "Akshay Gaidhani",
      date: "2019/12/16",
      achievements: [
        "Worked on status-report-react application",
        "Documentation of DocuSign integration",
        "HGMD code analysis",
        "Practice connect",
      ],
      impediments: [
        "Unable to run code because of VPN access- raised ticket for same",
        "Unable to continue because of frequent power issue",
      ],
      nextDayPlan: "Complete status-report-react application",
    },
    {
      objId: 3,
      employeeId: "HM0008443",
      employeeName: "Vijay Bhusari",
      date: "2020/01/10",
      achievements: [
        "Worked on status-report-react application",
        "Documentation of DocuSign integration",
        "HGMD code analysis",
        "Practice connect",
      ],
      impediments: [
        "Unable to run code because of VPN access- raised ticket for same",
        "Unable to continue because of frequent power issue",
      ],
      nextDayPlan: "Complete status-report-react application",
    },
    {
      objId: 4,
      employeeId: "HM0008444",
      employeeName: "Aditya Arde",
      date: "2021/01/16",
      achievements: [
        "Worked on status-report-react application",
        "Documentation of DocuSign integration",
        "HGMD code analysis",
        "Practice connect",
      ],
      impediments: [
        "Unable to run code because of VPN access- raised ticket for same",
        "Unable to continue because of frequent power issue",
      ],
      nextDayPlan: "Complete status-report-react application",
    },
  ];

  let filteredStatusList = statusListData;

  filteredStatusList = statusListData.filter((status) => {
    return (
      status.employeeName.toLowerCase().includes(employeeName.toLowerCase()) &&
      status.date.includes(statusDate)
    );
  });

  return (
    <Card>
      {filteredStatusList.map((status) => {
        return (
          <Status
            key={status.objId}
            employeeName={status.employeeName}
            date={status.date}
            achievements={status.achievements}
            impediments={status.impediments}
            nextDayPlan={status.nextDayPlan}
          />
        );
      })}
    </Card>
  );
};

export default StatusList;
