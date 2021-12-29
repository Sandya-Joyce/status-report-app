import React from "react";
import Card from "../../UI/Card/Card";
import Status from "../Status/Status";

const StatusList = () => {
  let statusListData = [
    {
      objId: 1,
      employeeId: "HM0008441",
      employeeName: "Ankush More",
      date: "23/January/2021",
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
      employeeId: "HM0008441",
      employeeName: "Ankush More",
      date: "23/January/2021",
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
      employeeId: "HM0008441",
      employeeName: "Ankush More",
      date: "23/January/2021",
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
      employeeId: "HM0008441",
      employeeName: "Ankush More",
      date: "23/January/2021",
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
  return (
    <Card>
      {statusListData.map((status) => {
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
