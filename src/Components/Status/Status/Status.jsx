import React from "react";

const Status = () => {
  let date = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="border col-md-2">
          <div className="card-body">
            <h5 className="card-title">Member Name</h5>
            <span className="card-text">{date}</span>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="border col-md-5">
          <div className="card-body p-0">
            <h5 className="card-header">Achievements</h5>
            <div className="card-text overflow-auto" style={{ height: "200px" }}>
              <ul>
                <li>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a wider card with supporting text below as a
                  natural lead-in to additional content.
                </li>
                This content is a little bit longer.
                <li>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </li>
                <li>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border col-md-5">
          <div className="card-body p-0">
            <h5 className="card-header">Impediments</h5>
            <div className="card-text overflow-auto" style={{ height: "200px" }}>
              <ul>
                <li>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a wider card with supporting text below as a
                  natural lead-in to additional content.
                </li>
                This content is a little bit longer.
                <li>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </li>
                <li>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-light g-0 row">
          <div className="col-md-2">
            <h6 className="p-2">Next day plan</h6>
          </div>
          <div className="col-md-10">
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
