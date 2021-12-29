import React from "react";
import CardBody from "../../UI/CardBody/CardBody";

const Status = ({
  employeeName,
  date,
  achievements,
  impediments,
  nextDayPlan,
}) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="border col-md-2">
          <div className="card-body">
            <h5 className="card-title">{employeeName}</h5>
            <span className="card-text">{date}</span>
          </div>
        </div>
        <div className="border col-md-5">
          <CardBody title="Achievements" dataList={achievements} />
        </div>
        <div className="border col-md-5">
          <CardBody title="Impediments" dataList={impediments} />
        </div>
        <div className="bg-light g-0 row">
          <div className="col-md-2">
            <h6 className="p-2">Next day plan</h6>
          </div>
          <div className="col-md-10">
            <p className="p-2 card-text">{nextDayPlan}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
