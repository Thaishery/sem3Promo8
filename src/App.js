import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import NavLayout from "./layouts/NavLayout";
import ContactView from "./views/ContactView";
import RectanglesView from "./views/Rectangle";
import UsersView from "./views/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route element= {<NavLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="contact" element={<ContactView/>}/>
          <Route path="rectangles" element={<RectanglesView/>}/>
          <Route path="users" element={<UsersView/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
