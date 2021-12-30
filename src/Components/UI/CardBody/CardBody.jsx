import React from "react";

const CardBody = ({ title, dataList }) => {
  return (
    <div className="card-body p-0">
      <h5 className="card-header">{title}</h5>
      <div className="card-text overflow-auto" style={{ height: "200px" }}>
        <ul>
          {dataList.map((listItem,index) => {
            return <li key={index}>{listItem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardBody;
