import React, { useState } from "react";

const StatusListFilter = () => {
  const [dateBy, setDateBy] = useState("date");

  const radioDateChangeHandler = (e) => {
    console.log(dateBy);
    setDateBy(e.target.value);
  };

  return (
    <div className="col-md-3">
      <div className="m-2 card">
        <div className="card-header text-center">
          <h6>FILTER STATUS</h6>
        </div>
        <div className="card-body">
          <div>
            <div className="input-group-text mb-2">
              <label htmlFor="fldName" className="form-label me-2">
                NAME
              </label>
              <input
                type="search"
                className="form-control"
                name="txt-name"
                id="fldName"
              />
            </div>
            <div className="m-2 row">
              <div className="col-6 p-0">
                <input
                  className="me-2"
                  type="radio"
                  name="rd-date"
                  value="date"
                  onChange={radioDateChangeHandler}
                  id="rdDate"
                  defaultChecked
                />
                <label htmlFor="rdDate">DATE</label>
              </div>
              <div className="col-6 p-0">
                <input
                  className="me-2"
                  type="radio"
                  name="rd-date"
                  value="month"
                  onChange={radioDateChangeHandler}
                  id="rdMonth"
                />
                <label htmlFor="rdMonth">MONTH</label>
              </div>
            </div>
            {dateBy === "date" && (
              <div className="input-group-text mb-2">
                <label htmlFor="fldDate" className="form-label me-2">
                  BY DATE
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="dt-by-date"
                  max={new Date().toISOString().split("T")[0]}
                  id="fldDate"
                />
              </div>
            )}
            {dateBy === "month" && (
              <div className="input-group-text mb-2">
                <label htmlFor="fldMonth" className="form-label me-2">
                  BY MONTH
                </label>
                <input
                  type="month"
                  className="form-control"
                  name="dt-by-month"
                  id="fldMonth"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusListFilter;
