import "bootstrap/dist/css/bootstrap.css";
import StatusList from "./Components/Status/StatusList/StatusList";

import Footer from "./Components/UI/Footer/Footer";
import Header from "./Components/UI/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="col-md-12 row g-0">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <div></div>
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
