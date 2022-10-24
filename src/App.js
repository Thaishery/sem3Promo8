import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import NavLayout from "./layouts/NavLayout";
import ContactView from "./views/ContactView";

function App() {
  return (
    <Router>
      <Routes>
        <Route element= {<NavLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="contact" element={<ContactView/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
