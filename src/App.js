import "bootstrap/dist/css/bootstrap.css";
import StatusList from "./Components/Status/StatusList/StatusList";
import StatusListFilter from "./Components/Status/StatusListFilter/StatusListFilter";

import Footer from "./Components/UI/Footer/Footer";
import Header from "./Components/UI/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="col-md-12 row g-0">
        
          <StatusListFilter />
        <div className="col-md-9 ">
          <div className="text-center mb-2 mt-2 border-top border-bottom bg-light card">
            <h4>Team Status</h4>
          </div>
          <div>
            <StatusList />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
