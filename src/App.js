import "./App.css";
// import Layout from "./componenets/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./container/signin/index";
import Signup from "./container/signup/index";
import Home from "./container/Home/index";
// import NavDropdown from "react-bootstrap/NavDropdown";
function App() {
  return (
    <div className="App">
      {/* <div class="jumbotron">
        <h>Hello Admin ! </h>
      </div> */}
      {/* <Layout>
        <h1>Hello Admin ! </h1>
      </Layout> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
