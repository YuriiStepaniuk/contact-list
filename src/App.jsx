import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ContactItem from "./components/ContactItem";
import ContactList from "./pages/ContactList";
import NewContact from "./pages/NewContact";
import NotFound from "./pages/NotFound";
import SideBar from "./components/SideBar";
import UpdateContact from "./pages/UpdateContact";

function App() {
  return (
    <Router className="">
      <div className="flex">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="/new-contact" element={<NewContact />} />
            <Route path="/update-contact" element={<UpdateContact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
