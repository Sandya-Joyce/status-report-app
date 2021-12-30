import react, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import StatusList from "./Components/Status/StatusList/StatusList";
import StatusListFilter from "./Components/Status/StatusListFilter/StatusListFilter";

import Footer from "./Components/UI/Footer/Footer";
import Header from "./Components/UI/Header/Header";

function App() {
  const [employeeNameToSearch, setemployeeNameToSearch] = useState("");
  const [statusDateToFilter, setStatusDateToFilter] = useState("");

  const searchByEmployeeNameHandler = (str) => {
    setemployeeNameToSearch(str);
  };

  const searchByDateHandler = (date) => {
    setStatusDateToFilter(date);
  };

  return (
    <>
      <Header />
      <div className="col-md-12 row g-0">
        <StatusListFilter
          searchByEmployeeName={searchByEmployeeNameHandler}
          searchByDate={searchByDateHandler}
        />
        <div className="col-md-9 ">
          <div className="text-center mb-2 mt-2 border-top border-bottom bg-light card">
            <h4>Team Status</h4>
          </div>
          <div>
            <StatusList
              employeeName={employeeNameToSearch}
              statusDate={statusDateToFilter}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
