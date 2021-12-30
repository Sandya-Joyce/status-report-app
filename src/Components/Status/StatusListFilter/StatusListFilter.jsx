import React, { useState, useRef } from "react";

const StatusListFilter = ({ searchByEmployeeName, searchByDate }) => {
  const refEmployeeName = useRef("");
  const refDate = useRef("");
  const [dateType, setDateType] = useState("date");

  const EmployeeNameChangeHandler = () => {
    searchByEmployeeName(refEmployeeName.current.value);
  };

  const DateTypeChangeHandler = () => {
    searchByDate(refDate.current.value.replace(/-/g, "/"));
  };

  return (
    <div className="col-md-3 user-select-none">
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
                ref={refEmployeeName}
                onChange={EmployeeNameChangeHandler}
                type="search"
                className="form-control"
                autoComplete="off"
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
                  onChange={(e) => {
                    setDateType(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setDateType(e.target.value);
                  }}
                  id="rdMonth"
                />
                <label htmlFor="rdMonth">MONTH</label>
              </div>
            </div>
            <div className="input-group-text mb-2">
              <label htmlFor="fldDate" className="form-label me-2">
                BY {dateType.toUpperCase()}
              </label>
              <input
                ref={refDate}
                type={dateType}
                className="form-control"
                name="dt-by-date"
                max={new Date().toISOString().split("T")[0]}
                id="fldDate"
                onChange={DateTypeChangeHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusListFilter;
